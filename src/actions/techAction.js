import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR
} from "./type";


// Get techs...

export const getTechs = _=> async dispatch =>{
    try{
        const res = await fetch("/techs");
        const data = await res.json();
        console.log(data)
        dispatch({
            type: GET_TECHS,
            techs: data
        })
    }catch(err){
        dispatch({
            type: TECHS_ERROR,
            error: err.response.statusText
        })
    }
};

// Add techs from 
export const addTechs = tech => async dispatch=>{
    try{
        const res = await fetch("/techs", {
            method: "POST",
            body: JSON.stringify(tech),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const data = await res.json();
        dispatch({
            type: ADD_TECH,
            data
        })
    }catch(err){
        dispatch({
            type: TECHS_ERROR,
            error: err.response.statusText
        })
    }
}

export const setLoading = _ => async dispatch =>{
    dispatch({
        type: SET_LOADING
    })
}