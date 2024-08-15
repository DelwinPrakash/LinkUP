import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import ConnectWallet from "./_auth/ConnectWallet";
import Choice from "./_auth/Choice";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path={"/connect"} element={<ConnectWallet />} />
          <Route path={"/choice"} element={<Choice />} />
          <Route path={"/profile"} element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
