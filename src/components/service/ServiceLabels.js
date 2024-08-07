import { Avatar, Chip, Stack } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';

export default function ServiceLabels() {
  return (
    <Stack direction={'row'} gap={1} useFlexGap flexWrap={'wrap'}>
    {
        chips.map((el,key) => (
        <Chip 
        key={key}
        avatar={
            <Avatar sx={{backgroundColor:'transparent'}}>
            <StarIcon color="secondary" />
            </Avatar>
        }
        variant="outlined" 
        label={el} 
        />
        ))
    }
    </Stack>
  )
}

const chips = [
    'Salón Jarín',
    'Mesas y sillas',
    'Mantelería'
  ]
