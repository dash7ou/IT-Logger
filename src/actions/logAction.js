import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR
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

// set loading true
export const setLoading = ()=>({
    type: SET_LOADING
})