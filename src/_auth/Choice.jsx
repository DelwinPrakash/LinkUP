import React from "react";
import "../index.css";

export default function Choice() {
  return (
    <main className="bg-black text-white w-screen h-screen flex flex-col items-center justify-center">
      <div className="text-4xl font-bold mt-10 text-purple-900">LinkUP</div>
      <div className="text-xl mt-10 w-[90vw] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        cupiditate aperiam sunt sit? Est blanditiis quae laboriosam, debitis
        deleniti deserunt maxime natus ex quibusdam iure explicabo quisquam sed,
        maiores perspiciatis?
      </div>
      <button className="bg-teal-900 text-white font-bold py-2 px-4 rounded-xl mt-7">
        Grow your community
      </button>
    </main>
  );
}
