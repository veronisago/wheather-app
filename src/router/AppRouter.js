import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from '../components/Favourites/Favourites';
import Home from '../components/Home/Home';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/home' element={<Home/>} />
                <Route exact path='/favourites' element={<Favourites/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;