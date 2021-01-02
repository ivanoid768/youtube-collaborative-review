import React from "react"
import { HeaderLeftMenu } from "./LeftMenu.comp"
import { SearchBar } from "./SearchBar.comp"

import styles from './HeaderMenu.module.css';

export const HeaderMenu = () => {

    return (
        <div className={styles['header-menu']}>
            <HeaderLeftMenu className={styles['header-left-menu']} />
            <SearchBar />
        </div>
    )
}