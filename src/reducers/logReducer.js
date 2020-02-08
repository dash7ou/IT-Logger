import { 
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG
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
                logs: action.logs,
                loading: false
            }
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        case ADD_LOG:
            return{
                ...state,
                logs: [
                    ...state.logs,
                    {
                        ...action.data
                    }
                ],
                loading: false
            }
        case DELETE_LOG:
            return{
                ...state,
                logs: [
                    ...state.logs.filter(log=> +log.id !== +action.id)
                ],
                loading:false
            }
        case LOGS_ERROR:
            return{
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state
    };
};