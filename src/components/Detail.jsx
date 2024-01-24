import React from 'react'
import { Stack,Typography, Button } from '@mui/material'
import bodyImg from '../assets/icons/body-part.png';
import targetImg from '../assets/icons/target.png'
import equipmentImg from '../assets/icons/equipment.png'

const Detail = ({exerciseDetails}) => {
    const {name,target,equipment,bodyPart,gifUrl}=exerciseDetails;
    const extraDetail=[
        {
            icon:bodyImg,
            name:bodyPart,
        },
        {
            icon:targetImg,
            name:target,
        },
        {
            icon:equipmentImg,
            name:equipment,
        },
    ]
  return (
    <Stack gap="60px" sx={{flexDirection:{lg:'row', alignItems:"center", p:"20px"}}}>
        <img src={gifUrl} alt={name} className='detail-image' loading='lazy'/>
        <Stack sx={{gap:{lg:'35px', xs:'20px'}}}>
            <Typography variant='h3' fontWeight="bold">
                {name}
            </Typography>
            <Typography variant='h6'>
                {name} {' '} is one of the best exercise to target your {target} <br/>
                it will help you to boost your energy and mood
            </Typography>
            {
                extraDetail.map((item)=>(
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        <Button sx={{
                            background:"gray", borderRadius:'50%', width:'100px', height:'100px'
                        }}>
                            <img src={item.icon} alt={item.name}/>
                            
                        </Button>
                        <Typography variant='h5'>{item.name}</Typography>

                    </Stack>
                ))
            }

        </Stack>
      
    </Stack>
  )
}

export default Detail
