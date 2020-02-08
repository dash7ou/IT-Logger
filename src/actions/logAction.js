import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG
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

// SET Current
export const setCurrent = log => dispatch =>{
    dispatch({
        type: SET_CURRENT,
        log
    })
}


// Clear current
export const clearCurrent = _ => dispatch =>{
    dispatch({
        type: CLEAR_CURRENT
    })
}

// update log
export const updateLog = (newData) => async (dispatch, getState) =>{
    try{
        const id = getState().log.current.id;
        await fetch(`/logs/${id}`, {
            method: "PUT",
            body: JSON.stringify(newData),
            headers:{
                'Content-Type':'application/json'
            }
        });

        dispatch({
            type: UPDATE_LOG,
            id,
            newData
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