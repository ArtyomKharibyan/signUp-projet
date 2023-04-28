import React from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"

function signUp() {
    return (
        <Box
            sx={{
                width: "70%",
                position: "relative",
                background: "#f6f2f2",
                padding: "30px",
                justifyContent: "right",
            }}
        >
            <Button sx={{padding: "5px", color: "black", float: "right"}} variant="text">X</Button>

            <h1>Sign up</h1>

            <Box sx={{marginTop: "30px"}}>Already have an account?</Box>

            <a style={{color: "#2dacd6", textDecoration: "none"}} href="">Sign In</a>

            <Box>

                <Grid container rowGap="6.4px">

                    <TextField
                        sx={{width: "100%", marginTop: "30px", minHeight: "13vh"}}
                        id="outlined-basic"
                        label="Name/Surname"
                        variant="outlined"
                    />

                    <TextField sx={{width: "100%", minHeight: "13vh"}}
                               id="outlined-basic"
                               label="Email"
                               variant="outlined"
                    />

                    <TextField sx={{width: "100%", minHeight: "13vh"}}
                               id="outlined-password-input"
                               label="Password (6 + character, 1 capital letter, 1 number)"
                               type="password"
                               autoComplete="current-password"
                    />
                    <Box>
                        <Checkbox/> Keep me signed in
                    </Box>
                </Grid>

                <Button sx={{width: "100%", background: "#2dacd6"}} variant="contained">Sign Up</Button>

            </Box>
        </Box>
    )
}

export default signUp;