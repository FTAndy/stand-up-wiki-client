import * as React from 'react';
import { useGlobalStore } from 'store'
import './index.scss'

export interface VideoPlayerProps {
  
}

export default function VideoPlayer (props: VideoPlayerProps) {
  const { playingSpecial } = useGlobalStore()

  return (
    <div>
      { playingSpecial &&
        <iframe 
          className='iframe'
          src={`${playingSpecial.bilibiliEmbedUrl}&danmaku=0`}
          allowFullScreen={true}
          // className={iframeClassImp}
        />
      }
    </div>
  );
}
