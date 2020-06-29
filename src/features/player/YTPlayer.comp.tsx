import React from "react"
import YouTube from 'react-youtube';

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0 as 0 | 1 | undefined,
    },
};

const onReady = (event: { target: any }) => {
    console.log(event.target)
}

export const YTPlayer = ({ url }: { url?: string }) => {
    let videoId = url?.split('v=')[1]

    return (
        <YouTube id='embed_yt_player_id' videoId={videoId} opts={opts} onReady={onReady} />
    )
}