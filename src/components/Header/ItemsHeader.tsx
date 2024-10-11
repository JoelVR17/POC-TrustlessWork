import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

type ItemsHeaderProps = {
  isEnabled: string;
};

const ItemsHeader = ({ isEnabled }: ItemsHeaderProps) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    isEnabled && (
      <NavigationMenu className="mx-auto md:m-0">
        <NavigationMenuList className="flex gap-10">
          <NavigationMenuItem>
            <Link
              href="/escrow/initialize-escrow"
              className={
                isActive("/escrow/initialize-escrow")
                  ? "font-bold text-primary"
                  : ""
              }
              passHref
            >
              Initialize Escrow
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/escrow/fund-escrow"
              className={
                isActive("/escrow/fund-escrow") ? "font-bold text-primary" : ""
              }
              passHref
            >
              Fund Escrow
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
  );
};

export default ItemsHeader;
