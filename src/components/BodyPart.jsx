import React from 'react'
import { Stack,Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item,bodyPart,setBodyPart}) => {
  return (
    <Stack className='bodyPart-card' alignItems="center" type="button" justifyContent="center"
    onClick={()=>{
        setBodyPart(item);
        window.scrollTo({left:100, top:1800, behavior:'smooth'})
    }}
    sx={{
        borderTop:bodyPart===item?'3px solid #ff2625':'none', backgroundColor:'#d1d1d1', borderBottomLeftRadius:'20px',
        width:'270px', height:'280px', gap:'47px', cursor:'pointer'

    }}
    >
        <img src={Icon} alt='icon' style={{width:'40px', height:"40px"}}/>
        <Typography fontSize="24px" fontWeight="bold" color="#3a1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart
