import { a as jsx, F as Fragment, j as jsxs } from "../ssr.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuLabel, d as DropdownMenuSeparator, e as DropdownMenuItem } from "./dropdown-menu-4ccafc02.js";
import { usePage, router, Link } from "@inertiajs/react";
import { B as Button } from "./button-c70c5ef8.js";
import "clsx";
import React__default, { useState, useEffect, useCallback } from "react";
import { S as Sheet, a as SheetContent } from "./sheet-4df565dd.js";
import "./theme-provider-b3598db8.js";
import { IconDashboard, IconPerson, IconNotes, IconLogout, IconHome, IconLogin, IconCirclePerson, IconSearch, IconRocket, IconInvoice, IconBarsThree } from "@irsyadadl/paranoid";
import { l as lodashExports } from "./lodash-d8bc076d.js";
import { f as CommandDialog, b as CommandInput, a as CommandList, e as CommandItem } from "./command-d3e20674.js";
import axios from "axios";
import { c as formatRupiah } from "./utils-38e41470.js";
import { I as Image } from "./image-facc74b1.js";
import { L as Logo } from "./logo-8ae88bc6.js";
import { useMediaQuery } from "usehooks-ts";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-d5a71c43.js";
import { L as Label } from "./label-3e67e23b.js";
import { L as LogoDark } from "./logo-dark-11c95af7.js";
import LoginRegisterNavDialog from "./login-nav-427a7598.js";
import LoginRegisterDialog from "./login-register-c2778968.js";
const cmdic = "!rounded-md !py-2 [&_svg]:!size-4 [&_svg]:text-muted-foreground [&_svg]:mr-2";
function CommandPalette({ open, setOpen }) {
  const { auth } = usePage().props;
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open2) => !open2);
      }
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);
  const debouncedSearch = useCallback(
    lodashExports.debounce(async (value) => {
      const { data } = await axios.get(
        route("packages.search", {
          search: value
        })
      );
      setResults(data);
    }, 500),
    []
  );
  function searchHandler(value) {
    setSearch(value);
    debouncedSearch(value);
  }
  useEffect(() => {
    router.on("navigate", () => setOpen(false));
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(CommandDialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(CommandInput, { value: search, onValueChange: searchHandler, placeholder: "Search..." }),
    /* @__PURE__ */ jsxs(CommandList, { className: "p-2", children: [
      results.length > 0 ? results.map((result) => /* @__PURE__ */ jsxs(CommandItem, { className: cmdic, onSelect: () => router.get(result.href), children: [
        /* @__PURE__ */ jsx(Image, { src: result.image, alt: result.name, className: "w-8 h-8 rounded-full mr-2" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("span", { children: result.name }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: formatRupiah(result.price) })
        ] })
      ] }, result.id)) : /* @__PURE__ */ jsx("div", { className: "px-4 py-2 text-center text-sm text-gray-500", children: "Tidak ada hasil" }),
      auth.user && results.length === 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(CommandItem, { className: cmdic, onSelect: () => router.get(route("dashboard")), children: [
          /* @__PURE__ */ jsx(IconDashboard, {}),
          "Dashboard"
        ] }),
        /* @__PURE__ */ jsxs(CommandItem, { className: cmdic, onSelect: () => router.get(route("profile.index")), children: [
          /* @__PURE__ */ jsx(IconPerson, {}),
          "Profile"
        ] }),
        /* @__PURE__ */ jsxs(CommandItem, { className: cmdic, onSelect: () => router.get(route("packages.index")), children: [
          /* @__PURE__ */ jsx(IconNotes, {}),
          "List Packages"
        ] }),
        /* @__PURE__ */ jsxs(CommandItem, { className: cmdic, onSelect: () => router.post(route("logout")), children: [
          /* @__PURE__ */ jsx(IconLogout, {}),
          "Log out"
        ] })
      ] }),
      !auth.user && results.length === 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(CommandItem, { className: cmdic, onSelect: () => router.get(route("home")), children: [
          /* @__PURE__ */ jsx(IconHome, {}),
          "Home"
        ] }),
        /* @__PURE__ */ jsxs(CommandItem, { className: cmdic, onSelect: () => router.get(route("packages.index")), children: [
          /* @__PURE__ */ jsx(IconNotes, {}),
          "Packages"
        ] }),
        /* @__PURE__ */ jsxs(CommandItem, { className: cmdic, onSelect: () => router.get(route("login")), children: [
          /* @__PURE__ */ jsx(IconLogin, {}),
          "Login"
        ] }),
        /* @__PURE__ */ jsxs(CommandItem, { className: cmdic, onSelect: () => router.get(route("register")), children: [
          /* @__PURE__ */ jsx(IconCirclePerson, {}),
          "Register"
        ] })
      ] })
    ] })
  ] }) });
}
const navLinkClasses = "text-md items-center tracking-tight text-white font-medium inline-flex px-3 py-3 transition-colors duration-300";
const navLinkSheetClasses = "text-md items-center tracking-tight  font-medium inline-flex px-3 py-3 transition-colors duration-300";
function Navigation() {
  const { auth, web_menus, menus_categories, web_setting } = usePage().props;
  const [openSearch, setOpenSearch] = useState(false);
  const isMobile = useMediaQuery("(max-width: 900px)");
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false);
  const toggleSidebarMenu = () => {
    setOpenSidebarMenu((prev) => !prev);
  };
  useEffect(() => {
  }, [openSidebarMenu]);
  const renderMenuItems = (menus) => {
    return menus.map((menu) => /* @__PURE__ */ jsx(React__default.Fragment, { children: menu.children.length > 0 ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: navLinkClasses, children: menu.name }),
      /* @__PURE__ */ jsx(DropdownMenuContent, { className: "w-56", children: menu.children.map((child) => /* @__PURE__ */ jsx(DropdownMenuItem, { children: child.url ? /* @__PURE__ */ jsx(Link, { href: child.url, children: child.name }) : /* @__PURE__ */ jsx("span", { children: child.name }) }, child.id)) })
    ] }, menu.id) : /* @__PURE__ */ jsx(Fragment, { children: menu.url ? /* @__PURE__ */ jsx(Link, { href: menu.url, className: navLinkClasses, children: menu.name }) : /* @__PURE__ */ jsx(Link, { className: navLinkClasses, children: menu.name }) }) }, menu.id));
  };
  const renderMenuItemsSheet = (menus) => {
    return menus.map((menu) => /* @__PURE__ */ jsx(React__default.Fragment, { children: menu.children.length > 0 ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: navLinkSheetClasses, children: menu.name }),
      /* @__PURE__ */ jsx(DropdownMenuContent, { className: "w-56", children: menu.children.map((child) => /* @__PURE__ */ jsx(DropdownMenuItem, { children: child.url ? /* @__PURE__ */ jsx(Link, { href: child.url, children: child.name }) : /* @__PURE__ */ jsx("span", { children: child.name }) }, child.id)) })
    ] }, menu.id) : /* @__PURE__ */ jsx(Fragment, { children: menu.url ? /* @__PURE__ */ jsx(Link, { href: menu.url, className: navLinkSheetClasses, children: menu.name }) : /* @__PURE__ */ jsx(Link, { className: navLinkSheetClasses, children: menu.name }) }) }, menu.id));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(CommandPalette, { open: openSearch, setOpen: setOpenSearch }),
    !isMobile && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("nav", { className: "sticky top-0 z-30 hidden bg-custom-primary-theme py-2 backdrop-blur transition duration-500 ease-in-out md:block", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(Link, { href: "/", className: "mr-4 flex text-2xl ", children: /* @__PURE__ */ jsx(Logo, {}) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        renderMenuItems(web_menus),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "icon",
            className: "mr-4 size-8 text-white rounded-full [&_svg]:size-4 ",
            variant: "link",
            onClick: () => setOpenSearch(true),
            children: /* @__PURE__ */ jsx(IconSearch, {})
          }
        ),
        auth.user ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "text-muted-foreground transition duration-200 hover:text-foreground focus:outline-none", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between space-x-4", children: /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxs(Avatar, { className: "size-6 sm:size-8", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: auth.user.gravatar }),
            /* @__PURE__ */ jsx(AvatarFallback, { children: auth.user.initials })
          ] }) }) }) }),
          /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-56", align: "end", children: [
            /* @__PURE__ */ jsxs(DropdownMenuLabel, { className: "space-y-0.5", children: [
              /* @__PURE__ */ jsx(Label, { children: auth.user.name }),
              /* @__PURE__ */ jsx("span", { className: "block text-sm text-muted-foreground", children: auth.user.email })
            ] }),
            /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
            auth.user.is_admin == 1 && /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
              Link,
              {
                href: route("admin.dashboard.index"),
                className: "flex items-center  [&_svg]:size-4 [&_svg]:text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsx(IconDashboard, { className: "mr-1 w-4" }),
                  "Admin Panel"
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
              Link,
              {
                className: "flex items-center  [&_svg]:size-4 [&_svg]:text-muted-foreground",
                href: route("dashboard"),
                children: [
                  /* @__PURE__ */ jsx(IconRocket, { className: "mr-1 w-4" }),
                  "Dashboard"
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
              Link,
              {
                href: route("bookings.index"),
                className: "flex items-center  [&_svg]:size-4 [&_svg]:text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsx(IconInvoice, { className: "mr-1 w-4" }),
                  "Bookings"
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
              Link,
              {
                href: route("profile.index"),
                className: "flex  [&_svg]:size-4 [&_svg]:text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsx(IconPerson, { className: "mr-1 w-4" }),
                  "Profile"
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
            /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, className: "w-full", children: /* @__PURE__ */ jsxs(Link, { href: "/logout", as: "button", method: "post", children: [
              /* @__PURE__ */ jsx(IconLogout, { className: "mr-1 w-4" }),
              " Logout"
            ] }) })
          ] })
        ] }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(LoginRegisterNavDialog, {}) })
      ] })
    ] }) }) }),
    isMobile && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("nav", { className: "sticky top-0 z-40 flex w-full items-center justify-between bg-custom-primary-theme px-4 py-3 backdrop-blur-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: toggleSidebarMenu,
              variant: "link",
              size: "icon",
              className: "block text-white focus:outline-none lg:hidden",
              children: /* @__PURE__ */ jsx(IconBarsThree, {})
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              className: "flex shrink-0 items-center lg:hidden",
              href: route("home"),
              children: /* @__PURE__ */ jsx(Logo, {})
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "inline-flex gap-2", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "icon",
              className: "size-8 mt-1 rounded-full text-white [&_svg]:size-4 ",
              variant: "ghost",
              onClick: () => setOpenSearch(true),
              children: /* @__PURE__ */ jsx(IconSearch, {})
            }
          ),
          auth.user ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "text-muted-foreground transition duration-200 hover:text-foreground focus:outline-none", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between space-x-4", children: /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxs(Avatar, { className: "size-6 sm:size-8", children: [
              /* @__PURE__ */ jsx(AvatarImage, { src: auth.user.gravatar }),
              /* @__PURE__ */ jsx(AvatarFallback, { children: auth.user.initials })
            ] }) }) }) }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-56", align: "end", children: [
              /* @__PURE__ */ jsxs(DropdownMenuLabel, { className: "space-y-0.5", children: [
                /* @__PURE__ */ jsx(Label, { children: auth.user.name }),
                /* @__PURE__ */ jsx("span", { className: "block text-sm text-muted-foreground", children: auth.user.email })
              ] }),
              /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
              auth.user.is_admin == 1 && /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
                Link,
                {
                  href: route("admin.dashboard.index"),
                  className: "flex items-center  [&_svg]:size-4 [&_svg]:text-muted-foreground",
                  children: [
                    /* @__PURE__ */ jsx(IconDashboard, { className: "mr-1 w-4" }),
                    "Admin Panel"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
                Link,
                {
                  className: "flex items-center  [&_svg]:size-4 [&_svg]:text-muted-foreground",
                  href: route("dashboard"),
                  children: [
                    /* @__PURE__ */ jsx(IconRocket, { className: "mr-1 w-4" }),
                    "Dashboard"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
                Link,
                {
                  href: route("bookings.index"),
                  className: "flex items-center  [&_svg]:size-4 [&_svg]:text-muted-foreground",
                  children: [
                    /* @__PURE__ */ jsx(IconInvoice, { className: "mr-1 w-4" }),
                    "Bookings"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
                Link,
                {
                  href: route("profile.index"),
                  className: "flex  [&_svg]:size-4 [&_svg]:text-muted-foreground",
                  children: [
                    /* @__PURE__ */ jsx(IconPerson, { className: "mr-1 w-4" }),
                    "Profile"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, className: "w-full", children: /* @__PURE__ */ jsxs(Link, { href: "/logout", as: "button", method: "post", children: [
                /* @__PURE__ */ jsx(IconLogout, { className: "mr-1 w-4" }),
                " Logout"
              ] }) })
            ] })
          ] }) : /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsx(LoginRegisterDialog, {}) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Sheet, { open: openSidebarMenu, onOpenChange: setOpenSidebarMenu, children: /* @__PURE__ */ jsxs(
        SheetContent,
        {
          side: "left",
          className: "inset-y-0 left-0 flex h-full min-h-screen w-[320px] max-w-80 flex-col overflow-y-auto overflow-x-hidden p-0 ring-1 ring-foreground/10  focus:outline-none",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "sticky top-0 border-b bg-background p-5 shadow-sm ", children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  className: "flex h-16 mb-5 shrink-0 items-center",
                  href: route("admin.dashboard.index"),
                  children: /* @__PURE__ */ jsx(LogoDark, {})
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "icon",
                  className: "relative flex h-10 w-full items-center justify-between rounded-md border bg-background text-muted-foreground shadow-sm focus:outline-none",
                  variant: "ghost",
                  onClick: () => setOpenSearch(true),
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "px-3 text-left", children: /* @__PURE__ */ jsx(IconSearch, {}) }),
                    /* @__PURE__ */ jsx("span", { className: "absolute right-4 text-sm", children: "⌘ K" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "px:0 flex grow flex-col gap-y-5 overflow-y-auto bg-background md:px-6", children: /* @__PURE__ */ jsx("nav", { className: "flex flex-1 flex-col p-4 lg:p-0", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-1 flex-col gap-y-1", children: renderMenuItemsSheet(web_menus) }) }) }) })
          ]
        }
      ) })
    ] })
  ] });
}
function Footer() {
  const { web_setting } = usePage().props;
  return /* @__PURE__ */ jsxs("footer", { className: "bg-gray-950", "aria-labelledby": "footer-heading", children: [
    /* @__PURE__ */ jsx("h2", { id: "footer-heading", className: "sr-only", children: "Footer" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto container px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-8", children: [
        /* @__PURE__ */ jsx(Logo, { className: "h-10 text-white" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-6 text-white", children: web_setting == null ? void 0 : web_setting.website_address })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-xs leading-5 text-white", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        web_setting.website_name,
        ", All rights reserved."
      ] }) })
    ] })
  ] });
}
export {
  Footer as F,
  Navigation as N
};
