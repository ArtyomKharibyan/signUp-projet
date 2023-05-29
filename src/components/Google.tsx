import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

import { UserAuth } from "./context/AuthContext";
import { auth, provider } from "./firebase";

const Google = () => {
  const { setIsAuth } = UserAuth();
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
      navigate("/profile");
    });
  };

  return (
    <button
      className="googleButton"
      type="button"
      onClick={signInWithGoogle}
      style={{
        cursor: "pointer",
        transition: "background-color 0.3s, box-shadow 0.3s",
        border: "none",
        borderRadius: "3px",
        boxShadow:
          "0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25)",
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
      }}
    >
      Sign up with Google
    </button>
  );
};

export default Google;
