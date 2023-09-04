"use client";

import { useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

export function MobileNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label: "Overview",
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: "Billboards",
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      href: `/${params.storeId}/categories`,
      label: "Categories",
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      href: `/${params.storeId}/sizes`,
      label: "Sizes",
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      href: `/${params.storeId}/colors`,
      label: "Colors",
      active: pathname === `/${params.storeId}/colors`,
    },
    {
      href: `/${params.storeId}/products`,
      label: "Products",
      active: pathname === `/${params.storeId}/products`,
    },
    {
      href: `/${params.storeId}/orders`,
      label: "Orders",
      active: pathname === `/${params.storeId}/orders`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  return (
    <NavigationMenu className="lg:hidden ml-3">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-lg border border-gray-300/20 active:border-gray-300"
          >
            <MenuIcon size={24} />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <ul className="flex flex-col p-4 gap-y-2 w-[150px]">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      route.active
                        ? "text-black dark:text-white"
                        : "text-muted-foreground"
                    )}
                  >
                    {route.label}
                    <Separator className="border-gray-300 mt-2" />
                  </Link>
                ))}
              </ul>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
