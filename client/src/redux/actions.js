export function getAllVideogames(){
    return dispatch => fetch("http://localhost:3001/videogames")
        // da el json
        .then(res => res.json())
        .then(payload => {
            dispatch({type:"GET_ALL_GAMES", payload})
        })
        .catch(error => console.warn(error))
}