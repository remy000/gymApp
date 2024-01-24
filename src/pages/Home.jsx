import { Box } from '@mui/material'
import React, { useState } from 'react'
import Hero from '../components/Hero'
import SearchExercise from '../components/SearchExercise'
import Exercise from '../components/Exercise'

const Home = () => {
  const [bodyPart,setBodyPart]=useState('all');
  const [exercises,setExercises]=useState([]);
  return (
    <Box ml="30px">
        <Hero/>
        <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} exercises={exercises}/>
        <Exercise setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>

    </Box>
  )
}

export default Home
