import React from "react"
import YouTube from 'react-youtube';

const opts = {
    height: '720',
    width: '1280',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0 as 0 | 1 | undefined,
    },
};

const onReady = (event: { target: any }) => {
    console.log(event.target)
}

export const YTPlayer = ({ url, className }: { url?: string; className?: string; }) => {
    let videoId = url?.split('v=')[1]

    return (
        <YouTube containerClassName={className} id='embed_yt_player_id' videoId={videoId} opts={opts} onReady={onReady} />
    )
}