import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { F as FlashMessage } from "./logo-8ae88bc6.js";
import { C as Container } from "./container-a7123293.js";
import { T as Toaster } from "./sonner-a166e9e0.js";
import { Link, Head } from "@inertiajs/react";
import { d as cn } from "./utils-38e41470.js";
import { IconHome, IconInvoice, IconInvoiceFill, IconPerson } from "@irsyadadl/paranoid";
import { N as Navigation, F as Footer } from "./footer-67e2bd2e.js";
import "react";
import "./input-e2af5f4c.js";
import "./button-c70c5ef8.js";
import "./label-3e67e23b.js";
import "./dialog-d3517b83.js";
import "./card-43a93659.js";
import { UpdatePasswordForm } from "./update-password-form-f8f2d41d.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "sweetalert2";
import "clsx";
import "./image-facc74b1.js";
import "framer-motion";
import "react-lazy-load";
import "next-themes";
import "sonner";
import "tailwind-merge";
import "./dropdown-menu-4ccafc02.js";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "./sheet-4df565dd.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "./theme-provider-b3598db8.js";
import "./lodash-d8bc076d.js";
import "./command-d3e20674.js";
import "cmdk";
import "axios";
import "usehooks-ts";
import "./avatar-d5a71c43.js";
import "@radix-ui/react-avatar";
import "./logo-dark-11c95af7.js";
import "./login-nav-427a7598.js";
import "./input-error-5d71eba3.js";
import "./checkbox-da69a68e.js";
import "@radix-ui/react-checkbox";
import "./phone-input-9795e577.js";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-6a1d9996.js";
import "@radix-ui/react-popover";
import "./scroll-area-9ef3b685.js";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-label";
import "@radix-ui/react-slot";
import "./login-register-c2778968.js";
import "@headlessui/react";
function Aside() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("nav", { className: "hidden sm:block md:relative after:absolute after:bottom-[0.5px] after:left-0 after:right-0 after:top-auto after:h-px after:bg-border", children: /* @__PURE__ */ jsx("div", { className: "hide-scrollbar relative z-20 mx-auto block max-w-screen-2xl overflow-x-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxs("ul", { className: "flex items-center gap-x-8", children: [
      /* @__PURE__ */ jsxs(AsideLink, { href: route("dashboard"), children: [
        /* @__PURE__ */ jsx(IconHome, { className: "w-4" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "ml-2", children: "Dashboard" })
      ] }),
      /* @__PURE__ */ jsxs(AsideLink, { href: route("bookings.index"), children: [
        /* @__PURE__ */ jsx(IconInvoice, { className: "w-4" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "ml-2", children: "Histori Bookings" })
      ] }),
      /* @__PURE__ */ jsxs(AsideLink, { href: route("payments.index"), children: [
        /* @__PURE__ */ jsx(IconInvoiceFill, { className: "w-4" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "ml-2", children: "Transaksi" })
      ] }),
      /* @__PURE__ */ jsxs(AsideLink, { href: route("profile.index"), children: [
        /* @__PURE__ */ jsx(IconPerson, { className: "w-4" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "ml-2", children: "Profile" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("nav", { className: "fixed sm:hidden bottom-0 z-50 w-full border-t border-foreground/10 bg-background/50 px-4 pb-2 backdrop-blur-lg", children: /* @__PURE__ */ jsxs("ul", { className: "flex w-full px-4 items-center justify-between gap-x-2", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { className: "grid place-content-center rounded-lg focus:bg-transparent active:bg-transparent [&>svg]:size-5 [&>svg]:text-foreground/50 px-3 py-3.5", href: route("dashboard"), children: [
        /* @__PURE__ */ jsx(IconHome, {}),
        " ",
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Dashboard" })
      ] }) }),
      " ",
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { className: "grid place-content-center rounded-lg focus:bg-transparent active:bg-transparent [&>svg]:size-5 [&>svg]:text-foreground/50 px-3 py-3.5", href: route("bookings.index"), children: [
        /* @__PURE__ */ jsx(IconInvoice, { className: "w-4" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Histori Bookings" })
      ] }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { className: "grid place-content-center rounded-lg focus:bg-transparent active:bg-transparent [&>svg]:size-5 [&>svg]:text-foreground/50 px-3 py-3.5", href: route("payments.index"), children: [
        /* @__PURE__ */ jsx(IconInvoiceFill, { className: "w-4" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Transaksi" })
      ] }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { className: "grid place-content-center rounded-lg focus:bg-transparent active:bg-transparent [&>svg]:size-5 [&>svg]:text-foreground/50 px-3 py-3.5", href: route("profile.index"), children: [
        /* @__PURE__ */ jsx(IconPerson, { className: "w-4" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Profile" })
      ] }) })
    ] }) })
  ] });
}
function AsideLink({ active = false, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      className: cn(
        "group flex relative z-10  whitespace-nowrap transition-all hover:border-b  py-3.5 text-sm border-foreground text-foreground"
      ),
      ...props
    }
  );
}
function UserLayout({ title, children }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(FlashMessage, {}),
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsx(Aside, {}),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("main", { className: "mt-8 mb-10", children }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Edit({ mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Settings" }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl space-y-6", children: /* @__PURE__ */ jsx(UpdatePasswordForm, {}) })
  ] });
}
Edit.layout = (page) => /* @__PURE__ */ jsx(UserLayout, { title: "Settings", children: page });
export {
  Edit as default
};
