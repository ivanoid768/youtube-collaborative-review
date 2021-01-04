import React from "react"
import { UserAvatar } from "./UserAvatar.elem"

import styles from './room.module.css';
import { getCookie } from "../../lib/cookie";

export const TopRoom = () => {
    let avatarsData: boolean[] = [true, false, false, false, false]

    let name = getCookie('yce_nickname')

    return (
        <div className={styles['room-cntr']}>
            {avatarsData.map((data) => <UserAvatar name={name} isSpeaking={data} />)}
        </div>
    )
}