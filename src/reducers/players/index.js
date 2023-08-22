import { GET_LIST_PLAYER } from "../../actions/playerAction"

const initialState ={
    getListPlayerResult: false,
    getListPlayerLoading: false,
    getListPlayerError: false,

}


const player = (state = initialState, action) =>{
    switch(action.type){
        case GET_LIST_PLAYER:
            return{
                ...state,
                getListPlayerResult: action.payload.data,
                getListPlayerLoading: action.payload.loading,
                getListPlayerError: action.payload.errorMessage,
            }
        default:
            return state
    }
}

export default player