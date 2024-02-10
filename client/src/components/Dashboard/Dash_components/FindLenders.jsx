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

export default function FindLenders() {
  const theme = useTheme();

  return (
    <Box sx={{
      width:'95%',
      height:'100vh',
      bgcolor:'white',
      padding:'1rem',
      display:'grid',
      gridTemplateColumns:'repeat(2, 1fr)', // Set two columns with equal width
      gridGap: '1rem', // Optional: Add gap between grid items
  }}>
     

    <Card sx={{ display: 'flex',width:'40%',height:'40%' }} >
     <CardMedia
        component="img"
        sx={{ width: 151 }}
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
        </CardContent>
       
      </Box>
    </Card>

    <Card sx={{ display: 'flex',width:'40%' }} >
     <CardMedia
        component="img"
        sx={{ width: 151 }}
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
        </CardContent>
       
      </Box>
     
    </Card>

    <Card sx={{ display: 'flex',width:'40%' }} >
     <CardMedia
        component="img"
        sx={{ width: 151 }}
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
        </CardContent>
       
      </Box>
     
    </Card>


{/* splits here  */}

   
   </Box>
  );
}
