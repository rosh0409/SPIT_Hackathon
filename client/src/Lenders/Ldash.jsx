import {
    Avatar,
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,  
    
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import NotificationsIcon from "@mui/icons-material/Notifications";
  import "./Feed.css";
import Bar from "../Charts/Bar";
import Pie from "../Charts/Pie";
import FindLenders from "./Dash_components/FindLenders";
import { Link } from "react-router-dom";

  
  
  
  const Ldash = () => {
    const [isPop, setPop] = useState(false);
    const [btn,setBtn]=useState("Add Post");
  
  
  
    sessionStorage.setItem("isExpert",true)
  
    const [test,setTest] = useState(sessionStorage.getItem("isExpert"))
  
  const handleChange=()=>{
    isPop?setBtn("Add Post"):setBtn("Back");
    setPop(!isPop);
  }
    return (
       <>
   
      {/* <Button  onClick={handleChange}  sx={{
        width:'200px',
         borderRadius:'1%',
         height:'80px',
         position:'absolute',
         bottom:'50px',
         right:'0%',
         border:'2px solid green'
      }} variant="contained" color="primary">
   {btn}
      </Button> */}
      
    
        <Box sx={{
            width:'100%',
            height:'100vh',
            bgcolor:'white'
        }} p={2}>
          <Box
            display={"flex"}
            justifyContent={"right"}
          >
            <Stack flex={2}>
              <Typography variant="h6" color="initial">
                Welcome {}
              </Typography>
            </Stack>
            <Stack direction={"row"} gap={3}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <Button variant="outlined" color="primary">
                  <NotificationsIcon />
                </Button>
                <div
                  style={{
                    position: "absolute",
                    top: "-8px", // Adjust the top position as needed
                    right: "-8px", // Adjust the right position as needed
                    backgroundColor: "red", // Background color of the number
                    color: "white", // Text color of the number
                    borderRadius: "50%", // Make it a circle
                    width: "20px", // Adjust the width and height as needed
                    height: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "14px", // Adjust the font size as needed
                  }}
                >
                  4 {/* Replace with the number you want to display */}
                </div>
              </div>
            </Stack>
          </Box>
          {/* //ends here */}
  
          {/* //new div */}
          <Box className={"ds-img numb"}>
            <Box>
            <Link to={'/dash/find'}>
              <Card sx={{ width: 190,
              bgcolor: "transparent",backdropFilter:'blur(40px)'  }}>
                <CardActionArea>
                  <CardContent >
                 
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ textAlign: "center" ,textDecoration:'none'}}
                    >
                    Apply Now
                    </Typography>
                
                  </CardContent>
                </CardActionArea>
              </Card>
              </Link>
            </Box>
            <Box>
              <Card sx={{ width: 170, bgcolor: "transparent",backdropFilter:'blur(10px)'   }}>
                <CardActionArea>
                  <CardContent >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                    Loan History
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                    
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box>
              <Card sx={{ width: 170 , bgcolor: "transparent",backdropFilter:'blur(20px)'  }}>
                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                    Settlements
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                    
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>

            <Box>
              <Card sx={{ width: 170 , bgcolor: "transparent",backdropFilter:'blur(20px)'  }}>
                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                     Payments
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                     
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Box>
          {/* //new div ends */}
  
          {/* //div */}
          <Box className={"chart"}>
            <Box></Box>
            <Box></Box>
          </Box>
          {/* //div ends */}
  
         
          
  
          {/* //main div ends */}


          <Box sx={{
        width:'100%',
        display:'grid',
        gridTemplateColumns:'auto auto',
        gridTemplateRows:'auto',
        gap:'30px',
        '@media (max-width:800px)':{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
        }
      }}>
         <Box sx={{
            width:'100%'
         }}>
            <h1 style={{
                textAlign:'center',
                color:'gray'
            }}>Summary</h1>
          <Bar/>
         </Box>
         <Box sx={{
            width:'100%'
         }}>
             <h1 style={{
                textAlign:'center',
                color:'gray'
            }}>Summary</h1>
       <Pie/>
         </Box>
      </Box>

      {/* last section */}
      <Box sx={{
        display:'flex',
        justifyContent:'center'
      }}>
     
    
      </Box>

     
        </Box>
  
    
      </>
    );
  };
  
  export default Ldash;
  