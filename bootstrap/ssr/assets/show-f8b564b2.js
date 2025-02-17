import { j as jsxs, a as jsx } from "../ssr.js";
import "react";
import { d as formatRupiah, b as formatDateTime } from "./utils-186374bb.js";
import { Head, Link } from "@inertiajs/react";
import { C as Card, d as CardContent } from "./card-d70f34a0.js";
import { T as Table, d as TableBody, b as TableRow, e as TableCell } from "./table-47544d29.js";
import { b as buttonVariants, B as Button } from "./button-e2a7e3d3.js";
import { IconArrowLeft } from "@irsyadadl/paranoid";
import { L as Layout } from "./layout-11aa56ab.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./logo-360047b4.js";
import "sweetalert2";
import "./image-0458d8cd.js";
import "framer-motion";
import "react-lazy-load";
import "./avatar-fff64a18.js";
import "@radix-ui/react-avatar";
import "./command-1156986d.js";
import "cmdk";
import "lucide-react";
import "./dialog-20065758.js";
import "@radix-ui/react-dialog";
import "./theme-provider-b3598db8.js";
import "./sheet-7a963302.js";
import "./dropdown-menu-c2181ec7.js";
import "@radix-ui/react-dropdown-menu";
import "./label-4839c48b.js";
import "@radix-ui/react-label";
function PaymentShow({ payment }) {
  const handlePayment = () => {
    window.snap.pay(payment.snap_token, {
      onSuccess: function(result) {
        console.log(result);
      },
      onPending: function(result) {
        console.log(result);
      },
      onError: function(result) {
        console.log(result);
      },
      onClose: function() {
        console.log("Payment popup closed");
      }
    });
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: `Detail Pembayaran - ${payment.id}` }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          className: buttonVariants({ variant: "outline" }) + " mb-5",
          href: route("bookings.show", payment.booking.invoice),
          children: [
            /* @__PURE__ */ jsx(IconArrowLeft, { className: "mr-2 w-4" }),
            " Kembali"
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "larhy3 mb-6 flex flex-col space-y-1.5 border-b-0 bg-transparent p-0", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold leading-none tracking-tight", children: "Detail Invoice" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Lihat dan download invoice yang telah berhasil diselesaikan." })
      ] }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsx(Table, { children: /* @__PURE__ */ jsxs(TableBody, { children: [
        /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { className: "font-semibold", children: "ID Transaksi" }),
          /* @__PURE__ */ jsx(TableCell, { children: payment.id })
        ] }),
        /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { className: "font-semibold", children: "Metode Pembayaran" }),
          /* @__PURE__ */ jsx(TableCell, { children: payment.method.toUpperCase() })
        ] }),
        /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { className: "font-semibold", children: "Status Pembayaran" }),
          /* @__PURE__ */ jsx(TableCell, { children: payment.status })
        ] }),
        /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { className: "font-semibold", children: "Total Pembayaran" }),
          /* @__PURE__ */ jsx(TableCell, { children: formatRupiah(payment.amount) })
        ] }),
        /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { className: "font-semibold", children: "Pesanan" }),
          /* @__PURE__ */ jsx(TableCell, { children: payment.booking.package.name })
        ] }),
        /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { className: "font-semibold", children: "Waktu Pembayaran" }),
          /* @__PURE__ */ jsx(TableCell, { children: formatDateTime(payment.created_at) })
        ] })
      ] }) }) }) }),
      /* @__PURE__ */ jsx(Card, { className: "mt-5", children: /* @__PURE__ */ jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsx(Table, { children: /* @__PURE__ */ jsxs(TableBody, { children: [
        /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { className: "font-semibold", children: "Pesanan" }),
          /* @__PURE__ */ jsx(TableCell, { children: payment.booking.package.name })
        ] }),
        /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { className: "font-semibold", children: "Jumlah Peserta" }),
          /* @__PURE__ */ jsxs(TableCell, { children: [
            payment.booking.qty,
            " x",
            " ",
            formatRupiah(payment.booking.price)
          ] })
        ] }),
        /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { className: "font-semibold", children: "Invoice Pesanan" }),
          /* @__PURE__ */ jsx(TableCell, { children: payment.booking.invoice })
        ] }),
        /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { className: "font-semibold", children: "Total Pesanan" }),
          /* @__PURE__ */ jsx(TableCell, { children: formatRupiah(payment.booking.amount) })
        ] })
      ] }) }) }) }),
      /* @__PURE__ */ jsx(Button, { onClick: handlePayment, className: "mt-5", children: "Bayar Sekarang" })
    ] })
  ] });
}
PaymentShow.layout = (page) => /* @__PURE__ */ jsx(Layout, { title: "Transaksi", children: page });
export {
  PaymentShow as default
};
