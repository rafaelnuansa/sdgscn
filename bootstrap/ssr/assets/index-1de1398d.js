import { j as jsxs, a as jsx } from "../ssr.js";
import React__default, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from "./card-43a93659.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-813451e6.js";
import "./badge-a28027f7.js";
import { A as AdminLayout } from "./admin-layout-a706b491.js";
import { c as formatRupiah, b as formatDateTime } from "./utils-38e41470.js";
import { B as Button } from "./button-c70c5ef8.js";
import { I as Input } from "./input-e2af5f4c.js";
import { u as useFilter } from "./useFilter-40e5ac53.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-ae2d1520.js";
import { IconCirclePlusFill, IconDownload, IconDotsVertical } from "@irsyadadl/paranoid";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuLabel, d as DropdownMenuSeparator, e as DropdownMenuItem } from "./dropdown-menu-4ccafc02.js";
import "./alert-dialog-90b5007b.js";
import { l as lodashExports } from "./lodash-d8bc076d.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "class-variance-authority";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "clsx";
import "./image-facc74b1.js";
import "framer-motion";
import "react-lazy-load";
import "./scroll-area-9ef3b685.js";
import "@radix-ui/react-scroll-area";
import "./avatar-d5a71c43.js";
import "@radix-ui/react-avatar";
import "./command-d3e20674.js";
import "cmdk";
import "lucide-react";
import "./dialog-d3517b83.js";
import "@radix-ui/react-dialog";
import "./sonner-a166e9e0.js";
import "next-themes";
import "sonner";
import "./sheet-c59fdc39.js";
import "./label-3e67e23b.js";
import "@radix-ui/react-label";
import "recoil";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "@radix-ui/react-select";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-alert-dialog";
function BookingIndex({ auth, ...props }) {
  const { data: payments, meta, links } = props.payments;
  const [params, setParams] = useState({ search: "", status: "", start_date: "", end_date: "" });
  useFilter({
    route: route("admin.payments.index"),
    values: params,
    only: ["payments"]
  });
  const handleDateChange = (e) => {
    setParams((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Bookings" }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "border-b", children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Payments" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Manage all payments" })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "p-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex p-5 flex-col w-full gap-3 lg:flex-row", children: [
          /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx(
            Input,
            {
              value: params == null ? void 0 : params.search,
              className: "min-w-[300px] w-full",
              onChange: (e) => setParams((prev) => ({ ...prev, search: e.target.value })),
              placeholder: "Search..."
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "date",
                name: "start_date",
                value: params.start_date,
                onChange: handleDateChange,
                placeholder: "Start Date"
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "date",
                name: "end_date",
                value: params.end_date,
                onChange: handleDateChange,
                placeholder: "End Date"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ jsxs(Select, { value: params == null ? void 0 : params.status, onValueChange: (e) => setParams({ ...params, status: e }), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "md:w-40", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: (params == null ? void 0 : params.status) ? params.status : "Status " }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { children: "All" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "pending", children: "Pending" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "success", children: "Success" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "failed", children: "Failed" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "cancel", children: "Cancel" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "expired", children: "Expired" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("admin.packages.create"), children: [
              /* @__PURE__ */ jsx(IconCirclePlusFill, { className: "mr-2 size-4" }),
              "New"
            ] }) }),
            /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("admin.packages.create"), children: [
              /* @__PURE__ */ jsx(IconDownload, { className: "mr-2 size-4" }),
              "Excel"
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Table, { children: [
          /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHead, { className: "min-w-[150px]", children: "Invoice" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Metode" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Pembayaran" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Terbayar" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Sisa" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Total" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Tanggal" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsx(TableBody, { children: payments.map((payment) => /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
            /* @__PURE__ */ jsxs(TableRow, { children: [
              /* @__PURE__ */ jsx(TableCell, { children: payment.booking.invoice }),
              /* @__PURE__ */ jsxs(TableCell, { children: [
                payment.method.toUpperCase(),
                " "
              ] }),
              /* @__PURE__ */ jsxs(TableCell, { children: [
                lodashExports.capitalize(payment.status),
                " "
              ] }),
              /* @__PURE__ */ jsx(TableCell, { children: formatRupiah(payment.amount) }),
              /* @__PURE__ */ jsx(TableCell, { children: formatRupiah(payment.booking.paid) }),
              /* @__PURE__ */ jsx(TableCell, { children: formatRupiah(payment.booking.remaining) }),
              /* @__PURE__ */ jsx(TableCell, { children: formatRupiah(payment.booking.amount) }),
              /* @__PURE__ */ jsx(TableCell, { children: formatDateTime(payment.created_at) }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
                /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "icon", children: [
                  " ",
                  /* @__PURE__ */ jsx(IconDotsVertical, { className: "size-3" })
                ] }) }),
                /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [
                  /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Actions" }),
                  /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
                  /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("admin.bookings.show", payment.booking.invoice), children: "Show" }) })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ jsx(TableRow, {})
          ] }, payment.id)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(CardFooter, { className: "justify-between  pt-6 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "Showing ",
          meta.from,
          " of ",
          meta.total
        ] }),
        meta.has_pages && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-1", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "outline", children: links.prev ? /* @__PURE__ */ jsxs(Link, { href: links.prev, children: [
            /* @__PURE__ */ jsx(IconChevronLeft, { className: "-ml-1 mr-1 size-4" }),
            "Prev"
          ] }) : /* @__PURE__ */ jsx("span", { children: "Prev" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "outline", children: links.next ? /* @__PURE__ */ jsxs(Link, { href: links.next, children: [
            "Next",
            /* @__PURE__ */ jsx(IconChevronRight, { className: "-mr-1 ml-1 size-4" })
          ] }) : /* @__PURE__ */ jsx("span", { children: "Next" }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  BookingIndex as default
};
