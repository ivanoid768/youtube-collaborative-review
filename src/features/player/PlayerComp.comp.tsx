import React from "react"
import { YTPlayer } from "./YTPlayer.comp"
import { PlayerControls } from "./PlayerControls.comp"

export const PlayerComp = () => {

    return (
        <div>
            <YTPlayer />
            <PlayerControls />
        </div>
    )
}