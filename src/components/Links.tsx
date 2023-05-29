import React from "react";
import { Link } from "react-router-dom";

const Links = () => (
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
);

export default Links;
