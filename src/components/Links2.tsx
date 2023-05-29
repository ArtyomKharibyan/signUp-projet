import React from "react";
import { Link } from "react-router-dom";

const Links2 = () => (
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
);

export default Links2;
