import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";

import { UserAuth } from "./context/AuthContext";
import { ReactComponent as Dots } from "./somefolder/images/dots.svg";
import { ReactComponent as IllustrationGirl } from "./somefolder/images/IllustrationGirl.svg";
import { ReactComponent as IllustrationBoy } from "./somefolder/images/IllustrationMan.svg";
import Items2 from "./Items2";
import Links from "./Links";
import Links2 from "./Links2";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    console.log(error);

    try {
      await signIn(email, password);
      navigate("/profile");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  const onCloseIconClick = () => {
    navigate("/signUp");
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box className="vector" />

      <Grid
        justifyContent="space-around"
        alignItems="center"
        item
        xs={12}
        container
      >
        <Grid
          lg={5}
          md={7}
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
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <CloseIcon
                    style={{ cursor: "pointer" }}
                    onClick={onCloseIconClick}
                  />
                </Box>

                <h1 style={{ position: "relative", padding: "10px" }}>
                  Sign in
                </h1>

                <h5 style={{ padding: "10px" }}>Dont have an account yet?</h5>

                <Links />
              </Box>

              <Box sx={{ position: "relative" }}>
                <Items2
                  error={error}
                  setEmail={setEmail}
                  setPassword={setPassword}
                />

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
                  onClick={handleSubmit}
                  sx={{ width: "100%", padding: "10px", background: "#2ab2d1" }}
                  variant="contained"
                >
                  SIGN IN
                </Button>

                <Links2 />
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
          <Box
            position="relative"
            left="50px"
            display="flex"
            alignItems="center"
          >
            <IllustrationGirl style={{ minHeight: "1000px" }} />
            <IllustrationBoy style={{ minHeight: "1000px" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;
