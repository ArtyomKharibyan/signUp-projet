import React from "react";
import { Grid, TextField } from "@mui/material";

const Items = () => (
  <Grid container rowGap="25px">
    <TextField
      sx={{ width: "100%" }}
      label="First Name"
      InputProps={{
        style: {
          borderRadius: "250px",
        },
      }}
      size="small"
    />

    <TextField
      sx={{ width: "100%" }}
      label="Last Name"
      InputProps={{
        style: {
          borderRadius: "250px",
          width: "100%",
        },
      }}
      size="small"
    />

    <TextField
      sx={{ width: "100%" }}
      label="Email"
      InputProps={{
        style: {
          borderRadius: "250px",
          width: "100%",
        },
      }}
      size="small"
    />

    <TextField
      fullWidth
      label="Password"
      InputProps={{
        style: {
          borderRadius: "250px",
        },
      }}
      size="small"
      type="password"
    />

    <TextField
      sx={{ width: "100%" }}
      label="Confirmation Password"
      InputProps={{
        style: {
          borderRadius: "250px",
          width: "100%",
          marginBottom: "20px",
        },
      }}
      size="small"
      type="password"
    />
  </Grid>
);

export default Items;
