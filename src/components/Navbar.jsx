import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
   <Stack direction="row" sx={{gap:{sm:'122px', xs:'40px'}, 
   marginTop:{sm:'25px', xs:'15px'}, justifyContent:'none', px:'20px'}}>
    <Link to="/">
        <img src={Logo} alt='logo' style={{width:'48px', height:'48px', margin:'10px 20px'}}/>
    </Link>
    <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" style={{textDecoration:'none',color:'#3A1212', borderBottom:'2px solid red'}}>Home</Link>
        <a href='#exercises' style={{textDecoration:'none', color:'#3A1212'}}>Exercises</a>
    </Stack>
   </Stack>
  )
}

export default Navbar
