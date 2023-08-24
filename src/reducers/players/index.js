import { GET_LIST_PLAYER } from "../../actions/playerAction"
import { ADD_GAMES } from "../../actions/playerAction"
import { GET_GAMES } from "../../actions/playerAction"
import { GET_MATCHES } from "../../actions/playerAction"

const initialState ={
    getListPlayerResult: false,
    getListPlayerLoading: false,
    getListPlayerError: false,

    addGamesResult: false,
    addGamesLoading: false,
    addGamesError: false,

    getGameResult:false,
    getGameLoading:false,
    getGameError:false,

    getMatchesResult:false,
    getMatchesLoading:false,
    getMatchesError:false,

}


const player = (state = initialState, action) =>{
    switch(action.type){
        case ADD_GAMES:
            return{
                ...state,
                addGamesResult: action.payload.data,
                addGamesLoading: action.payload.loading,
                addGamesError: action.payload.errorMessage,
            }
            case GET_MATCHES:
            return{
                ...state,
                getMatchesResult: action.payload.data,
                getMatchesLoading: action.payload.loading,
            }
            case GET_GAMES:
            return{
                ...state,
                getGameResult: action.payload.data,
                getGameLoading: action.payload.loading,
             
            }
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