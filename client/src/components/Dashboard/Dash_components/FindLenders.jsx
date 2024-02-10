import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';

export default function FindLenders() {
  const theme = useTheme();

  return (
   <>
   <h1 style={{
    textAlign:'center',
    backgroundColor:'white'
   }}>Offered Loans </h1>
    <Box sx={{
      width:'100%',
      height:'100vh',
      bgcolor:'white',
      padding:'1rem',
      display:'grid',
      gridTemplateColumns:'repeat(3, 1fr)', // Set two columns with equal width
      gridGap: '.1rem', 
      rowGap:'px' // Optional: Add gap between grid items
  }}>
     

  

     <Card sx={{ display: 'flex',width:'100%',height:'40%' }} >
     <CardMedia
        component="img"
        sx={{ width: 151,height:'auto' }}
        image="https://th.bing.com/th/id/OIG.MC3PObbEmuJhfsPJ8biQ"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           Name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Enterprise name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           Loan offered
          </Typography>
         <Link to={'/dash/form'}>
         <Button variant="contained" color="primary">
            Apply
          </Button>
         </Link>
        </CardContent>
       
      </Box>
    </Card>

    <Card sx={{ display: 'flex',width:'100%',height:'40%' }} >
     <CardMedia
        component="img"
        sx={{ width: 151,height:'auto' }}
        image="https://th.bing.com/th/id/OIG.MC3PObbEmuJhfsPJ8biQ"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           Name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Enterprise name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           Loan offered
          </Typography>
         <Link to={'/dash/form'}>
         <Button variant="contained" color="primary">
            Apply
          </Button>
         </Link>
        </CardContent>
       
      </Box>
    </Card>

    <Card sx={{ display: 'flex',width:'100%',height:'40%' }} >
     <CardMedia
        component="img"
        sx={{ width: 151,height:'auto' }}
        image="https://th.bing.com/th/id/OIG.MC3PObbEmuJhfsPJ8biQ"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           Name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Enterprise name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           Loan offered
          </Typography>
         <Link to={'/dash/form'}>
         <Button variant="contained" color="primary">
            Apply
          </Button>
         </Link>
        </CardContent>
       
      </Box>
    </Card>

    <Card sx={{ display: 'flex',width:'100%',height:'40%' }} >
     <CardMedia
        component="img"
        sx={{ width: 151,height:'auto' }}
        image="https://th.bing.com/th/id/OIG.MC3PObbEmuJhfsPJ8biQ"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           Name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Enterprise name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           Loan offered
          </Typography>
         <Link to={'/dash/form'}>
         <Button variant="contained" color="primary">
            Apply
          </Button>
         </Link>
        </CardContent>
       
      </Box>
    </Card>
{/* splits here  */}

   
   </Box>
   </>
  );
}
