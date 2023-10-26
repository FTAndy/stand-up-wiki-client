import * as React from 'react';
import { useGlobalStore } from 'store'
import Typography from '@mui/material/Typography';
import './index.scss'

export interface VideoPlayerProps {
  
}

export default function VideoPlayer (props: VideoPlayerProps) {
  const { playingSpecial } = useGlobalStore()

  if (!playingSpecial) {
    return null
  }

  return (
    <div className='player-container'>
      <div className='cover'>
        
      </div>
      <iframe 
        className='iframe'
        src={`${playingSpecial.bilibiliEmbedUrl}&danmaku=0`}
        allowFullScreen={true}
      />
      {/* TODO: platform choose */}
      {/* TODO: figure mention */}
      {/* TODO: split the video content into different material script, show blow the video */}
      <Typography className='video-title' gutterBottom variant="h5" component="div">
        { playingSpecial.specialName }
      </Typography>
    </div>
  );
}
