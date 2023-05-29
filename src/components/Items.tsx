import React, { FC } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";

interface ItemsProps {
  setName: (name: string) => void;
  setSurname: (surName: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  error?: React.ReactNode;
}

const Items: FC<ItemsProps> = ({
  setName,
  setSurname,
  setEmail,
  setPassword,
  error,
}) => (
  <Grid container rowGap={2}>
    <Box>{error && <Typography color="error">{error}</Typography>}</Box>
    <TextField
      sx={{ width: "100%" }}
      label="First Name"
      onChange={(e) => setName(e.target.value)}
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
      onChange={(e) => setSurname(e.target.value)}
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
      onChange={(e) => setEmail(e.target.value)}
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
      onChange={(e) => setPassword(e.target.value)}
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

Items.propTypes = {
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default Items;
