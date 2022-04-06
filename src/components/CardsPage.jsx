import React from 'react';
import { motion } from 'framer-motion';


const CardsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: "black", height: "100vh", width: "100vw" }}
        >
            <h1 style={{ color: "black" }}>Cards</h1>
        </motion.div>
    )
}

export default CardsPage