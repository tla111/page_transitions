import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Homepage, CardsPage } from './index';
import { AnimatePresence } from 'framer-motion';


const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Homepage />} />
                <Route path="/cards" element={<CardsPage />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes