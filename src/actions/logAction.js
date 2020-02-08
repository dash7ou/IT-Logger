import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG
} from "./type";


// get logs 
export const getLogs = ()=> async dispatch=>{
    try{
        dispatch(setLoading());

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

// set loading true
export const setLoading = ()=>({
    type: SET_LOADING
})