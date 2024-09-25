import { a as jsx, j as jsxs, F as Fragment } from "../ssr.js";
import { useState } from "react";
import { D as Dialog, a as DialogContent, c as DialogHeader, d as DialogTitle } from "./dialog-bc7d8a74.js";
import { B as Button } from "./button-ef56bd5e.js";
import { IconCurrencyDollar, IconMoneybag, IconCreditCard } from "@irsyadadl/paranoid";
import { d as formatRupiah } from "./utils-fa5dc5b8.js";
import { I as Input } from "./input-05b98463.js";
import { L as Label } from "./label-22b65785.js";
import axios from "axios";
import Swal from "sweetalert2";
import { router } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-dialog";
import "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
function BookingCreatePayment({ booking, remaining_payment, openPaymentBookingDialog, setOpenPaymentBookingDialog }) {
  const [paymentType, setPaymentType] = useState("full");
  const [downPaymentAmount, setDownPaymentAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const minimumDownPayment = booking.amount * booking.package.minimum_dp_percent / 100;
  const isPaymentExist = booking.payments && booking.payments.length > 0;
  const isPaymentPaidfully = remaining_payment === 0;
  const formatNumber = (value) => {
    return new Intl.NumberFormat("id-ID").format(value);
  };
  const parseNumber = (value) => {
    const parsed = parseInt(value.replace(/\./g, ""), 10);
    return isNaN(parsed) ? 0 : parsed;
  };
  const createPayment = async () => {
    try {
      setLoading(true);
      const amountToPay = paymentType === "down_payment" ? parseNumber(downPaymentAmount) : remaining_payment;
      if (paymentType === "down_payment" && amountToPay < minimumDownPayment) {
        Swal.fire({
          icon: "warning",
          title: "DP Tidak valid",
          timer: 3e3,
          showCancelButton: true,
          focusConfirm: false,
          text: `Jumlah uang muka harus minimal ${formatRupiah(minimumDownPayment)}.`
        });
        setLoading(false);
        return;
      }
      const response = await axios.post(route("payments.store"), {
        booking_invoice: booking.invoice,
        amount: amountToPay,
        payment_type: paymentType,
        method: paymentMethod
      });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.data.message,
        showCancelButton: true,
        timer: 3e3
      }).then((result) => {
        if (result.isConfirmed || result.isDismissed) {
          router.visit(route("bookings.show", booking.invoice), { method: "get" });
          setOpenPaymentBookingDialog(false);
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        timer: 3e3,
        text: error.response.data.message
      }).then(() => {
        if (error.response.status === 409) {
          router.visit(route("bookings.show", booking.invoice), { method: "get" });
        }
        setOpenPaymentBookingDialog(false);
      });
    } finally {
      setLoading(false);
    }
  };
  const handleDownPaymentChange = (e) => {
    const value = e.target.value;
    const parsedValue = parseNumber(value);
    const formattedValue = value === "" ? "" : formatNumber(parsedValue);
    setDownPaymentAmount(formattedValue);
  };
  const handlePaymentCreation = () => {
    if (!paymentMethod) {
      Swal.fire({
        icon: "error",
        title: "Error",
        timer: 3e3,
        text: "Mohon pilih Metode Pembayaran."
      });
      return;
    }
    createPayment();
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Dialog, { open: openPaymentBookingDialog, onOpenChange: setOpenPaymentBookingDialog, children: /* @__PURE__ */ jsxs(DialogContent, { className: "p-0 sm:max-w-[500px]", children: [
    /* @__PURE__ */ jsx(DialogHeader, { className: "p-8", children: /* @__PURE__ */ jsx(DialogTitle, { children: "Pilih Pembayaran" }) }),
    /* @__PURE__ */ jsxs("div", { className: "px-8 py-5 pt-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 mb-5", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: paymentType === "full" ? "default" : "outline",
            className: "w-full mt-1",
            disabled: isPaymentPaidfully,
            onClick: () => setPaymentType("full"),
            children: [
              /* @__PURE__ */ jsx(IconCurrencyDollar, { className: "mr-2 w-4" }),
              " Full (",
              formatRupiah(remaining_payment),
              ")"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: paymentType === "down_payment" ? "default" : "outline",
            className: "w-full mt-1",
            disabled: isPaymentExist,
            onClick: () => setPaymentType("down_payment"),
            children: [
              /* @__PURE__ */ jsx(IconMoneybag, { className: "mr-2 w-4" }),
              " Uang Muka"
            ]
          }
        )
      ] }),
      paymentType === "down_payment" && /* @__PURE__ */ jsxs("div", { className: "my-5", children: [
        /* @__PURE__ */ jsx(Label, { children: "Jumlah Uang Muka" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "text",
            className: "w-full mt-1",
            value: downPaymentAmount,
            onChange: handleDownPaymentChange,
            placeholder: `Minimal ${formatRupiah(minimumDownPayment)}`
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Label, { children: "Metode Pembayaran" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 mb-5", children: ["online", "offline"].map((method) => /* @__PURE__ */ jsxs(
        Button,
        {
          variant: paymentMethod === method ? "default" : "outline",
          className: "w-full mt-1",
          onClick: () => setPaymentMethod(method),
          children: [
            method === "online" ? "Online" : null,
            method === "offline" ? "Offline" : null
          ]
        },
        method
      )) }),
      /* @__PURE__ */ jsx(Button, { variant: "default", className: "w-full mt-3", onClick: handlePaymentCreation, children: loading ? "Memproses..." : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(IconCreditCard, { className: "mr-2 w-4" }),
        " Proses Pembayaran"
      ] }) })
    ] })
  ] }) }) });
}
export {
  BookingCreatePayment as default
};
