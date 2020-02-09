import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR
} from "../actions/type";


const initialState = {
    techs: null,
    loading: false,
    error: null
}

export default (state = initialState , action)=>{
    switch(action.type){
        case GET_TECHS:
            return{
                ...state,
                techs: action.techs,
                loading: false
            }
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        case ADD_TECH:
            return {
                ...state,
                techs:[
                    ...state.techs,
                    {
                        ...action.data
                    }
                ]
            }
        case DELETE_TECH:
            return {
                ...state, 
                techs:[
                    ...state.techs.filter(tech => tech.id !== action.id)
                ]
            }
        case TECHS_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}