import { FunctionComponent, useEffect } from "react";
import axios from 'axios'

import React from "react"
import { useHistory } from "react-router-dom";

export const InitRoom: FunctionComponent = () => {
    let history = useHistory()

    useEffect(() => {
        axios.get<{newRoomId: string}>('localhost:4000/room/create') //TODO: host as ENV var!
            .then(resp => {
                let newRoomId = resp.data.newRoomId;

                history.push(`/room/${newRoomId}`)
            })
    })

    return (
        <div style={{ width: '100%', height: '30px' }}>
            Your room is creating...
        </div>
    )
}