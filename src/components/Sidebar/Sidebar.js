import React from 'react';
import { NavLink } from "react-router-dom";

import s from './Sidebar.module.css';


const Sidebar = () => {
    return (
        <nav className={s.sidebar}>
            <ul>
                <li>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </li>
                <li>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Sidebar;