import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/styles";

import { ReactComponent as Boy } from "./somefolder/images/boy.svg";
import { ReactComponent as Dots } from "./somefolder/images/dots.svg";
import { ReactComponent as Girl } from "./somefolder/images/girl.svg";
import Google from "./Google";
import Item from "./Items";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #56b8d1 30%, #4339cc 90%)",
  border: 0,
  borderRadius: "100",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "20px 30px",
  width: "100%",
});

const SignUp = () => (
  <Box sx={{ position: "relative" }}>
    <Box className="className" />

    <Grid
      justifyContent="space-around"
      alignItems="center"
      item
      xs={12}
      container
    >
      <Grid
        className="asa"
        lg={5}
        md={7}
        item
        sx={{ position: "relative", maxWidth: "80%" }}
      >
        <Dots
          style={{
            position: "absolute",
            left: "5px",
            zIndex: "-2",
            top: "5px",
          }}
        />

        <Box
          className="posts"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "740px",
            maxWidth: "700px",
            marginTop: "15px",
            background: "#ffffff",
            borderRadius: "5px",
            padding: "20px 80px",
            position: "relative",
            zIndex: "5",
          }}
        >
          <Box>
            <h1 style={{ position: "relative", bottom: "30px" }}>
              Create Account
            </h1>

            <Google />

            <Box sx={{ position: "relative", bottom: "50px" }}>
              <h3
                style={{
                  color: "silver",
                  fontWeight: "100",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                OR
              </h3>

              <Item />

              <MyButton
                sx={{
                  color: "#ffffff",
                  borderRadius: "100px",
                  width: "100%",
                  marginTop: "25px",
                }}
              >
                Create Account
              </MyButton>

              <Box sx={{ position: "relative", top: "40px" }}>
                <nav style={{ color: "silver" }}>
                  Already have an account?
                  <Link
                    style={{ textDecoration: "none", color: "#58b1f5" }}
                    to="/signIn"
                  >
                    {" "}
                    Log In
                  </Link>
                </nav>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        className="images"
        lg={6.4}
        md={12}
        item
        container
        sx={{ height: "740px" }}
      >
        <Box display="flex" alignItems="center">
          <Girl style={{ minHeight: "550px" }} />
          <Boy style={{ minHeight: "550px" }} />
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default SignUp;
