import React from "react"
import { observer } from "mobx-react"

import { UserAvatar } from "./UserAvatar.elem"

import styles from './room.module.css';
import { RoomState } from "./roomState";

export const TopRoom = observer(({ roomState }: { roomState: RoomState }) => {
    let users = roomState.users;

    return (
        <div className={styles['room-cntr']}>
            {users.map((user, index) => <UserAvatar name={user.nickname} isSpeaking={false} key={index} />)}
        </div>
    )
})