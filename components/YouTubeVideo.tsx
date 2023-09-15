// YouTubeVideo.tsx
import React from 'react';

interface YouTubeVideoProps {
  videoId: string // The ID of the YouTube video to embed
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="video-container">
      <iframe
        title="YouTube Video"
        width="560"
        height="315"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default YouTubeVideo
