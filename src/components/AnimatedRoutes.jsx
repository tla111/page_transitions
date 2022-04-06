import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Homepage, CardsPage } from './index';


const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <div>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Homepage />} />
                <Route path="/cards" element={<CardsPage />} />
            </Routes>
        </div>
    )
}

export default AnimatedRoutes