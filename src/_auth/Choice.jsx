import React, { useState } from "react";
import "../index.css";
import { useAccount } from "wagmi";
import { Navigate } from "react-router-dom";
import { tanCreateUser } from "../services/tanstackQuery/middleware";

export default function Choice() {
  const { address } = useAccount();
  const isWalletConnected = Boolean(address);
  console.log(address + "from choice");
  const { mutateAsync: createuser } = tanCreateUser();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    walletAdd: address,
    role: "attendee",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const newUser = await createuser(user);
    if (!newUser) console.log("newUser not created");
  };

  if (!isWalletConnected) {
    return <Navigate to={"/connect"} />;
  }

  return (
    <main className="bg-black text-white w-screen h-screen flex flex-col items-center justify-center p-4">
      <div className="text-4xl font-bold mt-10 text-purple-900">LinkUP</div>

      <form
        onSubmit={handleSubmit}
        className="mt-7 w-full max-w-md space-y-4 bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-600 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-600 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-lg font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-600 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-lg font-medium">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={user.role}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-600 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="attendee">Attendee</option>
            <option value="organization">Organization</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-teal-900 text-white font-bold py-2 px-4 rounded-xl mt-7 hover:bg-teal-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
