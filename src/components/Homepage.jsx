import React from 'react';
import { motion } from 'framer-motion';

const Homepage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            style={{ backgroundColor: "red", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            <h1 style={{ color: "white", fontSize: "64px" }}>Home</h1>

        </motion.div>
    )
}

export default Homepage