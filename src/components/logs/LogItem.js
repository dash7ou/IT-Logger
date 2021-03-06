import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import M from "materialize-css/dist/js/materialize.min.js";


const LogItem = ({ log , deleteLogs, setCurrent}) => {
    const onDelete = ()=>{
        deleteLogs(log.id);
        M.toast({html: 'Log Deleted'})
    }

    const onUpdate = ()=>{
        setCurrent(log)
    }

    return (
        <li className="collection-item">
            <div>
                <a href='#edit-log-modal'
                    onClick={onUpdate}
                    className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
                > 
                    { log.message } 
                </a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID #{log.id}</span> last updated by{" "}
                    <span className="black-text">{log.tech}</span> on {" "}
                    <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
                </span>
                <a href="#!" onClick={onDelete} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
}

export default LogItem
