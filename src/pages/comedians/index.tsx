import {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useGlobalStore } from 'store'
import mockData from '../../service/mock'
import Link from '@mui/material/Link';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography'
import './index.scss'

interface IComediansProps {
}

const Comedians: React.FunctionComponent<IComediansProps> = (props) => {
  const {currentComedian, setCurrentComedian} = useGlobalStore()

  const [comedianList, setComedianList] = useState(mockData)


  console.log(comedianList, 'comedianList', currentComedian)

  useEffect(() => {
    setCurrentComedian((comedianList[0] as any))
  }, [])

  return <div className='comedians-container'>
    <div className='comedians-list'>
      { comedianList.map(comedian => {
        return <Card sx={{ maxWidth: 900 }}>
          <Link href='/profile' underline="none">
            <CardMedia
              sx={{ height: 300 }}
              image={comedian.avatarImgURL}
              title={comedian.name}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {comedian.wikiDesc}
              </Typography>
            </CardContent>
          </Link>
        </Card>
      }) }
    </div>
  </div>;
};

export default Comedians;
