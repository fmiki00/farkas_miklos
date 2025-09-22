import { NavLink } from 'react-router-dom'
import React from 'react'
import Navbar from './Navbar.jsx';

export const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Home</h1>
        </div>
    );
};

export default Home;