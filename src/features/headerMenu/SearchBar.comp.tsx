import React from "react"
import { Input } from 'antd';

const { Search } = Input;

export const SearchBar = () => {

    return (
        <Search placeholder="Put youtube video link here" onSearch={value => console.log(value)} enterButton />
    )
}