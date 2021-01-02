import React from "react"
import { YTPlayer } from "./YTPlayer.comp"

import styles from './player.module.css';

export const PlayerComp = () => {

    return (
        <div>
            <YTPlayer className={styles['player-cntr']} />
        </div>
    )
}