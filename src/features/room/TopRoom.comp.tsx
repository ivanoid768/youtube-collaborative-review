import React from "react"
import { UserAvatar } from "./UserAvatar.elem"

export const PlayerComp = () => {
    let avatarsData: string[] = []

    return (
        <div>
            {avatarsData.map(() => <UserAvatar />)}
        </div>
    )
}