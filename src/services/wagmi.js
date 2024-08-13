import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: "f510468b0f7f29f2f34af3d6bca78c75",
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
});
