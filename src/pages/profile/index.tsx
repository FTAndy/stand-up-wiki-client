import { useState } from 'react';
import mockData from '../../service/mock.json'
import { Comedian } from '../../types/comdian'

export interface Props {
}

console.log(mockData, 'mockData')

export default function Profile (props: Props) {
  const [comedian, setComedian] = useState<Comedian>(mockData as any)

  return (
    <div>
      profile
      <div>{ comedian.name }</div>
      <div>{ comedian.specialDetails.map(s => {
        return <div>{s.specialName}</div>
      }) }</div>
    </div>
  );
}
