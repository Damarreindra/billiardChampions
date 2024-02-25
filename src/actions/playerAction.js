import axios from "axios";

export const GET_LIST_PLAYER = "GET_LIST_PLAYER"
export const GET_GAMES = "GET_GAMES"
export const ADD_GAMES = "ADD_GAMES"
export const ADD_MATCHES = "ADD_MATCHES"
export const GET_MATCHES = "GET_MATCHES"
export const ADD_WINNER = "ADD_WINNER"
export const ADD_LOSER = "ADD_LOSER"
export const ADD_WINS = "ADD_WINS"

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

  export const addWins = (data) =>{
    const id = data.id
    console.log(id);
      return (dispatch)=>{
          dispatch({
              type : ADD_WINS,
              payload: {
                  loading: true,
                  data: false,
                  errorMessage: false
              }
          })
      
          axios({
              
              method : "PUT",
              url :  `https://64de1471825d19d9bfb20618.mockapi.io/players/${id}`,
              timeout: 120000,
              data: data,
            
             
          })
              .then((res)=>{
                  dispatch({
                    
                      type : ADD_WINS,
                      payload: {
                          loading: false,
                          data: res.data,
                          errorMessage: false
                      }
                  })
              })
              .catch((err)=>{
                  dispatch({
                      type : ADD_WINS,
                      payload: {
                          loading: false,
                          data: false,
                          errorMessage: err.message
                      }
                  })
              })
  
  
      }
  }

  export const addWinner = (data) =>{
    const id = data.id
      return (dispatch)=>{
          dispatch({
              type : ADD_WINNER,
              payload: {
                  loading: true,
                  data: false,
                  errorMessage: false
              }
          })
      
          axios({
              
              method : "PUT",
              url :  `https://64de1471825d19d9bfb20618.mockapi.io/games/${id}`,
              timeout: 120000,
              data: data,
            
             
          })
              .then((res)=>{
                  dispatch({
                    
                      type : ADD_WINNER,
                      payload: {
                          loading: false,
                          data: res.data,
                          errorMessage: false
                      }
                  })
              }).then(alert(`Game ${id} The Winner is ${data.winner.map((e)=>e.name)}`))
              .catch((err)=>{
                  dispatch({
                      type : ADD_WINNER,
                      payload: {
                          loading: false,
                          data: false,
                          errorMessage: err.message
                      }
                  })
              })
  
  
      }
  }

  export const addLoser = (data) =>{
    const id = data.id
      return (dispatch)=>{
          dispatch({
              type : ADD_LOSER,
              payload: {
                  loading: true,
                  data: false,
                  errorMessage: false
              }
          })
      
          axios({
              
              method : "PUT",
              url :  `https://64de1471825d19d9bfb20618.mockapi.io/games/${id}`,
              timeout: 120000,
              data: data,
            
             
          })
              .then((res)=>{
                  dispatch({
                    
                      type : ADD_LOSER,
                      payload: {
                          loading: false,
                          data: res.data,
                          errorMessage: false
                      }
                  })
              })
              .catch((err)=>{
                  dispatch({
                      type : ADD_LOSER,
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
    return (dispatch)=>{
        dispatch({
            type : ADD_WINNER,
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
                  
                    type : ADD_WINNER,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err)=>{
                dispatch({
                    type : ADD_WINNER,
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