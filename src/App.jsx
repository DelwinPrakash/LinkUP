import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import ConnectWallet from "./_auth/ConnectWallet";
import Choice from "./_auth/Choice";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path={"/connect"} element={<ConnectWallet />} />
          <Route path={"/choice"} element={<Choice />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
