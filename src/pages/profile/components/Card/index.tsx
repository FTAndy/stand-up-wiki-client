import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Rating from '@mui/material/Rating';
import { Special } from 'types/comdian'
import { useGlobalStore } from 'store'
import './index.scss'

interface Props {
  className: string
  special: Special
}

export default function MediaControlCard(props: Props) {
  const { special, className } = props
  const { specialDetail, specialName } = special
  const { coverImgURL, datetime, runtimeDuration, rating } = specialDetail
  const theme = useTheme();

  const {setPlayingSpecial} = useGlobalStore(state => state)

  return (
    <Card className={`comedian-card ${className}`} sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={coverImgURL}
        // alt=""
      />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent className='body' sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            { specialName }
          </Typography>
          <Typography className='datetime' variant="subtitle1" color="text.secondary" component="div">
            { datetime }
          </Typography>
          <Typography className='duration' variant="subtitle1" color="text.secondary" component="div">
            { runtimeDuration }
          </Typography>
          <Rating name="half-rating-read" defaultValue={parseFloat(rating)} precision={0.5} max={10} readOnly />
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton onClick={() => {
            setPlayingSpecial(special)
          }} aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}