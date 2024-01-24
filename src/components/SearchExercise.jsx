import React, {useState,useEffect} from 'react'
import { Box,Stack,Button,TextField,Typography } from '@mui/material'
import { exercisesOptions,fetchData } from '../utils/FetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercise = ({setExercises,bodyPart,setBodyPart}) => {
  const [search,setSearch]=useState('');
  const [bodyParts,setBodyParts]=useState([]);

  useEffect(()=>{
    const fetchBodyParts=async()=>{
      const fetchedParts=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exercisesOptions);
      setBodyParts(['all',...fetchedParts]);
    }
    fetchBodyParts();
  },[])


  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(search){
      const exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exercisesOptions);

      const searchedExercises=exercisesData.filter((exercise)=>(
        exercise.name.toLowerCase().includes(search)||exercise.target.toLowerCase().includes(search)
        ||exercise.equipment.toLowerCase().includes(search)||exercise.bodyPart.toLowerCase().includes(search)
      ));
      setSearch('');
      setExercises(searchedExercises);
      
    }

  }

  return (
   <Stack alignItems="center" justifyContent="center" mt="30px" p="20px"> 
   <Typography fontWeight={700} sx={{fontSize:{lg:'44px', sm:'30px'}}} mb="50px" textAlign="center">
     <span style={{color:'#ff2625'}}>Awesome Exercises</span> <br/> You should know
   </Typography>
   <Box position="relative" mb="72px">
    <TextField
    sx={{
      input:{fontWeight:'700', border:'none', borderRadius:'4px'},
      width:{lg:'900px', xs:'350px'},
      backgroundColor:"#d1d1d1",
      borderRadius:'4px'
    }}
    height="76px"
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    type='text'
    placeholder='search exercises....'
    />
    <Button className='search-btn'
    sx={{
      backgroundColor:'#ff2625',
      color:'#fff',
      textTransform:'none',
      width:{lg:'175px', xs:'80px'},
      fontSize:{lg:'20px', xs:'14px'},
      height:'56px',
      position:'absolute',
      right:0,
      ml:'2px'
    }} onClick={handleSubmit}>
      Search

    </Button>

   </Box>
   <Box sx={{position:'relative', width:'100%', p:'20px'}}> 
   <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>

   </Box>
   </Stack>
  )
}

export default SearchExercise
