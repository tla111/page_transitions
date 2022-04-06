import React from 'react';
import { motion } from 'framer-motion';

const Homepage = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100vw" }}
            exit={{ opacity: "100vw" }}
            style={{ backgroundColor: "red", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            <h1 style={{ color: "white", fontSize: "64px" }}>Home</h1>

        </motion.div>
    )
}

export default Homepage