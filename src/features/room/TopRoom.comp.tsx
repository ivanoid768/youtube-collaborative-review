import React from "react"
import { UserAvatar } from "./UserAvatar.elem"

import styles from './room.module.css';

export const TopRoom = () => {
    let avatarsData: boolean[] = [true, false, false, false, false]

    return (
        <div className={styles['room-cntr']}>
            {avatarsData.map((data) => <UserAvatar isSpeaking={data} />)}
        </div>
    )
}