import React from 'react'
import { useState,useEffect } from 'react'
import  Pagination  from '@mui/material/Pagination'
import {Box,Typography,Stack} from '@mui/material'
import { fetchData,exercisesOptions } from '../utils/FetchData'
import Card from './Card'

const Exercise = ({exercises,setExercises,bodyPart}) => {
  const[currentPage,setCurrentPage]=useState(1);
  const exercisesPerPage=6;
  const indexOfLastExercises=currentPage * exercisesPerPage;
  const indexOfFirstExercises=indexOfLastExercises-exercisesPerPage;
  const currentExercises=exercises.slice(indexOfFirstExercises,indexOfLastExercises);

  const paginate=(e,value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1800, behavior:'smooth'})

  }

  useEffect(()=>{
    const fetchExercisesData=async()=>{
      let exerciseDatas=[];
      if(bodyPart==='all'){
        exerciseDatas=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exercisesOptions);
      }
      else{
        exerciseDatas=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exercisesOptions);
      }
      setExercises(exerciseDatas);
    }
    fetchExercisesData();

  },[bodyPart, setExercises])

  return (
    <Box id="exercises"
    sx={{
      mt:{lg:'80px'}
    }}
    mt="40px" p="20px">
      <Typography variant='h3' mb="46px">Showing Result</Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" 
      sx={{gap:{lg:'60px', xs:'40px'}}}>
        {currentExercises.map((item,index)=>(
        <Card exercise={item} key={index}/>
        ))}

      </Stack>
      <Stack mt="80px" alignItems="center">
        {
          exercises.length >exercisesPerPage &&(
            <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length/exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
            
            
            />
          )
        }

      </Stack>
      
    </Box>
  )
}

export default Exercise
