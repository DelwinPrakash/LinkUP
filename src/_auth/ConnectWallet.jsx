import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect, useEnsName } from "wagmi";

import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";

function ConnectWallet() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  console.log(address);

  return (
    <>
      <RainbowKitProvider
        modalSize="compact"
        theme={darkTheme({
          accentColor: "#7b3fe4",
          accentColorForeground: "white",
          borderRadius: "small",
          fontStack: "system",
          overlayBlur: "small",
        })}
      >
        <ConnectButton chainStatus="none" showBalance={false} />
      </RainbowKitProvider>
    </>
  );
}

export default ConnectWallet;
