import React from "react";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { ReactComponent as Dots } from "./somefolder/images/dots.svg";
import { ReactComponent as IllustrationMan2 } from "./somefolder/images/IllustrationMan2.svg";
import { ReactComponent as IllustrationMan3 } from "./somefolder/images/IllustrationMan3.svg";

const SignUp = () => (
  <Box sx={{ position: "relative" }}>
    <Box className="vector" />

    <Grid
      justifyContent="space-around"
      alignItems="center"
      item
      xs={13}
      container
    >
      <Grid
        lg={4.5}
        md={6}
        item
        sx={{ position: "relative", maxWidth: "100%" }}
      >
        <Dots style={{ marginTop: "80px" }} />

        <Box
          className="posts"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "500px",
            maxWidth: "500px",
            background: "#ffffff",
            borderRadius: "5px",
            padding: "20px 60px",
            position: "relative",
            zIndex: "5",
          }}
        >
          <Grid container rowGap="25px">
            <Box sx={{ position: "relative" }}>
              <p
                style={{
                  display: "flex",
                  justifyContent: "right",
                  position: "relative",
                  bottom: "80px",
                  left: "50px",
                }}
              >
                X
              </p>

              <h1 style={{ position: "relative" }}>Password Recovery</h1>
            </Box>

            <p>Write your email, we will send you recovery link</p>

            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />

            <Button
              sx={{ width: "100%", padding: "10px", background: "#2ab2d1" }}
              variant="contained"
            >
              SIGN IN
            </Button>
          </Grid>
        </Box>
      </Grid>

      <Grid
        className="images"
        lg={7}
        md={12}
        item
        container
        sx={{ height: "740px" }}
      >
        <Box position="relative" left="50px" display="flex" alignItems="center">
          <IllustrationMan2 style={{ minHeight: "1000px" }} />
          <IllustrationMan3 style={{ minHeight: "1000px" }} />
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default SignUp;
