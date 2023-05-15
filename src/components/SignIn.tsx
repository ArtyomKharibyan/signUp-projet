import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";

import { ReactComponent as Dots } from "./somefolder/images/dots.svg";
import { ReactComponent as IllustrationGirl } from "./somefolder/images/IllustrationGirl.svg";
import { ReactComponent as IllustrationBoy } from "./somefolder/images/IllustrationMan.svg";
import Items2 from "./Items2";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SignUp = () => (
  <Box sx={{ position: "relative" }}>
    <Box className="vector" />

    <Grid
      justifyContent="space-around"
      alignItems="center"
      item
      xs={12}
      container
    >
      <Grid lg={5} md={7} item sx={{ position: "relative", maxWidth: "100%" }}>
        <Dots style={{ marginTop: "80px" }} />

        <Box
          className="posts"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "600px",
            maxWidth: "700px",
            background: "#ffffff",
            borderRadius: "5px",
            padding: "20px 40px",
            position: "relative",
            zIndex: "5",
          }}
        >
          <Box>
            <Box sx={{ position: "relative", bottom: "40px" }}>
              <Box
                justifyContent="right"
                display="flex"
                sx={{
                  position: "relative",
                  left: "10px",
                }}
              >
                X
              </Box>

              <h1 style={{ position: "relative", padding: "10px" }}>Sign in</h1>

              <h5 style={{ padding: "10px" }}>Dont have an account yet?</h5>

              <nav>
                <Link
                  style={{
                    color: "#2ab2d1",
                    padding: "10px",
                    textDecoration: "none",
                  }}
                  to="/signUp"
                >
                  Sign up now
                </Link>
              </nav>
            </Box>

            <Box sx={{ position: "relative" }}>
              <Items2 />

              <Box
                style={{
                  color: "#707371",
                  padding: "10px",
                  position: "relative",
                  right: "20px",
                }}
              >
                <Checkbox {...label} /> Keep me signed in
              </Box>

              <Button
                sx={{ width: "100%", padding: "10px", background: "#2ab2d1" }}
                variant="contained"
              >
                SIGN IN
              </Button>

              <nav>
                <Link
                  to="/password"
                  style={{
                    color: "#2ab2d1",
                    textDecoration: "none",
                    position: "relative",
                    top: "15px",
                  }}
                >
                  Forgot Password?
                </Link>
              </nav>
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
        <Box position="relative" left="50px" display="flex" alignItems="center">
          <IllustrationGirl style={{ minHeight: "1000px" }} />
          <IllustrationBoy style={{ minHeight: "1000px" }} />
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default SignUp;
