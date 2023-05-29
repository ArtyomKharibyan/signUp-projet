import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { signOut } from "firebase/auth";

import { UserAuth } from "./context/AuthContext";
import { auth } from "./firebase";

const Profile = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = UserAuth();
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/signUp");
    });
  };

  console.log(isAuth);

  return (
    <Box sx={{ display: "flex", justifyContent: "right", textAlign: "center" }}>
      <Button variant="contained" onClick={signUserOut}>
        Log Out
      </Button>
    </Box>
  );
};

export default Profile;
