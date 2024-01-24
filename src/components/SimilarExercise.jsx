import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'
const SimilarExercise = ({targetData, equipmentData}) => {
  return (
    <Box sx={{mt:{lg:'50px', xs:'0'}}}>
      <Typography variant='h4' mb="10px">Similar Target Exercises</Typography>
      <Stack direction="row" sx={{p:'2', position:'relative'}}>
        {targetData.length? <HorizontalScrollBar data={targetData}/>:<Loader/>}
      </Stack>
      <Typography variant='h4' mt="30px" mb="10px">Similar Equipment Exercises</Typography>
      <Stack direction="row" sx={{p:'2', position:'relative'}}>
        {equipmentData.length?<HorizontalScrollBar data={equipmentData}/>:<Loader/>}

      </Stack>

    </Box>
  )
}

export default SimilarExercise
