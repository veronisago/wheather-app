import { ADD_FAVOURITES, DELETE_FAVOURITES, FAVOURITE_DETAIL, GET_CITY_WEATHER } from "./actions";

const initialState = {
    cityDetail: {},
    favouriteCities: []
};


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CITY_WEATHER:
            return {
                ...state,
                cityDetail: action.payload
            }
        case ADD_FAVOURITES:
            return {
                ...state,
                favouriteCities: state.favouriteCities.some(e => e.id == action.payload.id)
                    ? state.favouriteCities
                    : state.favouriteCities.concat(action.payload)
            }
        case DELETE_FAVOURITES:
            return {
                ...state,
                favouriteCities: state.favouriteCities.filter((city) => city.id !== action.payload)
            }
        case FAVOURITE_DETAIL:
            return {
                ...state,
                cityDetail: action.payload
            }

        default:
            return state;
    }
}

export default rootReducer;