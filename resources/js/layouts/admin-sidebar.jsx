import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { navLinks } from "./admin-navlinks"; // Importing the navigation links
import { Logo } from "@/components/logo";
import { Image } from "@/components/image";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IconSearch } from "@irsyadadl/paranoid";
import { AdminCommandPalette } from "./admin-command-palette";

export function AsideAdmin() {
  const { auth, url } = usePage().props;
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      <AdminCommandPalette open={openSearch} setOpen={setOpenSearch} />
      <aside className="bg-custom-primary-theme hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="p-5 shadow-sm sm:mb-6">
          <Link
            className="flex h-16 shrink-0 items-center"
            href={route("admin.dashboard.index")}
          >
            <Logo />
          </Link>
          <Button
            size="icon"
            className="relative mt-4 flex h-10 w-full items-center justify-between rounded-md bg-background text-muted-foreground shadow-sm focus:outline-none"
            variant="ghost"
            onClick={() => setOpenSearch(true)}
          >
            <span className="px-3 text-left">
              <IconSearch className=" size-5 shrink-0" />
            </span>
            <span className="absolute right-4 text-sm">⌘ K</span>
          </Button>
        </div>
        <div className="px:0  flex grow flex-col gap-y-5 overflow-y-auto md:px-6">
          <nav className="flex flex-1 flex-col p-4 lg:p-0">
            <ul className="flex flex-1 flex-col gap-y-1">
              {navLinks.map((navLink, index) => (
                <li key={index}>
                  <AsideLink
                    active={route().current(navLink.route)}
                    href={route(navLink.route, navLink.slug)}
                  >
                    <span className="flex items-center gap-x-3">
                      {navLink.icon} {navLink.label}
                    </span>
                  </AsideLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export function AsideLink({ active = false, children, ...props }) {
  return (
    <Link
      className={cn(
        "group flex items-center justify-between rounded-md px-2.5 py-[0.390rem] text-sm leading-6 transition-colors",
        active ? "bg-muted/90 font-semibold text-binbaz-biru-tua dark:text-white " : "bg-aside text-white dark:hover:text-white hover:text-binbaz-biru-tua hover:bg-muted/90"
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
