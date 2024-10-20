

export const fetchPlayer = async()=>{
    try {
        const response = await fetch("http://8.215.1.120:3000/api/players")
        const data = await response.json()
        return data
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
}

export const startMatch = async(players, venue)=>{
    try {
        if(players.length === 0) return;
        const response = await fetch('http://8.215.1.120:3000/api/game',{
            method: "POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({playerIds: players, venue: venue})
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const result = await response.json();
          return result
    } catch (error) {
        console.error('Error starting game:', error.message);

    }

}

export const fetchMatches =async()=>{
    try {
        const response = await fetch('http://8.215.1.120:3000/api/game')
        const data = await response.json()
        return data
    } catch (error) {
        alert(error.message)
    }
}


export const fetchMatchById =async(id)=>{
    try {
        const response = await fetch(`http://8.215.1.120:3000/api/game/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        alert(error.message)
    }
}

export const updateScore = async(id, score, matchId)=>{
    try {
        const response = await fetch('http://8.215.1.120:3000/api/game/updateScore',{
            method: "PATCH",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({playerId: id, score: score, matchId: matchId})
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const result = await response.json();
          return result
    } catch (error) {
        console.error('Error starting game:', error.message);
    }
}

export const getWinner=async(matchId, playerId)=>{
    try{
        const response = await fetch("http://8.215.1.120:3000/api/game/getWinner",{
            method:"PATCH",
            headers:{
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({matchId:matchId, playerId: playerId})
        })
        if(!response.ok){
            throw new Error(response.statusText)
        }
        const result = await response.json()
        return result
    }catch(err){
        alert(err.message)
    }
}

export const addPlayer =async(username, photoUrl)=>{
    try {
        const response = await fetch("http://8.215.1.120:3000/api/players",{
            method:"POST",
            headers:{
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({username: username, photoUrl:photoUrl, wins:0})
        })
        if(!response.ok){
            throw new Error(response.statusText)

        }
        const result = await response.json()
        return result
    } catch (error) {
        alert(error.message)

        
    }
}