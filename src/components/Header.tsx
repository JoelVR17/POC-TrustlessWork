"use client";

import { useToast } from "@/hooks/use-toast";
import { useWalletStore } from "@/store/walletStore";
import { useWallet } from "@/wallet/hooks/useWallet.hook";
import ThemeToggle from "./ThemeToggle";
import { FaUserCircle } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  const { connectWallet, disconnectWallet } = useWallet();
  const { address } = useWalletStore();

  const handleConnect = async () => {
    try {
      await connectWallet();
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const handleDisconnect = async () => {
    try {
      if (disconnectWallet) {
        await disconnectWallet();
      }
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  return (
    <header className="flex flex-col md:flex-row w-full justify-between gap-5 container mx-auto">
      <Link href="/" className="mx-auto md:m-0">
        {" "}
        <Image src="/logo.png" width={100} height={100} alt="logo" />
      </Link>

      {/* Navigation Menu */}
      <NavigationMenu className="mx-auto md:m-0">
        <NavigationMenuList className="flex gap-10">
          <NavigationMenuItem>
            <Link href="/escrow/create-escrow" passHref>
              Create Escrow
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/escrow/fund-escrow" passHref>
              Fund Escrow
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Wallet and Theme Toggle */}
      <div className="flex mx-auto md:m-0 items-center gap-5">
        <ThemeToggle />
        {address ? (
          <>
            <button
              type="button"
              onClick={handleDisconnect}
              className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Disconnect
              </span>
            </button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <FaUserCircle size={30} />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-base">{address && address}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </>
        ) : (
          <button
            type="button"
            onClick={handleConnect}
            className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Connect
            </span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
