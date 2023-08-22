import axios from "axios";

export const GET_LIST_PLAYER = "GET_LIST_PLAYER"

export const getListPlayer = () =>{
    return(dispatch)=>{
        dispatch({
            type: GET_LIST_PLAYER,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })

        axios({
            method : "GET",
            url : "https://64de1471825d19d9bfb20618.mockapi.io/players",
            timeout: 120000
        })
            .then((res)=>{
                dispatch({
                    type : GET_LIST_PLAYER,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err)=>{
                dispatch({
                    type : GET_LIST_PLAYER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
}