import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useState, useEffect } from "react";
import { B as Button } from "./button-c70c5ef8.js";
import { D as Dialog, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogDescription } from "./dialog-d3517b83.js";
import { c as formatRupiah } from "./utils-38e41470.js";
import { S as ScrollArea } from "./scroll-area-9ef3b685.js";
import { usePage } from "@inertiajs/react";
import "@irsyadadl/paranoid";
import BookingCreatePayment from "./booking-create-payment-a3b5cedf.js";
import "./table-813451e6.js";
import { l as lodashExports } from "./lodash-d8bc076d.js";
import { L as Label } from "./label-3e67e23b.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-scroll-area";
import "./input-e2af5f4c.js";
import "axios";
import "sweetalert2";
import "@radix-ui/react-label";
function BookingDetailDialog({
  booking,
  openBookingDialog,
  setOpenBookingDialog
}) {
  var _a;
  const { web_setting } = usePage().props;
  const [openPaymentBookingDialog, setOpenPaymentBookingDialog] = useState(false);
  const isLunas = booking.remaining_payment === 0;
  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    var _a2;
    const formattedPhoneNumber = (_a2 = web_setting.website_phone_whatsapp) == null ? void 0 : _a2.replace(
      /\+/g,
      ""
    );
    setPhoneNumber(formattedPhoneNumber);
  }, [web_setting.website_phone_whatsapp]);
  const handlerOpenBookingPaymentDialog = () => {
    setOpenBookingDialog(false);
    setOpenPaymentBookingDialog(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Dialog, { open: openBookingDialog, onOpenChange: setOpenBookingDialog, children: /* @__PURE__ */ jsxs(DialogContent, { className: "p-0", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { className: "p-5", children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "Detail Transaksi" }),
        /* @__PURE__ */ jsx(DialogDescription, { children: booking.invoice })
      ] }),
      /* @__PURE__ */ jsx(ScrollArea, { className: "max-h-[500px] w-full rounded-md border-t", children: /* @__PURE__ */ jsxs("div", { children: [
        booking ? /* @__PURE__ */ jsx("div", { className: "p-5", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx(Label, { children: "Nama Paket" }),
            /* @__PURE__ */ jsx("p", { className: "font-bold", children: booking.package.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx(Label, { children: "Kategori" }),
            /* @__PURE__ */ jsx("p", { className: "font-bold", children: (_a = booking.package.category) == null ? void 0 : _a.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx(Label, { children: "Harga" }),
            /* @__PURE__ */ jsx("p", { className: "font-bold", children: formatRupiah(booking.package.price) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx(Label, { children: "Invoice" }),
            /* @__PURE__ */ jsx("p", { className: "font-bold", children: booking.invoice })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx(Label, { children: "Jumlah Peserta" }),
            /* @__PURE__ */ jsx("p", { className: "font-bold", children: booking.qty })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx(Label, { children: "Total" }),
            /* @__PURE__ */ jsx("p", { className: "font-bold", children: formatRupiah(parseInt(booking.amount)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx(Label, { children: "Sisa Pembayaran" }),
            /* @__PURE__ */ jsx("p", { className: "font-bold", children: formatRupiah(parseInt(booking.remaining_payment)) })
          ] })
        ] }) }) : null,
        booking.payments.map((payment, index) => /* @__PURE__ */ jsx("div", { className: "border-t p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx(Label, { children: "Metode Pembayaran" }),
            /* @__PURE__ */ jsx("p", { className: "font-bold", children: payment.method })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx(Label, { children: "Jumlah Pembayaran" }),
            /* @__PURE__ */ jsx("p", { className: "font-bold", children: formatRupiah(payment.amount) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx(Label, { children: "Status Pembayaran" }),
            /* @__PURE__ */ jsx("p", { className: "font-bold", children: lodashExports.capitalize(payment.status) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx(Label, { children: "ID Pembayaran" }),
            /* @__PURE__ */ jsx("p", { className: "font-bold", children: payment.id })
          ] })
        ] }) }, index)),
        /* @__PURE__ */ jsx("div", { className: "text-center", children: isLunas == false && /* @__PURE__ */ jsx("div", { className: "border-t p-8 text-center", children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "default",
            className: "mb-2 inline-flex w-full items-center text-sm ",
            onClick: handlerOpenBookingPaymentDialog,
            children: "Buat Pembayaran"
          }
        ) }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(
      BookingCreatePayment,
      {
        openPaymentBookingDialog,
        setOpenPaymentBookingDialog,
        booking
      }
    )
  ] });
}
export {
  BookingDetailDialog as default
};
