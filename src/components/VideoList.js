import React from 'react';
import VideoItem from './VideoItem.js';

const VideoList = ({ videos, handleVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem 
                key={video.id.videoId} 
                video={video} 
                handleVideoSelect={handleVideoSelect} 
            />
    })

    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    )
}

export default VideoList;