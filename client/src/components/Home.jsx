import { Box, Button, Stack } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./styles/Home.css";
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                {/* bground image */}
                <Box
                    className={"img-cont"}
                    sx={{
                        width: "100vw",
                        height: "100vh",
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1553356009-50faee7aa84c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* div conatining signup buttons */}
                    <Box
                        sx={{
                            width: "100vw",
                            background: "transparent",
                            backdropFilter: "filter(30px)",
                        }}
                    >
                        <h1 className="logo">AgriGrow</h1>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                     
                        <Box
                            sx={{
                                width: "60vw",
                                height: "40vh",
                                opacity: "0.8",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "20px",
                                backdropFilter: "blur(30px)",
                            }}
                        >
                               <h1 className="head-logo">Welcome To AgriGrow</h1>
                            <Stack gap={4} direction={"row"}>
                                <Link to={"/login"}>
                                    <Button
                                        sx={{
                                            width: "200px",
                                            height: "60px",
                                            "@media (max-width:600px)": {
                                                width: "100px",
                                            },
                                        }}
                                        variant="contained"
                                        color="success"
                                    >
                                        Login
                                    </Button>
                                </Link>

                                <Link to={"/register"}>
                                    <Button
                                        sx={{
                                            width: "200px",
                                            height: "60px",
                                            "@media (max-width:700px)": {
                                                width: "100px",
                                            },
                                        }}
                                        variant="contained"
                                        color="warning"
                                    >
                                        Register
                                    </Button>
                                </Link>
                            </Stack>
                        </Box>
                        {/* signbutton div ends */}
                    </Box>
                    {/* bground img div ends */}
                    {/* <Box
                        sx={{
                            width: "100vw",
                            height: "20vh",
                            position: "absolute",
                            bottom: "0",
                            opacity: "0.8",
                            backdropFilter: "blur(30px)",
                        }}
                    >
                        <h2 style={{ color: "white" }}>
                            Support: <span>123@outlook</span>
                        </h2> */}
                        {/* <h2 style={{ color: "white" }}>
                            HelpLine: <span>1800 1029 1291</span>
                        </h2>
                        <Stack direction={"row"} gap={4}>
                            <h2 style={{ color: "white" }}>Follow Us</h2>

                            <Button variant="text" color="primary">
                                <InstagramIcon
                                    sx={{
                                        color: "white",
                                    }}
                                />
                            </Button>

                            <Button>
                                <FacebookIcon
                                    sx={{
                                        color: "white",
                                    }}
                                />
                            </Button>

                            <Button>
                                <TwitterIcon
                                    sx={{
                                        color: "white",
                                    }}
                                />
                            </Button>
                        </Stack>
                    </Box> */}
                </Box>
                {/* main div ends */}
            </Box>
        </>
    );
};

export default Home;
