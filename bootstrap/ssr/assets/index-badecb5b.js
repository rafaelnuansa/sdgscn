import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { Package2, Users, CreditCard, Activity, ArrowUpRight } from "lucide-react";
import { B as Button } from "./button-c70c5ef8.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, c as CardDescription } from "./card-43a93659.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuLabel, d as DropdownMenuSeparator, e as DropdownMenuItem, f as DropdownMenuGroup } from "./dropdown-menu-4ccafc02.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-813451e6.js";
import { usePage, Head, Link, router } from "@inertiajs/react";
import { IconDotsVertical } from "@irsyadadl/paranoid";
import { A as AdminLayout } from "./admin-layout-a706b491.js";
import { c as formatRupiah, b as formatDateTime } from "./utils-38e41470.js";
import { A as AlertAction } from "./alert-action-a6d9d096.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
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
import "./alert-dialog-90b5007b.js";
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
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total Packages" }),
          /* @__PURE__ */ jsx(Package2, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: packages_count }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total Customers" }),
          /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: customer_count }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total Hotels" }),
          /* @__PURE__ */ jsx(CreditCard, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: hotel_count }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total Bookings" }),
          /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: booking_count }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-5 ", children: /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "New Bookings" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Recent bookings in pending status." }),
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", className: "ml-auto gap-1", children: /* @__PURE__ */ jsxs(Link, { href: route("admin.bookings.index"), children: [
          "View All",
          /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { className: "border-t p-0", children: /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { className: "min-w-[150px]", children: "Invoice" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Package" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Peserta" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Total" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Terbayar" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Tanggal" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: bookings.length > 0 ? bookings.map((booking) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { children: booking.invoice }),
          /* @__PURE__ */ jsx(TableCell, { children: booking.package.name }),
          /* @__PURE__ */ jsxs(TableCell, { children: [
            booking.status,
            " "
          ] }),
          /* @__PURE__ */ jsx(TableCell, { children: booking.qty }),
          /* @__PURE__ */ jsx(TableCell, { children: formatRupiah(booking.amount) }),
          /* @__PURE__ */ jsx(TableCell, { children: formatRupiah(booking.paid_payment) }),
          /* @__PURE__ */ jsx(TableCell, { children: formatDateTime(booking.created_at) }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "icon", children: [
              " ",
              /* @__PURE__ */ jsx(IconDotsVertical, { className: "size-3" })
            ] }) }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [
              /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Actions" }),
              /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
              auth.user.is_admin && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route(
                      "admin.bookings.show",
                      booking.invoice
                    ),
                    children: "Show"
                  }
                ) }),
                /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { children: "Edit" }) }),
                /* @__PURE__ */ jsx(DropdownMenuGroup, { children: /* @__PURE__ */ jsx(
                  AlertAction,
                  {
                    trigger: /* @__PURE__ */ jsx(
                      DropdownMenuItem,
                      {
                        onSelect: (e) => e.preventDefault(),
                        children: "Delete"
                      }
                    ),
                    title: booking.invoice,
                    description: "Apakah anda yakin ingin menghapus?",
                    action: () => router.delete(
                      route("admin.bookings.destroy", [
                        booking
                      ]),
                      { preserveScroll: true }
                    )
                  }
                ) })
              ] })
            ] })
          ] }) })
        ] }, booking.id)) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: "8", className: "text-center", children: "No bookings found." }) }) })
      ] }) })
    ] }) })
  ] });
}
Dashboard.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { title: "Dashboard", children: page });
export {
  Dashboard as default
};
