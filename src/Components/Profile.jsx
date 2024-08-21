import React from "react";
import { useAccount } from "wagmi";
import { Navigate } from "react-router-dom";

export default function Profile(){
  const {address} = useAccount();
  console.log(address+" from profile");

  const isWalletConnected = Boolean(address);

  if(!isWalletConnected){
    return <Navigate to={"/connect"}/>
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-4">
      <div className="w-full bg-teal-950 rounded-lg p-4 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Profile Pic" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
          {/* <h1 className="block text-sm font-medium text-white mt-4">{address}</h1> */}
          <h1 className="text-x font-medium text-white mt-4 max-w-screen">{address.slice(0, 7)}....{address.slice(-6)}</h1>
        </div>
      </div>
    </div>
  );
}