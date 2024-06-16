import { Link } from "@nextui-org/link";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { Button } from "@nextui-org/button";

import Logo from "../Logo";

// import styles from "./navbar.module.scss";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        style={{ justifyContent: "space-between" }}
      >
        <Logo />

        <div className={`hidden sm:flex  justify-start items-center gap-12 dynamic-gap`}>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
                style={{ fontSize: "18px" }}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
          <Button variant="light">English</Button>
          <ThemeSwitch />
        </div>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" style={{ justifyContent: "space-between" }}>
        <Logo />
        <NavbarContent className="sm:hidden basis-1 pr-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
