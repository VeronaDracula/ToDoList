import React, {useState} from 'react';

import styles from './Header.module.scss';

import headerLogo from '../../images/logo.svg';

import BtnLogin from '../BtnLogin/BtnLogin';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <img className={styles.header__logo} src={headerLogo} alt="логотип"/>
                <BtnLogin/>
            </div>
        </header>
    );
}

export default Header;
