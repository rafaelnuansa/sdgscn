import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import { d as formatRupiah, b as formatDateTime } from "./utils-186374bb.js";
import { B as Button } from "./button-e2a7e3d3.js";
import { L as Layout } from "./layout-11aa56ab.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-d70f34a0.js";
import BookingCreatePayment from "./booking-create-payment-7b140668.js";
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
import "@irsyadadl/paranoid";
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
import "./input-6fbce247.js";
import "axios";
function BookingShow({ booking, remaining_payment }) {
  var _a;
  const [openPaymentBookingDialog, setOpenPaymentBookingDialog] = useState(false);
  const handlePayment = (snap_token) => {
    window.snap.pay(snap_token, {
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
  const hasPayments = booking.payments && booking.payments.length > 0;
  const hasPendingPayments = booking.payments.some((payment) => payment.status === "pending");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Link,
      {
        className: "border border-gray-300 rounded px-4 py-2 mb-5 inline-block",
        href: route("bookings.index"),
        children: "Kembali"
      }
    ),
    /* @__PURE__ */ jsx(
      BookingCreatePayment,
      {
        openPaymentBookingDialog,
        setOpenPaymentBookingDialog,
        booking,
        remaining_payment
      }
    ),
    /* @__PURE__ */ jsx(Head, { title: `${booking.invoice} - Booking Details` }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxs(CardTitle, { className: "text-2xl font-bold", children: [
          "BOOKING #",
          booking.invoice
        ] }),
        /* @__PURE__ */ jsxs(CardDescription, { className: "text-sm", children: [
          "Informasi detail terkait pemesanan ",
          booking.package.name
        ] })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "border-t p-0", children: [
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
            { label: "Sisa Pembayaran", value: formatRupiah(parseInt(remaining_payment)) },
            { label: "Total", value: formatRupiah(parseInt(booking.amount)) },
            { label: "Status Booking", value: booking.status }
          ].map((item, index) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: item.label }),
            /* @__PURE__ */ jsx("p", { className: "font-semibold", children: item.value })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4 p-5", children: hasPayments ? booking.payments.map((payment) => /* @__PURE__ */ jsxs(Card, { className: "bg-gray-200", children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg font-bold", children: [
              "Pembayaran ",
              payment.amount ? formatRupiah(payment.amount) : "-"
            ] }),
            /* @__PURE__ */ jsx(CardDescription, { children: payment.created_at ? formatDateTime(payment.created_at) : "-" })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: payment.id }),
              /* @__PURE__ */ jsxs("p", { children: [
                "Metode: ",
                payment.method,
                ", ",
                payment.type
              ] }),
              /* @__PURE__ */ jsxs("p", { children: [
                "Jumlah: ",
                payment.amount ? formatRupiah(payment.amount) : "-"
              ] }),
              /* @__PURE__ */ jsxs("p", { children: [
                "Status: ",
                payment.status
              ] })
            ] }),
            payment.status === "pending" && payment.snap_token && /* @__PURE__ */ jsx(Button, { onClick: () => handlePayment(payment.snap_token), className: "mt-2", children: "Bayar Sekarang" })
          ] })
        ] }, payment.id)) : /* @__PURE__ */ jsx(Fragment, {}) }),
        remaining_payment > 0 && !hasPendingPayments && /* @__PURE__ */ jsx("div", { className: "p-5 text-center", children: /* @__PURE__ */ jsxs(Card, { className: "bg-gray-200", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg font-bold" }) }),
          /* @__PURE__ */ jsx(CardContent, { className: "text-center", children: /* @__PURE__ */ jsx(
            Button,
            {
              variant: "default",
              className: "mb-2 ml-2 text-sm",
              onClick: () => setOpenPaymentBookingDialog(true),
              children: hasPayments ? "Lunasi Sisa Pembayaran" : "Buat Pembayaran"
            }
          ) })
        ] }) })
      ] })
    ] })
  ] });
}
BookingShow.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page });
export {
  BookingShow as default
};
