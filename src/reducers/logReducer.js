import { 
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR
 } from "../actions/type";

const initialState ={
    logs : null,
    current: null,
    loading: false,
    error: null
}

export default (state = initialState , action)=>{
    switch(action.type){
        case GET_LOGS:
            return{
                ...state,
                logs: action.data
            }
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        case LOGS_ERROR:
            return{
                ...state,
                error: action.error
            }
        default:
            return state
    };
};