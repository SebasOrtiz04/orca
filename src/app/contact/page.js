import HeroContact from '@/components/contact/heroContact'
import HomeContact from '@/components/home/homeContact/homeContact'
import Box from '@mui/material/Box'

export default function RootContact() {
  return (
    <Box>
      <HeroContact/>
      <HomeContact/>
    </Box>
  )
}
