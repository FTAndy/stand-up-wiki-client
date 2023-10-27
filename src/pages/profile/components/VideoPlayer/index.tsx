import {useEffect, useRef, useState} from 'react';
import { useGlobalStore } from 'store'
import Typography from '@mui/material/Typography';
import './index.scss'

export interface VideoPlayerProps {
  
}

export default function VideoPlayer (props: VideoPlayerProps) {
  const { playingSpecial } = useGlobalStore()
  const [isMouseOvered, setIsMouseOvered] = useState<Boolean>(false)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    function mouseOverDone() {
      console.log('mouseovered')
      setIsMouseOvered(true)
    }
    if (playingSpecial) {
      setIsMouseOvered(false)
      setTimeout(() => {
        iframeRef.current?.addEventListener('mouseover', mouseOverDone)
      }, 3000)
      return () => {
        iframeRef.current?.removeEventListener('mouseover', mouseOverDone)
      }      
    }
  }, [playingSpecial])

  if (!playingSpecial) {
    return null
  }

  return (
    <div className='player-container'>
      <div className={`cover ${isMouseOvered && 'float'}`} />
      <iframe 
        ref={iframeRef}
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
