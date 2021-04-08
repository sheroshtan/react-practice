import React from 'react';

import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <a href="/profile">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/505px-Apple_logo_black.svg.png"
                    alt="logo"
                    className={s.logo}/>
            </a>
        </header>
    )
};

export default Header;