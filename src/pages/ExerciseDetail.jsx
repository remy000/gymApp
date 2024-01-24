import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exercisesOptions,fetchData, youtubeOptions } from '../utils/FetchData'
import Detail from '../components/Detail'
import ExerciseVideo from '../components/ExerciseVideo'
import SimilarExercise from '../components/SimilarExercise'

const ExerciseDetail = () => {
  const [exerciseDetails, setExerciseDetails]=useState({});
  const [exerciseVideos,setExerciseVideos]=useState([]);
  const [targetData,setTargetData]=useState([]);
  const [equipmentData,setEquipmentData]=useState([]);
  const {id}=useParams();

  useEffect(()=>{
    const fetchExercisesData= async()=>{
      const exerciseDbUrl='https://exercisedb.p.rapidapi.com/exercises';
      ///exercises/exercise/{id}
      const searchUrl='https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData=await fetchData(`${exerciseDbUrl}/exercise/${id}`,exercisesOptions);
      setExerciseDetails(exerciseDetailData);
      const searchedData=await fetchData(`${searchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);
      console.log(searchedData.contents);
      setExerciseVideos(searchedData.contents);

      const targetMuscleData=await fetchData(`${exerciseDbUrl}/target/${exerciseDetailData.target}`,exercisesOptions);
      setTargetData(targetMuscleData);
      const equipmentData=await fetchData(`${exerciseDbUrl}/equipment/${exerciseDetailData.equipment}`,exercisesOptions);
      setEquipmentData(equipmentData);

    }
    fetchExercisesData();
  },[id])
  
  return (
    <Box m="20px">
      <Detail exerciseDetails={exerciseDetails}/>
       <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetails.name}/>
      <SimilarExercise targetData={targetData} equipmentData={equipmentData}/>
      
    </Box>
  )
}

export default ExerciseDetail
