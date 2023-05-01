import React from "react";
import {Link} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import image1 from "./somefolder/images/graphic element2.svg"

const SignUp = () => (
    <>
        <Box sx={{
            display: "flex",
            position: "relative",
            padding: "50px",
            right: "50px",

        }}>
            <img src={image1} alt="image-dots"/>
        </Box>

        <Box
            sx={{
                width: "70%",
                position: "relative",
                background: "#ffffff",
                padding: "30px",
                justifyContent: "right",
                bottom: "100px",
            }}
        >
        <Box textAlign="right">
          <CloseIcon />
        </Box>

            <h1>Sign up</h1>

            <Box sx={{marginTop: "30px"}}>Already have an account?</Box>

            <nav>
                <Link style={{
                    color: "#2dacd6",
                    textDecoration: "none"
                }} to="/signIn">Sign In
                </Link>
            </nav>

            <Box>

                <Grid container rowGap="20px">

                    <TextField
                        sx={{width: "100%", marginTop: "30px"}}
                        id="outlined-basic"
                        label="Name/Surname"
                        variant="outlined"
                    />

                    <TextField sx={{width: "100%"}}
                               id="outlined-basic"
                               label="Email"
                               variant="outlined"
                    />

                    <TextField sx={{width: "100%"}}
                               id="outlined-password-input"
                               label="Password (6 + character, 1 capital letter, 1 number)"
                               type="password"
                               autoComplete="current-password"
                    />
                    <Box sx={{marginBottom: "20px"}}>
                        <Checkbox/> Keep me signed in
                    </Box>
                </Grid>

                <Button sx={{width: "100%", background: "#2dacd6"}} variant="contained">Sign Up</Button>

            </Box>
        </Box>
    </>
    )

export default SignUp;
