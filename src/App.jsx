import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect, useEnsName } from "wagmi";

function App() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  console.log(address);

  return (
    <>
      <ConnectButton chainStatus="none" showBalance={false} />
    </>
  );
}

export default App;
