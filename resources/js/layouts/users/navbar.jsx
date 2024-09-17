import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link, usePage } from "@inertiajs/react";
import {
  IconBarsThree3,
  IconHome,
  IconLogout,
  IconPerson,
} from "@irsyadadl/paranoid";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
} from "@/components/custom/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/logo";
import { navLinks } from "./navlink";
import { NavLink } from "./sidebar";
export default function Navbar({ title }) {
  const { auth, web_setting } = usePage().props;
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false);

  const [openSearch, setOpenSearch] = useState(false);
  const toggleSidebarMenu = () => {
    setOpenSidebarMenu((prev) => !prev);
  };

  useEffect(() => {
    // Any additional effects when openSidebarMenu changes
  }, [openSidebarMenu]);

  return (
    <>
      <div className="sticky top-0 z-20 -mx-4 mb-6 border-b bg-background sm:-mx-6">
        <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center">
            <Button
              onClick={toggleSidebarMenu}
              variant="link"
              size="icon"
              className="block focus:outline-none lg:hidden"
            >
              <IconBarsThree3 />
            </Button>
            {/* <div
              data-orientation="vertical"
              role="none"
              className="mx-4 h-6 w-[1px] shrink-0 bg-border lg:hidden"
            /> */}
            <Link
              className="flex shrink-0 items-center lg:hidden"
              href={route("home")}
            >
            </Link>
          </div>
          <div className="flex items-center gap-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-muted-foreground transition duration-200 hover:text-foreground focus:outline-none">
                <Avatar className="aspect-square size-8">
                  <AvatarImage src={auth.user.gravatar} />
                  <AvatarFallback>{auth.user.initials}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel className="space-y-0.5">
                  <Label>{auth.user.name}</Label>
                  <span className="block text-sm text-muted-foreground">
                    {auth.user.email}
                  </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Link href={route("profile.index")}>
                    <span className="flex items-center justify-between gap-2 ">
                      <IconPerson className="w-4" /> Profile
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="w-full">
                  <Link href={route("home")}>
                    <span className="flex items-center justify-between gap-2 ">
                      <IconHome className="w-4" /> Go to website
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="w-full">
                  <Link href={route("logout")} as="button" method="post">
                    <span className="flex items-center justify-between gap-2 ">
                      <IconLogout className="w-4" /> Logout
                    </span>                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
      <Sheet open={openSidebarMenu} onOpenChange={setOpenSidebarMenu}>
        <SheetContent
          side="left"
          className="inset-y-0 left-0 flex h-full bg-custom-primary-theme min-h-screen w-[320px] max-w-80 flex-col overflow-y-auto overflow-x-hidden p-0  border-0 focus:outline-none"
        >
          <div className="sticky top-0 bg-custom-primary-theme p-5 shadow-sm ">
            <Link
              className="flex h-16 shrink-0 items-center"
              href={route("admin.dashboard.index")}
            >
              <Logo />
            </Link>
        
          </div>
          <div>
            <div className="px:0 flex grow flex-col gap-y-5 overflow-y-auto bg-custom-primary-theme md:px-6">
              <nav className="flex flex-1 flex-col p-4 lg:p-0">
                <ul className="flex flex-1 flex-col gap-y-1">
                  {navLinks.map((navLink, index) => (
                    <li key={index}>
                      <NavLink
                        active={route().current(navLink.route)}
                        href={route(navLink.route, navLink.slug)}
                      >
                        <span className="flex items-center gap-x-3">
                          {navLink.icon} {navLink.label}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </SheetContent>
        <SheetClose></SheetClose>
      </Sheet>
    </>
  );
}
