import { Box } from '@mui/material'
import React from 'react'
import Feed from './Feed'
import Side from './Side'
import { Route, Routes } from 'react-router-dom'
import FindLenders from './Dash_components/FindLenders'

const Dashboard = () => {
  return (
   <>
   <Box sx={{
    width:'100vw',
    height:'100vh',
    display:'flex',
  overflow:'hidden'
   }}>
   <Box sx={{
    width:'5%',
    bgcolor:'white',
    padding:'2rem 1rem'
   }}>
      <Side/>
   </Box>
    <Box sx={{
        width:'95%'
    }}>
        <Routes>
            <Route  path="/*" element={<Feed />} />
            <Route  path="/find" element={<FindLenders />} />
        </Routes>
     <Feed/>
    </Box>
   </Box>
   </>
  )
}

export default Dashboard
