import axios from "axios";

export const GET_LIST_PLAYER = "GET_LIST_PLAYER"
export const GET_GAMES = "GET_GAMES"
export const ADD_GAMES = "ADD_GAMES"
export const ADD_MATCHES = "ADD_MATCHES"
export const GET_MATCHES = "GET_MATCHES"

export const addGames = (data) =>{
      return (dispatch)=>{
          dispatch({
              type : ADD_GAMES,
              payload: {
                  loading: true,
                  data: false,
                  errorMessage: false
              }
          })
      
          axios({
              
              method : "POST",
              url : "https://64de1471825d19d9bfb20618.mockapi.io/games",
              timeout: 120000,
              data: data,
            
             
          })
              .then((res)=>{
                  dispatch({
                    
                      type : ADD_GAMES,
                      payload: {
                          loading: false,
                          data: res.data,
                          errorMessage: false
                      }
                  }).then(window.location=`/game/${res.data.id}`)
              })
              .catch((err)=>{
                  dispatch({
                      type : ADD_GAMES,
                      payload: {
                          loading: false,
                          data: false,
                          errorMessage: err.message
                      }
                  })
              })
  
  
      }
  }

  export const addMatches = (data) =>{
  const {id} = data.id
  console.log(id);
    return (dispatch)=>{
        dispatch({
            type : ADD_MATCHES,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
    
        axios({
            
            method : "POST",
            url :  `https://64de1471825d19d9bfb20618.mockapi.io/games/${id}/matches`,
            timeout: 120000,
            data: data,
          
           
        })
            .then((res)=>{
                dispatch({
                  
                    type : ADD_MATCHES,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err)=>{
                dispatch({
                    type : ADD_GAMES,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })


    }
}

export const getMatches = (data) =>{
    const {id} = data.id
    return(dispatch)=>{
        dispatch({
            type: GET_MATCHES,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })

        axios({
            method : "GET",
            url : `https://64de1471825d19d9bfb20618.mockapi.io/games/${id}/matches`,
            timeout: 120000
        })
            .then((res)=>{
                dispatch({
                    type : GET_MATCHES,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err)=>{
                dispatch({
                    type : GET_MATCHES,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
}

export const getGames = () =>{
    return(dispatch)=>{
        dispatch({
            type: GET_GAMES,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })

        axios({
            method : "GET",
            url : "https://64de1471825d19d9bfb20618.mockapi.io/games",
            timeout: 120000
        })
            .then((res)=>{
                dispatch({
                    type : GET_GAMES,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err)=>{
                dispatch({
                    type : GET_GAMES,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
}
  

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
            url : "https://64e5b7e209e64530d17ee6fa.mockapi.io/players",
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