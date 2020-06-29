import React from "react"
import { UserAvatar } from "./UserAvatar.elem"

export const TopRoom = () => {
    let avatarsData: boolean[] = [true, false]

    return (
        <div>
            {avatarsData.map((data) => <UserAvatar isSpeaking={data} />)}
        </div>
    )
}