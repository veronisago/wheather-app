import React from 'react'
import Search from '../SearchBar/Search'
import Nav from '../Nav/Nav'
import CityDetail from '../CityDetail/CityDetail'

export default function Home() {

    return (
        <div>
            <Nav/>
            <Search />
            <CityDetail/>
        </div>
    )
}
