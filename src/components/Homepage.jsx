import React from 'react';
import { motion } from 'framer-motion';

const Homepage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: "red", height: "100vh", width: "100vw" }}
        >
            <h1 style={{ color: "red" }}>Home</h1>

        </motion.div>
    )
}

export default Homepage