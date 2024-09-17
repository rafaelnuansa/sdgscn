import { a as jsx, F as Fragment, j as jsxs } from "../ssr.js";
import { L as Logo, F as FlashMessage } from "./logo-8ae88bc6.js";
import { useState, useEffect } from "react";
import { usePage, router, Link, Head } from "@inertiajs/react";
import { d as cn } from "./utils-38e41470.js";
import "./scroll-area-9ef3b685.js";
import { IconDashboard, IconPriceTag, IconNotepad, IconPaper, IconAlbum, IconGallery, IconVideoPlaylist, IconBrandApple, IconBarsThree, IconPerson, IconSettings, IconLogout, IconSearch, IconChecklist, IconBarsThree3, IconHome } from "@irsyadadl/paranoid";
import "react-lazy-load";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-d5a71c43.js";
import { B as Button } from "./button-c70c5ef8.js";
import { f as CommandDialog, b as CommandInput, a as CommandList, e as CommandItem } from "./command-d3e20674.js";
import { T as Toaster } from "./sonner-a166e9e0.js";
import { S as Sheet, a as SheetContent, b as SheetClose } from "./sheet-c59fdc39.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuLabel, d as DropdownMenuSeparator, e as DropdownMenuItem } from "./dropdown-menu-4ccafc02.js";
import { L as Label } from "./label-3e67e23b.js";
import "clsx";
import { RecoilRoot } from "recoil";
const navLinks = [
  { label: "Dashboard", route: "admin.dashboard.index", icon: /* @__PURE__ */ jsx(IconDashboard, {}) },
  { label: "Categories", route: "admin.categories.index", icon: /* @__PURE__ */ jsx(IconPriceTag, {}) },
  { label: "Articles", route: "admin.articles.index", icon: /* @__PURE__ */ jsx(IconNotepad, {}) },
  { label: "Pages", route: "admin.pages.index", icon: /* @__PURE__ */ jsx(IconPaper, {}) },
  { label: "Sliders", route: "admin.sliders.index", icon: /* @__PURE__ */ jsx(IconAlbum, {}) },
  { label: "Galleries", route: "admin.albums.index", icon: /* @__PURE__ */ jsx(IconGallery, {}) },
  { label: "Videos", route: "admin.videos.index", icon: /* @__PURE__ */ jsx(IconVideoPlaylist, {}) },
  { label: "Partners", route: "admin.partners.index", icon: /* @__PURE__ */ jsx(IconBrandApple, {}) },
  { label: "Menu", route: "admin.menus.index", icon: /* @__PURE__ */ jsx(IconBarsThree, {}) },
  { label: "Users", route: "admin.users.index", icon: /* @__PURE__ */ jsx(IconPerson, {}) },
  { label: "Settings", route: "admin.settings.index", icon: /* @__PURE__ */ jsx(IconSettings, {}) }
];
const cmdic = "!rounded-md !py-2 [&_svg]:!size-4 [&_svg]:text-muted-foreground [&_svg]:mr-2";
function AdminCommandPalette({ open, setOpen }) {
  usePage().props;
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
      navLinks.map((link) => /* @__PURE__ */ jsxs(
        CommandItem,
        {
          className: cmdic,
          onSelect: () => router.get(route(link.route)),
          children: [
            link.icon,
            link.label
          ]
        },
        link.route
      )),
      /* @__PURE__ */ jsxs(CommandItem, { className: cmdic, onSelect: () => router.post(route("logout")), children: [
        /* @__PURE__ */ jsx(IconLogout, {}),
        "Log out"
      ] })
    ] })
  ] }) });
}
function AsideAdmin() {
  usePage().props;
  const [openSearch, setOpenSearch] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AdminCommandPalette, { open: openSearch, setOpen: setOpenSearch }),
    /* @__PURE__ */ jsxs("aside", { className: "bg-custom-primary-theme hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-5 shadow-sm sm:mb-6", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            className: "flex h-16 shrink-0 items-center",
            href: route("admin.dashboard.index"),
            children: /* @__PURE__ */ jsx(Logo, {})
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            size: "icon",
            className: "relative mt-4 flex h-10 w-full items-center justify-between rounded-md bg-background text-muted-foreground shadow-sm focus:outline-none",
            variant: "ghost",
            onClick: () => setOpenSearch(true),
            children: [
              /* @__PURE__ */ jsx("span", { className: "px-3 text-left", children: /* @__PURE__ */ jsx(IconSearch, { className: " size-5 shrink-0" }) }),
              /* @__PURE__ */ jsx("span", { className: "absolute right-4 text-sm", children: "⌘ K" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "px:0  flex grow flex-col gap-y-5 overflow-y-auto md:px-6", children: /* @__PURE__ */ jsx("nav", { className: "flex flex-1 flex-col p-4 lg:p-0", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-1 flex-col gap-y-1", children: navLinks.map((navLink, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        AsideLink,
        {
          active: route().current(navLink.route),
          href: route(navLink.route, navLink.slug),
          children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-x-3", children: [
            navLink.icon,
            " ",
            navLink.label
          ] })
        }
      ) }, index)) }) }) })
    ] })
  ] });
}
function AsideLink({ active = false, children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      className: cn(
        "group flex items-center justify-between rounded-md px-2.5 py-[0.390rem] text-sm leading-6 transition-colors",
        active ? "bg-muted/90 font-semibold text-binbaz-biru-tua dark:text-white " : "bg-aside text-white dark:hover:text-white hover:text-binbaz-biru-tua hover:bg-muted/90"
      ),
      ...props,
      children
    }
  );
}
function Notification({ openNotification, setOpenNotification }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Sheet, { open: openNotification, onOpenChange: setOpenNotification, className: "", children: /* @__PURE__ */ jsx(SheetContent, { className: "p-0 max-w-80", children: /* @__PURE__ */ jsx("div", { className: "fixed z-50 gap-4 bg-background shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 h-full w-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm p-0 max-w-80", children: /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-10 border-b bg-background p-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-1.5 p-4 text-center sm:text-left", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-base font-semibold leading-none tracking-tight vaul-scrollable", children: "Notifications" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "You have 20 unread notifications. Click on a notification to mark it as read." })
    ] }),
    /* @__PURE__ */ jsxs(
      Button,
      {
        size: "sm",
        children: [
          /* @__PURE__ */ jsx(IconChecklist, { className: "size-4 mr-2" }),
          "  Mark all as read"
        ]
      }
    )
  ] }) }) }) }) });
}
function AdminNav({ title }) {
  const { auth } = usePage().props;
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const toggleSidebarMenu = () => {
    setOpenSidebarMenu((prev) => !prev);
  };
  useEffect(() => {
  }, [openSidebarMenu, openNotification]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AdminCommandPalette, { open: openSearch, setOpen: setOpenSearch }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-0 z-20 -mx-4 mb-6 border-b bg-background sm:-mx-6", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center justify-between px-4 py-4 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(Button, { onClick: toggleSidebarMenu, variant: "link", size: "icon", className: "block focus:outline-none lg:hidden", children: /* @__PURE__ */ jsx(IconBarsThree3, {}) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            "data-orientation": "vertical",
            role: "none",
            className: "shrink-0 bg-border w-[1px] mx-4 h-6 lg:hidden"
          }
        ),
        /* @__PURE__ */ jsx("strong", { className: "block focus:outline-none lg:hidden", children: title })
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
          /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("admin.profile.index"),
              children: /* @__PURE__ */ jsxs("span", { className: "flex gap-2 items-center justify-between ", children: [
                /* @__PURE__ */ jsx(IconPerson, { className: "w-4" }),
                " Profile"
              ] })
            }
          ) }),
          /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, className: "w-full", children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("home"),
              children: /* @__PURE__ */ jsxs("span", { className: "flex gap-2 items-center justify-between ", children: [
                /* @__PURE__ */ jsx(IconHome, { className: "w-4" }),
                " Go to website"
              ] })
            }
          ) }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, className: "w-full", children: /* @__PURE__ */ jsx(Link, { href: route("logout"), as: "button", method: "post", children: /* @__PURE__ */ jsxs("span", { className: "flex gap-2 items-center justify-between ", children: [
            /* @__PURE__ */ jsx(IconLogout, { className: "w-4" }),
            "Logout"
          ] }) }) })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs(Sheet, { open: openSidebarMenu, onOpenChange: setOpenSidebarMenu, children: [
      /* @__PURE__ */ jsxs(SheetContent, { side: "left", className: "flex flex-col bg-custom-primary-theme border-0 inset-y-0 left-0 h-full max-w-80 min-h-screen w-[320px] overflow-y-auto overflow-x-hidden  p-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "sticky top-0 bg-custom-primary-theme p-5 shadow-sm ", children: [
          /* @__PURE__ */ jsx(Link, { className: "flex shrink-0 items-center", href: route("admin.dashboard.index"), children: /* @__PURE__ */ jsx(Logo, {}) }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              size: "icon",
              className: "relative mt-4 flex justify-between h-10 w-full items-center rounded-md border bg-background text-muted-foreground shadow-sm focus:outline-none",
              variant: "ghost",
              onClick: () => setOpenSearch(true),
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-left px-3", children: /* @__PURE__ */ jsx(IconSearch, { className: "size-5 shrink-0" }) }),
                /* @__PURE__ */ jsx("span", { class: "absolute right-4 text-sm", children: "⌘ K" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex bg-custom-primary-theme grow flex-col gap-y-5 overflow-y-auto px:0 md:px-6", children: /* @__PURE__ */ jsx("nav", { className: "flex flex-1 flex-col p-4 lg:p-0", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-1 flex-col gap-y-1", children: navLinks.map((navLink, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(AsideLink, { active: route().current(navLink.route), href: route(navLink.route, navLink.slug), children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-x-3", children: [
          navLink.icon,
          " ",
          navLink.label
        ] }) }) }, index)) }) }) }) })
      ] }),
      /* @__PURE__ */ jsx(SheetClose, {})
    ] }),
    /* @__PURE__ */ jsx(Notification, { setOpenNotification, openNotification })
  ] });
}
function AdminLayout({ children }) {
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
      /* @__PURE__ */ jsx(AsideAdmin, {}),
      /* @__PURE__ */ jsx("div", { className: "lg:pl-72", children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen border-l border-transparent bg-muted/20 px-4 pb-4 pr-4 sm:px-4 lg:border-border lg:px-6 lg:pb-6", children: [
        /* @__PURE__ */ jsx(AdminNav, {}),
        /* @__PURE__ */ jsx(RecoilRoot, { children })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(FlashMessage, {}),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
}
export {
  AdminLayout as A
};
