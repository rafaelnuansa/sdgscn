import { a as jsx, j as jsxs, F as Fragment } from "../ssr.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent } from "./card-43a93659.js";
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { d as cn } from "./utils-38e41470.js";
import { usePage, Head } from "@inertiajs/react";
import { L as Layout } from "./layout-a69b62b5.js";
import { IconClock, IconCheck } from "@irsyadadl/paranoid";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "clsx";
import "tailwind-merge";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "./image-facc74b1.js";
import "framer-motion";
import "react-lazy-load";
import "./avatar-d5a71c43.js";
import "@radix-ui/react-avatar";
import "./button-c70c5ef8.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./command-d3e20674.js";
import "cmdk";
import "lucide-react";
import "./dialog-d3517b83.js";
import "@radix-ui/react-dialog";
import "./theme-provider-b3598db8.js";
import "./sheet-c59fdc39.js";
import "./dropdown-menu-4ccafc02.js";
import "@radix-ui/react-dropdown-menu";
import "./label-3e67e23b.js";
import "@radix-ui/react-label";
const Progress = React.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsx(
  ProgressPrimitive.Root,
  {
    ref,
    className: cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className),
    ...props,
    children: /* @__PURE__ */ jsx(
      ProgressPrimitive.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = ProgressPrimitive.Root.displayName;
function Dashboard() {
  const {
    user,
    booking_pending,
    booking_completed,
    payment_pending,
    payment_success
  } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsx("div", { className: "grid flex-1 items-start gap-4 md:gap-8 ", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Pending Booking" }),
          /* @__PURE__ */ jsx(IconClock, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: booking_pending }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Booking Berhasil" }),
          /* @__PURE__ */ jsx(IconCheck, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: booking_completed }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Menunggu Pembayaran" }),
          /* @__PURE__ */ jsx(IconClock, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: payment_pending }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Pembayaran Berhasil" }),
          /* @__PURE__ */ jsx(IconCheck, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: payment_success }) })
      ] })
    ] }) })
  ] });
}
Dashboard.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page });
export {
  Dashboard as default
};
