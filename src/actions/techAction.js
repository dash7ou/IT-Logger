import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR
} from "./type";


// Get techs from server...

const getTechs = _=> async dispatch =>{
    try{
        const res = await fetch("/techs");
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            techs: data
        })
    }catch(err){
        dispatch({
            type: TECHS_ERROR,
            error: err.response.data
        })
    }
};


export const setLoading = _ => async dispatch =>{
    dispatch({
        type: SET_LOADING
    })
}