import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourites } from '../../store/actions';

function CityDetail() {

    const cityDetail = useSelector((state) => state.cityDetail);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addFavourites(cityDetail))
    }

    if (cityDetail?.main) {
        return (
            <div>
                <h3>{cityDetail.name} </h3>
                <h3>{cityDetail.main.temp} </h3>
                <h3>{cityDetail.weather[0].description } </h3>

                <button onClick={handleClick}>love it</button>
            </div>
        )
    }
    return (
        <div>
            no hay  nada
        </div>
    )


}

export default CityDetail