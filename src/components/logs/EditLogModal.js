import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TechSelectOption from "../techs/TechSelectOption";
import M from "materialize-css/dist/js/materialize.min.js";
import { updateLog, clearCurrent } from "../../actions/logAction";

const EditLogModal = ({log, updateLog, clearCurrent})=>{
    const [ message , setMessage ] = useState('');
    const [ attention , setAttention ] = useState(false);
    const [ tech, setTech ] = useState('');


    useEffect(()=>{
        if(log.current){
            const {
                current:{
                    message,
                    attention, 
                    tech
                }
            } = log
    
            setMessage(message);
            setAttention(attention);
            setTech(tech)
        }
        //eslint-disable-next-line
    }, [ log ])

    const onSubmit = ()=>{
        if(message === '' || tech === ''){
            M.toast({html: 'Please enter a message and tech!'})
        }else{
            updateLog({
                message,
                attention,
                tech,
                date: new Date()
            })
            // clearCurrent();

            M.toast({html: 'Update logs done.'})

        }

        // clear Fields
        setMessage('');
        setTech('');
        setAttention(false);
    }

    return(
        <div 
            id='edit-log-modal' 
            className="modal"
            style={modalStyle}
        >
            <div className="modal-content">
                <h4>
                    Edit System Log
                </h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="message" 
                            value={message} 
                            onChange={e=>setMessage(e.target.value)} 
                        />
                        <label htmlFor="message" className="active">
                            Log Message
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select 
                            name="tech" 
                            value={tech} 
                            className="browser-default" 
                            onChange={e=>setTech(e.target.value)}
                        >
                            <option value='' disabled> Select Technician</option>
                            <TechSelectOption />
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input 
                                    type="checkbox"
                                    className="filled-in"
                                    checked={attention}
                                    value={attention}
                                    onChange={e => setAttention(!attention)}
                                />
                                <span> Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div clasName="modal-footer">
                <a 
                    href="#!" 
                    onClick={onSubmit} 
                    className="modal-close waves-effect btn-change blue waves-light btn"
                > 
                    Enter
                </a>
            </div>
        </div>
    )
}


const modalStyle= {
    width: '75%',
    height: '75%' 
}

const mapStateToProps = state=>({
    log: state.log
})

export default connect(mapStateToProps,{
    updateLog,
    clearCurrent
})(EditLogModal);