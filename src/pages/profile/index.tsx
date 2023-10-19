import { useEffect, useState } from 'react';
import mockData from '../../service/mock.json'
import { Comedian } from '../../types/comdian'
import ComedianCard from './components/Card'
import VideoPlayer from './components/VideoPlayer'
import { useGlobalStore } from 'store'
import './index.scss'

export interface Props {
}

console.log(mockData, 'mockData')

export default function Profile (props: Props) {
  const [comedian, setComedian] = useState<Comedian>(mockData as any)
  const { setPlayingSpecial } = useGlobalStore()

  useEffect(() => {
    setPlayingSpecial(comedian.specials[0])
  }, [comedian])

  return (
    <div className='profile-container'>
      {/* <div>{ comedian.name }</div> */}
      <div className='video-container'>
        <VideoPlayer
        />
      </div>
      <div className='special-container'>{ comedian.specials.map(s => {
        return <ComedianCard
            key={s.specialName}
            className='special'
            special={s}
          />
      }) }</div>
    </div>
  );
}
