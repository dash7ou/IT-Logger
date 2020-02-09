import { 
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG,
    SEARCH_LOGS
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
        case SET_CURRENT:
            return {
                ...state,
                current: action.log
            }
        case CLEAR_CURRENT:
            return{
                ...state,
                current: null
            }
        case UPDATE_LOG:
            return{
                ...state,
                logs: [
                    ...state.logs.map(log => log.id === action.id ? action.newData: log)
                ]
            }
        case SEARCH_LOGS:
            return{
                ...state,
                logs: action.logs,
                loading: false
            }
        default:
            return state
    };
};