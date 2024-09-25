import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { Package2, Users, CreditCard, Activity } from "lucide-react";
import "./button-ef56bd5e.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent } from "./card-f706282b.js";
import "./dropdown-menu-fef2e637.js";
import "./table-4b5e7891.js";
import { usePage, Head } from "@inertiajs/react";
import "@irsyadadl/paranoid";
import { A as AdminLayout } from "./admin-layout-58324348.js";
import "clsx";
import "./alert-dialog-7a34daaa.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-fa5dc5b8.js";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
import "./logo-70150b74.js";
import "sweetalert2";
import "./image-50b4b38d.js";
import "framer-motion";
import "react-lazy-load";
import "./scroll-area-db838748.js";
import "@radix-ui/react-scroll-area";
import "./avatar-f336b458.js";
import "@radix-ui/react-avatar";
import "./command-3c1526d0.js";
import "cmdk";
import "./dialog-bc7d8a74.js";
import "@radix-ui/react-dialog";
import "./sonner-a166e9e0.js";
import "next-themes";
import "sonner";
import "./sheet-6fce3cff.js";
import "./label-22b65785.js";
import "@radix-ui/react-label";
import "recoil";
import "@radix-ui/react-alert-dialog";
function Dashboard({ auth, ...props }) {
  const {
    packages_count,
    customer_count,
    hotel_count,
    booking_count,
    bookings
  } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total Articles" }),
          /* @__PURE__ */ jsx(Package2, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: packages_count }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total Pages" }),
          /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: customer_count }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total Users" }),
          /* @__PURE__ */ jsx(CreditCard, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: hotel_count }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total Sliders" }),
          /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: booking_count }) })
      ] })
    ] })
  ] });
}
Dashboard.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { title: "Dashboard", children: page });
export {
  Dashboard as default
};
