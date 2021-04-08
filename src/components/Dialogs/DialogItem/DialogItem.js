import React from 'react';
import {NavLink} from "react-router-dom";

import s from './DialogItem.module.css';


const DialogItem = (props) => {

    const { name, id } = props;

    return (
        <li className={s.dialog}>
            <NavLink
                to={`/dialogs/${id}`}
                activeClassName={s.active}>{ name }</NavLink>
        </li>

    )
};

export default DialogItem;