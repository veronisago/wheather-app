import React, { useState } from 'react'
import styles from './Search.module.css';
import { useDispatch } from 'react-redux';
import { getCityWeather } from '../../store/actions';

function Search() {
    const [city, setCity] = useState('')
    const dispatch = useDispatch();
    

    const handleChange = (event) => {
        setCity(event.target.value)
    }

    const handleSubmit = (event) => {
        if (event.key === "Enter") {
           dispatch(getCityWeather(city)) 
           setCity('')
        }
    }

    return (
        <div>
            <input
                className={styles.inputSearch}
                value={city} type="text"
                placeholder="City..."
                onKeyDown={handleSubmit}
                onChange={handleChange} />

                
        </div>
    )
}

export default Search