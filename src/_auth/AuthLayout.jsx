import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import BottomNav from "../Components/BottomNav";
import { useAccount } from "wagmi";

const AuthLayout = () => {
  const { address } = useAccount();

  if (address) console.log("hey i am logged" + address);
  return (
    <>
      {/* <div>AuthLayout</div> */}
      <NavBar />
      <Outlet />
      <BottomNav />
    </>
  );
};

export default AuthLayout;
