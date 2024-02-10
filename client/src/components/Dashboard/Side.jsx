import { Box, Button } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { Link } from 'react-router-dom';


const Side = () => {
  return (
   <>
   <Box sx={{
    width:'100%',
    height:'100vh',
    bgcolor:'#38a3a5',
    borderRadius:'1rem',
    padding:'20% 20%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    gap:'15%'
   }}>
        <Box sx={{
            overflow:'hidden'
        }}>
            <Link to={'/dash'}>
            <HomeIcon sx={{color:'white'}}/>
            </Link>    
        </Box>
        <Box sx={{
            overflow:'hidden'
        }}>
              <Link to={'/dash/find'}>
              <QueryStatsIcon sx={{color:'white'}}/>
              </Link>
        </Box>
        <Box sx={{
            overflow:'hidden'
        }}>
               <HomeIcon sx={{color:'white'}}/>
        </Box>
        <Box sx={{
            overflow:'hidden'
        }}>
               <HomeIcon sx={{color:'white'}}/>
        </Box>
   </Box>
   </>
  )
}

export default Side
