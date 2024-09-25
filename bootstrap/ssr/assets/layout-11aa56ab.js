import { a as jsx, F as Fragment, j as jsxs } from "../ssr.js";
import { L as Logo, F as FlashMessage } from "./logo-360047b4.js";
import { useState, useEffect } from "react";
import { usePage, Link, Head } from "@inertiajs/react";
import { c as cn } from "./utils-186374bb.js";
import { IconHome, IconDashboard, IconSketchbook, IconBarsThree3, IconPerson, IconLogout } from "@irsyadadl/paranoid";
import "react-lazy-load";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-fff64a18.js";
import { B as Button } from "./button-e2a7e3d3.js";
import "./command-1156986d.js";
import "./theme-provider-b3598db8.js";
import { S as Sheet, a as SheetContent, b as SheetClose } from "./sheet-7a963302.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuLabel, d as DropdownMenuSeparator, e as DropdownMenuItem } from "./dropdown-menu-c2181ec7.js";
import { L as Label } from "./label-4839c48b.js";
const navLinks = [
  { label: "Home", route: "home", icon: /* @__PURE__ */ jsx(IconHome, {}) },
  { label: "Dashboard", route: "dashboard", icon: /* @__PURE__ */ jsx(IconDashboard, {}) },
  { label: "History Booking", route: "bookings.index", icon: /* @__PURE__ */ jsx(IconSketchbook, {}) }
];
function Sidebar() {
  usePage().props;
  useState(false);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("aside", { className: "hidden bg-custom-primary-theme lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col", children: [
    /* @__PURE__ */ jsx("div", { className: " p-5 shadow-sm sm:mb-6", children: /* @__PURE__ */ jsx(Link, { className: "flex h-16 shrink-0 items-center", href: route("admin.dashboard.index"), children: /* @__PURE__ */ jsx(Logo, {}) }) }),
    /* @__PURE__ */ jsx("div", { className: "flex  grow flex-col gap-y-5 overflow-y-auto px:0 md:px-6", children: /* @__PURE__ */ jsx("nav", { className: "flex flex-1 flex-col p-4 lg:p-0", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-1 flex-col gap-y-1", children: navLinks.map((navLink, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { active: route().current(navLink.route), href: route(navLink.route, navLink.slug), children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-x-3", children: [
      navLink.icon,
      " ",
      navLink.label
    ] }) }) }, index)) }) }) })
  ] }) });
}
function NavLink({ active = false, children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      className: cn(
        "group flex items-center justify-between rounded-md px-2.5 py-[0.390rem] text-sm leading-6 transition-colors",
        active ? "bg-muted/90 font-semibold text-binbaz-biru-tua " : "bg-aside text-white dark:hover:text-white hover:text-binbaz-biru-tua hover:bg-muted/90"
      ),
      ...props,
      children
    }
  );
}
function Navbar({ title }) {
  const { auth, web_setting } = usePage().props;
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false);
  useState(false);
  const toggleSidebarMenu = () => {
    setOpenSidebarMenu((prev) => !prev);
  };
  useEffect(() => {
  }, [openSidebarMenu]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "sticky top-0 z-20 -mx-4 mb-6 border-b bg-background sm:-mx-6", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center justify-between px-4 py-3 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: toggleSidebarMenu,
            variant: "link",
            size: "icon",
            className: "block focus:outline-none lg:hidden",
            children: /* @__PURE__ */ jsx(IconBarsThree3, {})
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            className: "flex shrink-0 items-center lg:hidden",
            href: route("home")
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-x-4", children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "text-muted-foreground transition duration-200 hover:text-foreground focus:outline-none", children: /* @__PURE__ */ jsxs(Avatar, { className: "aspect-square size-8", children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: auth.user.gravatar }),
          /* @__PURE__ */ jsx(AvatarFallback, { children: auth.user.initials })
        ] }) }),
        /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-56", align: "end", children: [
          /* @__PURE__ */ jsxs(DropdownMenuLabel, { className: "space-y-0.5", children: [
            /* @__PURE__ */ jsx(Label, { children: auth.user.name }),
            /* @__PURE__ */ jsx("span", { className: "block text-sm text-muted-foreground", children: auth.user.email })
          ] }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("profile.index"), children: /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-between gap-2 ", children: [
            /* @__PURE__ */ jsx(IconPerson, { className: "w-4" }),
            " Profile"
          ] }) }) }),
          /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, className: "w-full", children: /* @__PURE__ */ jsx(Link, { href: route("home"), children: /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-between gap-2 ", children: [
            /* @__PURE__ */ jsx(IconHome, { className: "w-4" }),
            " Go to website"
          ] }) }) }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, className: "w-full", children: /* @__PURE__ */ jsxs(Link, { href: route("logout"), as: "button", method: "post", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-between gap-2 ", children: [
              /* @__PURE__ */ jsx(IconLogout, { className: "w-4" }),
              " Logout"
            ] }),
            "                  "
          ] }) })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs(Sheet, { open: openSidebarMenu, onOpenChange: setOpenSidebarMenu, children: [
      /* @__PURE__ */ jsxs(
        SheetContent,
        {
          side: "left",
          className: "inset-y-0 left-0 flex h-full bg-custom-primary-theme min-h-screen w-[320px] max-w-80 flex-col overflow-y-auto overflow-x-hidden p-0  border-0 focus:outline-none",
          children: [
            /* @__PURE__ */ jsx("div", { className: "sticky top-0 bg-custom-primary-theme p-5 shadow-sm ", children: /* @__PURE__ */ jsx(
              Link,
              {
                className: "flex h-16 shrink-0 items-center",
                href: route("admin.dashboard.index"),
                children: /* @__PURE__ */ jsx(Logo, {})
              }
            ) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "px:0 flex grow flex-col gap-y-5 overflow-y-auto bg-custom-primary-theme md:px-6", children: /* @__PURE__ */ jsx("nav", { className: "flex flex-1 flex-col p-4 lg:p-0", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-1 flex-col gap-y-1", children: navLinks.map((navLink, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              NavLink,
              {
                active: route().current(navLink.route),
                href: route(navLink.route, navLink.slug),
                children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-x-3", children: [
                  navLink.icon,
                  " ",
                  navLink.label
                ] })
              }
            ) }, index)) }) }) }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(SheetClose, {})
    ] })
  ] });
}
function Layout({ children }) {
  const { web_setting } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx(
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: `/storage/images/${web_setting == null ? void 0 : web_setting.website_favicon}`
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-muted/20", children: [
      /* @__PURE__ */ jsx(Sidebar, {}),
      /* @__PURE__ */ jsx("div", { className: "lg:pl-72", children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen border-transparent bg-muted/20 px-4 pb-4 pr-4 sm:px-4 lg:border-border lg:px-6 lg:pb-6", children: [
        /* @__PURE__ */ jsx(Navbar, {}),
        children
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(FlashMessage, {})
  ] });
}
export {
  Layout as L
};
