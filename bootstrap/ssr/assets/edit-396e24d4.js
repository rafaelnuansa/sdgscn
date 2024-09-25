import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { F as FlashMessage } from "./logo-360047b4.js";
import { C as Container } from "./container-a7123293.js";
import { T as Toaster } from "./sonner-a166e9e0.js";
import { Link, Head } from "@inertiajs/react";
import { c as cn } from "./utils-186374bb.js";
import { IconHome, IconInvoice, IconInvoiceFill, IconPerson } from "@irsyadadl/paranoid";
import { N as Navigation, F as Footer } from "./footer-5dc05f52.js";
import "react";
import "./input-6fbce247.js";
import "./button-e2a7e3d3.js";
import "./label-4839c48b.js";
import "./dialog-20065758.js";
import "./card-d70f34a0.js";
import { UpdatePasswordForm } from "./update-password-form-ebce1b51.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "sweetalert2";
import "clsx";
import "./image-0458d8cd.js";
import "framer-motion";
import "react-lazy-load";
import "next-themes";
import "sonner";
import "tailwind-merge";
import "./dropdown-menu-c2181ec7.js";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "./sheet-6d41fe2c.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "./theme-provider-b3598db8.js";
import "./lodash-d8bc076d.js";
import "./command-1156986d.js";
import "cmdk";
import "axios";
import "usehooks-ts";
import "./avatar-fff64a18.js";
import "@radix-ui/react-avatar";
import "./checkbox-b75be4ac.js";
import "@radix-ui/react-checkbox";
import "./phone-input-d483b92f.js";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-7b9a4e5c.js";
import "@radix-ui/react-popover";
import "./scroll-area-4a6b9ba2.js";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-slot";
import "@radix-ui/react-label";
import "./input-error-5d71eba3.js";
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
