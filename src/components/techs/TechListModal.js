import React, { useEffect } from 'react';
import { connect } from "react-redux";
import TechItem from "./TechItem";
import PropTypes from "prop-types";
import { getTechs, setLoading , deleteTech} from "../../actions/techAction"


const TechListModal = ({ tech: {techs, loading}, deleteTech ,setLoading, getTechs }) => {
    useEffect(()=>{
        setLoading()
        getTechs();
        // eslint-disable-next-line
    }, [])

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4> Technician List </h4>
                <ul className="collection">
                    {!loading && techs !== null && techs.map(tech=>(
                        <TechItem key={tech.id} tech={tech} deleteTech={deleteTech} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired,
    setLoading: PropTypes.func.isRequired,
    getTechs: PropTypes.func.isRequired,
    deleteTech: PropTypes.func.isRequired,
}

const mapStateToProps = state =>({
    tech: state.tech
})


export default connect(mapStateToProps,
    {
        getTechs,
        setLoading,
        deleteTech
    }
)(TechListModal)