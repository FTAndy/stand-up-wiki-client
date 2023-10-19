import { useState } from 'react';
import mockData from '../../service/mock.json'
import { Comedian } from '../../types/comdian'
import ComedianCard from './components/Card'
import VideoPlayer from './components/VideoPlayer'
import './index.scss'

export interface Props {
}

console.log(mockData, 'mockData')

export default function Profile (props: Props) {
  const [comedian, setComedian] = useState<Comedian>(mockData as any)

  return (
    <div className='profile-container'>
      {/* <div>{ comedian.name }</div> */}
      <VideoPlayer
      />
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
