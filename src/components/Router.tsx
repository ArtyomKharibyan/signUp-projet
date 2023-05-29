import React from "react";
import { Route, Routes } from "react-router-dom";

import Password from "./Password";
import Profile from "./Profile";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import "./App.css";

const Router = () => (
  <Routes>
    <Route path="/profile" element={<Profile />} />
    <Route path="/signUp" element={<SignUp />} />
    <Route path="/signIn" element={<SignIn />} />
    <Route path="/password" element={<Password />} />
  </Routes>
);

export default Router;
