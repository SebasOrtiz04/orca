import { Avatar, Box, Card, CardActions, CardContent, CardHeader, Chip, Divider, Grid, ImageList, ImageListItem, Paper, Skeleton, Stack, Typography, useTheme } from "@mui/material";

import PaidIcon from '@mui/icons-material/Paid';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { ServicesResumeLoader } from "../utils/loaders";
import { useSelector } from "react-redux";
import { WhatsAppTextButton } from "../utils/buttons";


const cookEvent = event => [...attributes.filter(el => el.key)
  .map( el => ({...el,value:event[el.key]}))
  .filter(el => el.value), ...attributes.filter(el => el.value)]


export default function ServiceResume() {

  const {socialEventById,isLoading} = useSelector(state => state.socialEvent)

  const handleSetPrice = socialEventById => socialEventById.price 
                                            ? socialEventById.price 
                                            : socialEventById?.pricePerPeople;

  const handleSetPriceLabel = socialEventById => socialEventById.price
                                            ? 'Percio por evento.'
                                            : 'Percio por persona.'

  
  return (
    <Card sx={{marginTop:2}}>
      <CardHeader title={
        isLoading.getById || !socialEventById._id 
        ? <Skeleton variant="text" width={120} />
        : socialEventById.eventName
        }
      />

      <CardContent>
        <Stack>

          <Typography variant="h4" color={'blackMask.contrastText'}>
            {
              isLoading.getById || !socialEventById._id 
              ? <Skeleton width={80}/>
              : `$ ${handleSetPrice(socialEventById) &&handleSetPrice(socialEventById).toFixed(2)}`
            }
          </Typography>
          <Typography variant="caption" color={'blackMask.contrastText'}>
            {
              isLoading.getById || !socialEventById._id 
              ? <Skeleton width={60}/>
              : handleSetPriceLabel(socialEventById)}
          </Typography>
          {
            isLoading.getById || !socialEventById._id 

            ? <ServicesResumeLoader/>
            : <Grid container xs={12}>
              {
                cookEvent(socialEventById).map(({icon,label,value, sufix = '', prefix = ''},index)=>(
                  <Grid item xs={6} sm={4} lg={6}>
                      <Paper key={index} elevation={0}  
                          sx={{
                              padding:1,margin:1, display:'flex', flexDirection:'column',
                              alignItems:'center', justifyContent:'space-evenly'
                          }}
                      >

                        <Stack direction={'row'} width={'100%'} justifyContent={'center'} gap={1}>
                          {icon}
                          
                          <Divider  orientation="vertical" 
                          variant="fullWidth" flexItem  
                          />
                          
                          <Typography variant="h6">
                            {`${prefix}${value}${sufix}`}
                          </Typography>
                        </Stack>

                        <Divider variant="fullWidth" flexItem/>

                        <Typography variant="caption" sx={{margin:0.5}}>
                          {label}
                        </Typography>
                      </Paper>
                  </Grid>
                ))}
              </Grid>
          }

        </Stack>    
      </CardContent>
      <CardActions>
        <WhatsAppTextButton text="Contratar" color="primary" fullWidth />
      </CardActions>
    </Card>
  )
}
  
  const attributes = [
    {
      key:'people',
      icon:<GroupsIcon/>,
      label:'Personas.'
    },
    {
      key:'minPeople',
      icon:<PersonRemoveAlt1Icon/>,
      label:'Min. Personas.'
    },
    {
        key:'maxPeople',
        label:'Max. Personas',
        icon:<PersonAddAlt1Icon/>,
    },
    {
      value:7,
      icon:<AccessTimeFilledIcon/>,
      label:'Duración',
      sufix:'hrs'
    },
    {
      value:30,
      icon:<AccessTimeFilledIcon/>,
      label:'Recepción',
      sufix:'min'
    },
  ]
