import React from "react"
import { HeaderLeftMenu } from "./LeftMenu.comp"
import { SearchBar } from "./SearchBar.comp"

export const HeaderMenu = () => {

    return (
        <div>
            <HeaderLeftMenu />
            <SearchBar />
        </div>
    )
}