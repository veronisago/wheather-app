import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavourites, favouriteDetail } from '../../store/actions';
import { useNavigate  } from "react-router-dom"
import Nav from '../Nav/Nav';

export default function Favourites() {

    const favouriteCities = useSelector((state) => state.favouriteCities);
    const dispatch = useDispatch();
    const navigate = useNavigate ();

    const handleClick = (id) => {
        dispatch(deleteFavourites(id))
    }

    const handleClickDetail = (city) => {
      dispatch(favouriteDetail(city))
      navigate("/home")
    }
    

    return (
        <div>
            <Nav />
            {favouriteCities.map((city) =>
                <div key={city.id}>
                    <h2>{city.name}</h2>
                    <button onClick={() => handleClick(city.id)}>Delete</button>
                    <button onClick={() => handleClickDetail(city)}>Detail</button>
                </div>
            )}
        </div>
    )
}
