import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect, useEnsName } from "wagmi";
import Discover from "./Components/Discover";

function App() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  console.log(address);

  return (
    <>
      <ConnectButton chainStatus="none" showBalance={false} />
      {/* <h1 className="text-red-500">Hello world!</h1> */}
      <Discover />
    </>
  );
}

export default App;
