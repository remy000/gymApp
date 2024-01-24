import React, { useContext} from 'react'
import {Box, Typography} from '@mui/material'
import BodyPart from './BodyPart'
import {ScrollMenu,VisibilityContext} from 'react-horizontal-scrolling-menu'
import rightArrowIcon from '../assets/icons/right-arrow.png'
import leftArrowIcon from '../assets/icons/left-arrow.png'
import Card from './Card'

const LeftArrow=()=>{
    const {scrollPrev}=useContext(VisibilityContext);
    return(
        <Typography onClick={()=>scrollPrev()} className='right-arrow'>
            <img src={leftArrowIcon} alt='leftarrow'/>

        </Typography>
    );
};

const RightAllow=()=>{
    const {scrollNext}=useContext(VisibilityContext);
    return(
        <Typography onClick={()=>scrollNext()} className='left-arrow'>
        <img src={rightArrowIcon} alt='Rightarrow'/>

    </Typography>
    );
};


const HorizontalScrollBar = ({data,bodyPart,setBodyPart, isBodyParts}) => {
    
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightAllow}>
        {
            data.map((item)=>(
                <Box
                key={item.id||item}
                itemId={item.id||item}
                title={item.id||item}
                m="0 40px"
                >
                  {isBodyParts?<BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>:<Card exercise={item}/>}

                </Box>
            ))
        }
      
    </ScrollMenu>
  )
}

export default HorizontalScrollBar
