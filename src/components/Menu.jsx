import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li><NavLink to="/" className={({isActive})=>(isActive ? "activeLink": undefined)}>Home</NavLink></li>
                <li><NavLink to="/ajouter" className={({isActive})=>(isActive ? "activeLink": undefined)}>Add Techno</NavLink></li>
                <li><NavLink to="/liste" className={({isActive})=>(isActive ? "activeLink": undefined)}>All Technos</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;