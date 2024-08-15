import React from "react";
import "../index.css";


export default function NavBar(){
    return(
        <nav className="bg-teal-500 text-black h-14 w-screen flex justify-center items-center">
            <div className="flex items-center justify-center w-screen h-full">
                <h2 className="font-bold text-2xl h-fit">LinkUP</h2>
            </div>
        </nav>
    );
}