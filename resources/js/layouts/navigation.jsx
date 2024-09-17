import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, router, usePage } from "@inertiajs/react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Sheet, SheetClose, SheetContent } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  IconBarsThree,
  IconCart,
  IconChevronDown,
  IconDashboard,
  IconDashboardFill,
  IconInvoice,
  IconLogin,
  IconLogout,
  IconMail,
  IconPerson,
  IconRocket,
  IconSearch,
  IconSettings,
  IconTelephone,
} from "@irsyadadl/paranoid";
import { CommandPalette } from "@/components/command-pallete";
import { Logo } from "@/components/logo";
import { useMediaQuery } from "usehooks-ts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { LogoDark } from "@/components/logo-dark";
import LoginRegisterNavDialog from "@/pages/dialogs/login-nav";
import LoginRegisterDialog from "@/pages/dialogs/login-register";

const navLinkClasses =
  "text-md items-center tracking-tight text-white font-medium inline-flex px-3 py-3 transition-colors duration-300";

const navLinkSheetClasses =
  "text-md items-center tracking-tight  font-medium inline-flex px-3 py-3 transition-colors duration-300";

const navLinks = [
  { label: "Beranda", route: "home" },
  { label: "Semua Paket", route: "packages.index" },
  { label: "Layanan", route: "galleries.index" },
  { label: "Galeri", route: "galleries.index" },
  { label: "Video", route: "galleries.videos.index" },
  { label: "Hubungi Kami", route: "contact.index" },
  { label: "FAQ", route: "contact.index" },
  { label: "Artikel Kami", route: "contact.index" },
];

export function Navigation() {
  const { auth, web_menus, menus_categories, web_setting } = usePage().props;
  const [openSearch, setOpenSearch] = useState(false);
  const isMobile = useMediaQuery("(max-width: 900px)");

  const [openSidebarMenu, setOpenSidebarMenu] = useState(false);

  const toggleSidebarMenu = () => {
    setOpenSidebarMenu((prev) => !prev);
  };

  useEffect(() => {
    // Any additional effects when openSidebarMenu changes
  }, [openSidebarMenu]);
  const renderMenuItems = (menus) => {
    return menus.map((menu) => (
      <React.Fragment key={menu.id}>
        {menu.children.length > 0 ? (
          <DropdownMenu key={menu.id}>
            <DropdownMenuTrigger className={navLinkClasses}>
              {menu.name}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {menu.children.map((child) => (
                <DropdownMenuItem key={child.id}>
                  {child.url ? (
                    <Link href={child.url}>{child.name}</Link>
                  ) : (
                    <span>{child.name}</span>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            {menu.url ? (
              <Link href={menu.url} className={navLinkClasses}>
                {menu.name}
              </Link>
            ) : (
              <Link className={navLinkClasses}>{menu.name}</Link>
            )}
          </>
        )}
      </React.Fragment>
    ));
  };

  const renderMenuItemsSheet = (menus) => {
    return menus.map((menu) => (
      <React.Fragment key={menu.id}>
        {menu.children.length > 0 ? (
          <DropdownMenu key={menu.id}>
            <DropdownMenuTrigger className={navLinkSheetClasses}>
              {menu.name}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {menu.children.map((child) => (
                <DropdownMenuItem key={child.id}>
                  {child.url ? (
                    <Link href={child.url}>{child.name}</Link>
                  ) : (
                    <span>{child.name}</span>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            {menu.url ? (
              <Link href={menu.url} className={navLinkSheetClasses}>
                {menu.name}
              </Link>
            ) : (
              <Link className={navLinkSheetClasses}>{menu.name}</Link>
            )}
          </>
        )}
      </React.Fragment>
    ));
  };

  return (
    <>
      <CommandPalette open={openSearch} setOpen={setOpenSearch} />

      {!isMobile && (
        <>
          <nav className="sticky top-0 z-30 hidden bg-custom-primary-theme py-2 backdrop-blur transition duration-500 ease-in-out md:block">
            <div className="container mx-auto flex justify-between">
              <div className="flex items-center">
                <Link href="/" className="mr-4 flex text-2xl ">
                  <Logo />
                </Link>
                {/* {navLinks.map((navLink, index) => (
                  <NavLink
                    key={index}
                    active={route().current(navLink.route, navLink.slug)}
                    href={route(navLink.route, navLink.slug)}
                  >
                    {navLink.label}
                  </NavLink>
                ))} */}
              </div>

              <div className="flex items-center">
          
              {renderMenuItems(web_menus)}
             
                <Button
                  size="icon"
                  className="mr-4 size-8 text-white rounded-full [&_svg]:size-4 "
                  variant="link"
                  onClick={() => setOpenSearch(true)}
                >
                  <IconSearch />
                </Button>
                
            
              </div>
            </div>
          </nav>
        </>
      )}
      {isMobile && (
        <>
          <nav className="sticky top-0 z-40 flex w-full items-center justify-between bg-custom-primary-theme px-4 py-3 backdrop-blur-lg">
            <div className="flex items-center">
              <Button
                onClick={toggleSidebarMenu}
                variant="link"
                size="icon"
                className="block text-white focus:outline-none lg:hidden"
              >
                <IconBarsThree />
              </Button>
              <Link
                className="flex shrink-0 items-center lg:hidden"
                href={route("home")}
              >
                <Logo />
              </Link>
            </div>
            <div className="inline-flex gap-2">
              <Button
                size="icon"
                className="size-8 mt-1 rounded-full text-white [&_svg]:size-4 "
                variant="ghost"
                onClick={() => setOpenSearch(true)}
              >
                <IconSearch />
              </Button>
             
            </div>
          </nav>
          <Sheet open={openSidebarMenu} onOpenChange={setOpenSidebarMenu}>
            <SheetContent
              side="left"
              className="inset-y-0 left-0 flex h-full min-h-screen w-[320px] max-w-80 flex-col overflow-y-auto overflow-x-hidden p-0 ring-1 ring-foreground/10  focus:outline-none"
            >
              <div className="sticky top-0 border-b bg-background p-5 shadow-sm ">
                <Link
                  className="flex h-16 mb-5 shrink-0 items-center"
                  href={route("admin.dashboard.index")}
                >
                  <LogoDark />

                </Link>
                <Button
                  size="icon"
                  className="relative flex h-10 w-full items-center justify-between rounded-md border bg-background text-muted-foreground shadow-sm focus:outline-none"
                  variant="ghost"
                  onClick={() => setOpenSearch(true)}
                >
                  <span className="px-3 text-left">
                    <IconSearch />
                  </span>
                  <span className="absolute right-4 text-sm">⌘ K</span>
                </Button>
              </div>
              <div>
                <div className="px:0 flex grow flex-col gap-y-5 overflow-y-auto bg-background md:px-6">
                  <nav className="flex flex-1 flex-col p-4 lg:p-0">
                    <ul className="flex flex-1 flex-col gap-y-1">

                      {/* {navLinks.map((navLink, index) => (
                        <li key={index}>
                          <NavLinkSheet
                            active={route().current(navLink.route)}
                            href={route(navLink.route, navLink.slug)}
                          >
                            <span className="flex items-center gap-x-3">
                              {navLink.icon} {navLink.label}
                            </span>
                          </NavLinkSheet>
                        </li>
                      ))} */}

                      {renderMenuItemsSheet(web_menus)}
                    </ul>
                  </nav>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </>
      )}
    </>
  );
}

export function NavLink({ active, children, href }) {
  return (
    <Link className={cn(navLinkClasses, active)} href={href}>
      {children}
    </Link>
  );
}
export function NavLinkSheet({ active, children, href }) {
  return (
    <Link className={cn(navLinkSheetClasses, active)} href={href}>
      {children}
    </Link>
  );
}
export function NavLinkResponsive({ active, children, href }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center rounded px-2 py-2 hover:bg-accent",
        active
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </Link>
  );
}
