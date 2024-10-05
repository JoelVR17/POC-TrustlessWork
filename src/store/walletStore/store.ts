import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type WalletState = {
  address: string;
  connectWalletStore: (address: string) => void;
  disconnectWalletStore: () => void;
};

export const useWalletStore = create<WalletState>()(
  devtools(
    persist(
      (set) => ({
        address: "",
        connectWalletStore: (address: string) => set({ address }),
        disconnectWalletStore: () => set({ address: "" }),
      }),
      {
        name: "address-wallet",
      }
    )
  )
);
