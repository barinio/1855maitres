import { useLocation } from "react-router-dom";
import { Link } from "@nextui-org/link";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import Logo from "./Logo";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import SwitcherLanguage from "@/i18n/SwitcherLanguage";

export const Navbar = () => {
  const { t } = useTranslation();

  const location = useLocation();

  return (
    <header className="blur-none">
      <NextUINavbar
        maxWidth="2xl"
        position="sticky"
        className="max-w-[1440px] lg:ml-auto lg:mr-auto"
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-foreground",
          ],
        }}
        style={{ backgroundColor: "transparent" }}
      >
        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          style={{ justifyContent: "space-between" }}
        >
          <Logo />
          <div className="hidden sm:flex justify-start items-center md:gap-10 sm:gap-5">
            {siteConfig.navItems.map(item => (
              <NavbarItem
                key={item.href}
                isActive={location.pathname === item.href}
              >
                <Link
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "md:text-lg sm:text-base"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {t(`${item.label}`)}
                </Link>
              </NavbarItem>
            ))}
            <SwitcherLanguage />
            <ThemeSwitch />
          </div>
        </NavbarContent>

        <NavbarContent
          className="sm:hidden basis-1 pl-4"
          style={{ justifyContent: "space-between" }}
        >
          <Logo />
          <NavbarContent className="sm:hidden basis-1 pr-4" justify="end">
            <SwitcherLanguage />
            <ThemeSwitch />
            <NavbarMenuToggle />
          </NavbarContent>
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2 sm:gap-5 sm:text-base">
            {siteConfig.navItems.map((item, index) => (
              <NavbarMenuItem
                key={`${item}-${index}`}
                isActive={location.pathname === item.href}
              >
                <Link color="foreground" href={item.href} size="lg">
                  {t(`${item.label}`)}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </header>
  );
};
