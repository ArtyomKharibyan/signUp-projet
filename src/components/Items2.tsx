import React from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

const Items2 = () => (
  <Grid container rowGap="25px">
    <TextField
      sx={{ width: "100%" }}
      id="outlined-required"
      label="Email"
      defaultValue="Email"
    />

    <TextField
      sx={{ width: "100%" }}
      id="outlined-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
    />
  </Grid>
);

export default Items2;
