import React, { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

interface ItemsProps {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  error?: React.ReactNode;
}

const Items2: FC<ItemsProps> = ({ setEmail, setPassword, error }) => (
  <Grid container rowGap="25px">
    <Box>{error && <Typography color="error">{error}</Typography>}</Box>

    <TextField
      onChange={(e) => setEmail(e.target.value)}
      sx={{ width: "100%" }}
      id="outlined-required"
      label="Email"
      defaultValue="Email"
    />

    <TextField
      onChange={(e) => setPassword(e.target.value)}
      sx={{ width: "100%" }}
      id="outlined-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
    />
  </Grid>
);

Items2.propTypes = {
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default Items2;
