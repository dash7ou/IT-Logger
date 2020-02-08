import React, { useEffect } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import { getLogs, setLoading } from "../../actions/logAction";

const Logs = ({ log: {logs , loading}, getLogs, setLoading}) => {
    useEffect(()=>{
        setLoading();
        getLogs();
        // eslint-disable-next-line
    }, [])

    if(loading || logs === null){
        return <Preloader />;
    }



    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">
                    System Logs
                </h4>
            </li>
            {logs.length === 0 && !loading ? (<p className="center">no Logs to show..</p>):(
                logs.map(log=>(
                    <LogItem log={log} key = {log.id} />
                ))
            )} 
        </ul>
    )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    log: state.log
})

export default connect(mapStateToProps, {getLogs, setLoading})(Logs)