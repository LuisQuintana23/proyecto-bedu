const initialState = {
    videogames: []
}

function rootReducer(state, action) {
    switch (action.type){
        case "GET_ALL_GAMES":
            return {
                ...state
            }
        default:
            return state
    }
}

export default rootReducer