import React from 'react'
import { Box,Stack,Typography } from '@mui/material'

const ExerciseVideo = ({exerciseVideos, name}) => {
    if(!exerciseVideos.length){
        return(
          <p>Loading</p>
        )
    }
  return (
    <Box sx={{mt:{lg:'100px', xs:'30px'}}}>
        <Typography variant='h3' mb="30px">
            Watch <span style={{color:'#ff2625', textTransform:'capitalize'}}>{name}</span> Videos
        </Typography>
        <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{flexDirection:{lg:'row'}, gap:{lg:'50px', xs:"0"}}}
        >
            {
                exerciseVideos?.slice(0,3).map((item,index)=>(
                    <a key={index} className='exercise-video'
                    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    target='blank'
                    rel='noreferrer'
                    
                    >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
                        <Box>
                            <Typography variant='h5' color="#000">
                                {item.video.title}
                            </Typography>
                        </Box>

                    </a>
                ))
            }

        </Stack>

    </Box>
  )
}

export default ExerciseVideo
