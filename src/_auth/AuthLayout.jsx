import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import BottomNav from "../Components/BottomNav";

const AuthLayout = () => {
  return (
    <>
      {/* <div>AuthLayout</div> */}
      <NavBar/>
      <Outlet />
      <BottomNav/>
    </>
  );
};

export default AuthLayout;
