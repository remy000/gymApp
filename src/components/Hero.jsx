import React from 'react'
import {Box,Typography,Button} from '@mui/material'
import trainer from '../assets/images/trainer.jpeg'

const Hero = () => {
  return (
    <Box sx={{mt:{lg:'200px', sm:'70px'}, ml:{sm:'20px'}}} position="relative" p="20px">
        <Typography color="#ff2625" fontWeight="600" fontSize="32px">
            Avencia Gym
        </Typography>
        <Typography fontWeight="bold" sx={{fontSize:{lg:'50px', xs:'40px'}}} mt="20px" mb="10px">
            Smile, Get fit <br/> and Repeat
        </Typography>
        <Typography fontSize="24px" mb={3} >
            Check out the Most Effective Exercises
        </Typography>
        <Button variant='contained' sx={{backgroundColor:'#ff2625', padding:'10px', borderRadius:'40px', mb:'3px'}}>
            Explore more
        </Button>
        <Typography fontWeight={600} color="#FF2625" sx={{display:{lg:'block', xs:'none'}, opacity:0.1}} 
            fontSize="190px" zIndex="-3">
            Avencia
        </Typography>
        <img src={trainer} alt='trainer' className='hero-banner-img'/>
    </Box>
  )
}

export default Hero
