export const GET_CITY_WEATHER = 'GET_CITY_WEATHER';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const DELETE_FAVOURITES = 'DELETE_FAVOURITES';
export const FAVOURITE_DETAIL = 'FAVOURITE_DETAIL';
const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

export function getCityWeather(city) {
    return async function (dispatch) {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const json = await response.json();
        dispatch({ type: GET_CITY_WEATHER, payload: json });
    };
}

export function addFavourites(city) {
    return { type: ADD_FAVOURITES, payload: city }
}

export function deleteFavourites(id) {
    return { type: DELETE_FAVOURITES, payload: id }
}

export function favouriteDetail(city) {
    return { type: FAVOURITE_DETAIL, payload: city }
}

