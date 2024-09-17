import { j as jsxs, a as jsx, F as Fragment } from "../ssr.js";
import "react";
import { usePage, Head, Link, router } from "@inertiajs/react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-43a93659.js";
import { A as AdminLayout } from "./admin-layout-a706b491.js";
import { IconArrowLeft, IconPencilBox, IconClock, IconX, IconCircleCheckFill, IconDotsVertical, IconCheck, IconClockFill } from "@irsyadadl/paranoid";
import { c as formatRupiah, b as formatDateTime } from "./utils-38e41470.js";
import { b as buttonVariants, B as Button } from "./button-c70c5ef8.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-813451e6.js";
import { l as lodashExports } from "./lodash-d8bc076d.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuLabel, d as DropdownMenuSeparator, f as DropdownMenuGroup, e as DropdownMenuItem } from "./dropdown-menu-4ccafc02.js";
import { A as AlertAction } from "./alert-action-a6d9d096.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
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
import "class-variance-authority";
import "./label-3e67e23b.js";
import "@radix-ui/react-label";
import "recoil";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "@radix-ui/react-dropdown-menu";
import "./alert-dialog-90b5007b.js";
import "@radix-ui/react-alert-dialog";
const statusOptions = [
  { status: "success", icon: IconCheck, label: "Success", confirmMessage: "Apakah yakin mengubah status menjadi Success?" },
  { status: "pending", icon: IconClock, label: "Pending", confirmMessage: "Apakah yakin mengubah status menjadi Pending?" },
  { status: "failed", icon: IconX, label: "Failed", confirmMessage: "Apakah yakin mengubah status menjadi Failed?" },
  { status: "expired", icon: IconClockFill, label: "Expired", confirmMessage: "Apakah yakin mengubah status menjadi Expired?" },
  { status: "cancel", icon: IconX, label: "Cancel", confirmMessage: "Apakah yakin mengubah status menjadi Cancel?" }
];
const handleStatusChange = (paymentId, status) => {
  router.post(
    route("admin.payments.status", { payment: paymentId, status }),
    { preserveScroll: true }
  );
};
function Show() {
  var _a;
  const { auth, booking } = usePage().props;
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: `${booking.invoice} ${booking.package.name}` }),
    /* @__PURE__ */ jsxs(Link, { href: route("admin.bookings.index"), className: `${buttonVariants({ variant: "outline" })} mb-3`, children: [
      /* @__PURE__ */ jsx(IconArrowLeft, { className: "mr-2 h-5 w-5" }),
      " Back to Booking List"
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxs(CardTitle, { className: "text-2xl font-bold", children: [
          "#",
          booking.invoice
        ] }),
        /* @__PURE__ */ jsxs(CardDescription, { className: "text-sm", children: [
          "Informasi detail terkait pemesanan ",
          booking.package.name
        ] })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { className: "border-t p-0", children: /* @__PURE__ */ jsxs("div", { children: [
        booking && /* @__PURE__ */ jsxs("div", { className: "mb-5 mt-5 px-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-4 text-lg font-semibold", children: "Detail Paket" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: [
            { label: "Nama Pemesan", value: booking.user.name },
            { label: "Email", value: booking.user.email },
            { label: "Nomor Telpon", value: booking.user.phone },
            { label: "Nama Paket", value: booking.package.name },
            { label: "Kategori", value: (_a = booking.package.category) == null ? void 0 : _a.name },
            { label: "Harga", value: formatRupiah(booking.package.price) },
            { label: "Invoice", value: booking.invoice },
            { label: "Jumlah Peserta", value: booking.qty },
            { label: "Terbayar", value: formatRupiah(parseInt(booking.amount)) },
            { label: "Sisa Pembayaran", value: formatRupiah(parseInt(booking.amount)) },
            { label: "Total", value: formatRupiah(parseInt(booking.amount)) },
            { label: "Status Booking", value: booking.status },
            { label: "Status Booking", value: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
              /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
                lodashExports.capitalize(booking.status),
                " ",
                /* @__PURE__ */ jsx(IconPencilBox, { className: "ml-2 size-3" })
              ] }) }),
              /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [
                /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Change status" }),
                /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
                auth.user.is_admin && /* @__PURE__ */ jsx(Fragment, { children: [
                  { status: "pending", label: "Pending", icon: IconClock, confirmMessage: "Apakah yakin mengubah status menjadi Pending?" },
                  { status: "canceled", label: "Canceled", icon: IconX, confirmMessage: "Apakah yakin mengubah status menjadi Canceled?" },
                  { status: "completed", label: "Completed", icon: IconCircleCheckFill, confirmMessage: "Apakah yakin mengubah status menjadi Completed?" }
                ].map((option) => /* @__PURE__ */ jsx(DropdownMenuGroup, { children: /* @__PURE__ */ jsx(
                  AlertAction,
                  {
                    trigger: /* @__PURE__ */ jsxs(DropdownMenuItem, { onSelect: (e) => e.preventDefault(), children: [
                      /* @__PURE__ */ jsx(option.icon, { className: "mr-2 w-3" }),
                      " ",
                      option.label
                    ] }),
                    title: booking.invoice,
                    description: option.confirmMessage,
                    action: () => router.post(route("admin.bookings.status", { booking: booking.id, status: option.status }), { preserveScroll: false })
                  }
                ) }, option.status)) })
              ] })
            ] }) }
          ].map((item, index) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: item.label }),
            /* @__PURE__ */ jsx("p", { className: "font-semibold", children: item.value })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxs(Table, { size: "sm", children: [
          /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHead, { children: "ID Transaksi" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Metode" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Virtual Account" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Jumlah" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Berlaku sampai" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Waktu" }),
            /* @__PURE__ */ jsx(TableHead, {})
          ] }) }),
          /* @__PURE__ */ jsx(TableBody, { children: booking.payments && booking.payments.length > 0 ? booking.payments.map((payment) => {
            var _a2;
            return /* @__PURE__ */ jsxs(TableRow, { children: [
              /* @__PURE__ */ jsx(TableCell, { children: payment.id }),
              /* @__PURE__ */ jsx(TableCell, { children: ((_a2 = payment.method) == null ? void 0 : _a2.toUpperCase()) || "-" }),
              /* @__PURE__ */ jsx(TableCell, { children: payment.va_number || "-" }),
              /* @__PURE__ */ jsx(TableCell, { children: payment.amount ? formatRupiah(payment.amount) : "-" }),
              /* @__PURE__ */ jsx(TableCell, { children: lodashExports.capitalize(payment.status || "-") }),
              /* @__PURE__ */ jsx(TableCell, { children: payment.expiry_time ? formatDateTime(payment.expiry_time) : "-" }),
              /* @__PURE__ */ jsx(TableCell, { children: payment.created_at ? formatDateTime(payment.created_at) : "-" }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
                /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(IconDotsVertical, { className: "ml-2 size-3" }) }),
                /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [
                  /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Change status" }),
                  /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
                  statusOptions.map((option) => /* @__PURE__ */ jsx(DropdownMenuGroup, { children: /* @__PURE__ */ jsx(
                    AlertAction,
                    {
                      trigger: /* @__PURE__ */ jsxs(DropdownMenuItem, { onSelect: (e) => e.preventDefault(), children: [
                        /* @__PURE__ */ jsx(option.icon, { className: "mr-2 w-3" }),
                        " ",
                        option.label
                      ] }),
                      title: payment.id,
                      description: option.confirmMessage,
                      action: () => handleStatusChange(payment.id, option.status)
                    }
                  ) }, option.status))
                ] })
              ] }) })
            ] }, payment.id);
          }) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: "8", className: "text-center", children: "Belum ada pembayaran" }) }) })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  Show as default
};
