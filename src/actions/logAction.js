import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG
} from "./type";


// get logs 
export const getLogs = ()=> async dispatch=>{
    try{   
        const res = await fetch("/logs");
        const data = await res.json();        

        dispatch({
            type: GET_LOGS,
            logs: data
        })
        
    }catch(err){
        dispatch({
            type: LOGS_ERROR,
            error: err.response.data
        })
    }
} 


// Add Log..
export const addLogs = (log)=> async dispatch=>{
    try{
        const res = await fetch("/logs", {
            method: "POST",
            body: JSON.stringify(log),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const data = await res.json();
        dispatch({
            type: ADD_LOG,
            data
        })
    }catch(err){
        dispatch({
            type: LOGS_ERROR,
            error: err.response.data
        })
    }
}

// Delete Logs
export const deleteLogs = (id)=> async dispatch=>{
    try{
        await fetch(`/logs/${id}`, {
            method: "DELETE"
        })

        dispatch({
            type: DELETE_LOG,
            id
        })
    }catch(err){
        dispatch({
            type: LOGS_ERROR,
            error: err.response.data
        })
    }
}

// set loading true
export const setLoading =_ =>dispatch=>{
    dispatch({
        type: SET_LOADING
    })
}