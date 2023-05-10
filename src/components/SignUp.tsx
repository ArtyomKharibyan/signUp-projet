import React from "react";
import {styled} from '@material-ui/core/styles';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';

import {ReactComponent as Boy} from './somefolder/images/boy.svg';
import {ReactComponent as Dots} from './somefolder/images/dots.svg';
import {ReactComponent as Girl} from './somefolder/images/girl.svg';
import {ReactComponent as Vector} from './somefolder/images/vector.svg';

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #56b8d1 30%, #4339cc 90%)',
    border: 0,
    borderRadius: "100",
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: "red",
    height: 48,
    padding: '20px 30px',
    width: "100%",
});

const SignUp = () => (

    <Box sx={{height: "10px"}}>

        <Dots style={{
            position: "relative",
            left: "32.5px",
            padding: "7px",
        }}/>

        <Box
            sx={{
                width: "45%",
                height: "740px",
                maxWidth: "600px",
                position: "relative",
                background: "#ffffff",
                padding: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                left: "40px",
                borderRadius: "5px",
                bottom: "160px",
                zIndex: "1"
            }}
        >

            <Box>
                <h1 style={{position: "relative", bottom: "30px"}}>Create Account</h1>

                <button className="googleButton" type="button" style={{
                    cursor: "pointer",
                    transition: "background-color 0.3s, box-shadow 0.3s",
                    border: "none",
                    borderRadius: "3px",
                    boxShadow: "0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25)",
                    color: "#817d7d",
                    fontSize: "12px",
                    fontWeight: "500",
                    fontFamily: "sans-serif",
                    backgroundColor: "white",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: " 15px 7px",
                    height: "35px",
                    minWidth: "40%",
                    marginBottom: "60px",
                    display: "flex",
                    justifyContent: "right",
                    position: "relative",
                    padding: "10px",
                }}>Sign up with Google
                </button>

                <Box sx={{position: "relative", bottom: "50px"}}>

                    <h3 style={{color: "silver", fontWeight: "100", textAlign: "center", padding: "20px"}}>OR</h3>

                    <Grid container rowGap="25px">

                        <TextField sx={{width: "100%"}} label="First Name"
                                   InputProps={{
                                       style: {
                                           borderRadius: "250px",
                                       }
                                   }}
                                   size="small"/>

                        <TextField sx={{width: "100%"}} label="Last Name"
                                   InputProps={{
                                       style: {
                                           borderRadius: "250px",
                                           width: "100%"
                                       }
                                   }}
                                   size="small"/>

                        <TextField sx={{width: "100%"}} label="Email"
                                   InputProps={{
                                       style: {
                                           borderRadius: "250px",
                                           width: "100%"
                                       }
                                   }}
                                   size="small"/>

                        <TextField sx={{width: "100%"}} label="Password"
                                   InputProps={{
                                       style: {
                                           borderRadius: "250px",
                                           width: "100%"
                                       }
                                   }}
                                   size="small"
                                   type="password"/>

                        <TextField sx={{width: "100%"}}  label="Confirmation Password"
                                   InputProps={{
                                       style: {
                                           borderRadius: "250px",
                                           width: "100%",
                                           marginBottom: "20px"
                                       }
                                   }}
                                   size="small"
                                   type="password"/>

                    </Grid>

                    <MyButton sx={{color: "#ffffff", borderRadius: "100px", width: "100%", marginTop: "25px"}}>Create Account</MyButton>

                    <Box sx={{position: "relative", top: "40px"}}>

                        <p style={{color: "silver"}}> Already have an account?
                            <a style={{textDecoration: "none", color: "#58b1f5"}} href="Login">Log In</a>
                        </p>

                    </Box>

                </Box>
            </Box>
        </Box>

        <Box sx={{
            justifyContent: "right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            position: "relative",
            bottom: "820px",
            display: "flex",
            height: "10px"
        }}>

            <Vector style={{
                height: "950px",
                width: "70%",
                bottom: "290px",
                position: "relative",
                left: "560.2px",
                zIndex: "-1"
            }}/>

            <Girl style={{minWidth: "20%", minHeight: "550px"}}/>

            <Boy style={{minWidth: "20%", minHeight: "550px"}}/>

        </Box>
    </Box>
)


export default SignUp;