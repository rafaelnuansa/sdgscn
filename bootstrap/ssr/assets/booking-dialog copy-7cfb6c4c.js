import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useState, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { I as Input } from "./input-e2af5f4c.js";
import { L as Label } from "./label-3e67e23b.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle } from "./dialog-d3517b83.js";
import { B as Button } from "./button-c70c5ef8.js";
import { c as formatRupiah } from "./utils-38e41470.js";
import { u as useSwal } from "./useSwal-486594a3.js";
import { DialogDescription } from "@radix-ui/react-dialog";
import { IconBag, IconCheck, IconX } from "@irsyadadl/paranoid";
import axios from "axios";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "@radix-ui/react-label";
import "class-variance-authority";
import "lucide-react";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
import "sweetalert";
function BookingDialog({ paket }) {
  const { ask, toast } = useSwal();
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(paket.price);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    setTotalPrice(qty * paket.price);
  }, [qty, paket.price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (qty < 1) {
      toast.error("Quantity must be at least 1");
      return;
    }
    setIsLoading(true);
    try {
      const formData = new FormData(e.target);
      const response = await axios.post(route("packages.book", { slug: paket.slug }), formData);
      if (response.data.success) {
        toast.success("Booking successful!");
        setOpen(false);
      } else {
        throw new Error(response.data.message || "Booking failed");
      }
    } catch (error2) {
      if (error2.response && error2.response.status === 400) {
        setError("Existing booking: You already have a pending or approved booking for this package.");
      } else {
        setError(error2.message || "An error occurred while booking");
      }
    } finally {
      setIsLoading(false);
    }
  };
  const handleQtyChange = (e) => {
    setQty(Math.max(1, parseInt(e.target.value, 10)));
  };
  const handleCloseErrorDialog = () => {
    setError(null);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "default", onClick: () => setOpen(true), className: "w-full", children: [
        /* @__PURE__ */ jsx(IconBag, {}),
        " Booking Now"
      ] }) }),
      /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [
        /* @__PURE__ */ jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsx(DialogTitle, { children: "Booking" }),
          /* @__PURE__ */ jsx(DialogDescription, { children: "Pastikan Sebelum Pembayaran Melakukan Konfirmasi pada Administrator" })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6 px-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "qty", children: "Jumlah Peserta" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "number",
                name: "qty",
                id: "qty",
                value: qty,
                onChange: handleQtyChange,
                min: "1",
                className: "mt-1 block w-full"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Grand Total" }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 text-lg font-bold", children: formatRupiah(totalPrice) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(Button, { variant: "default", type: "submit", className: "flex w-full items-center", disabled: isLoading, children: [
            isLoading ? "Loading..." : /* @__PURE__ */ jsx(IconCheck, { className: "mr-2 w-3" }),
            " Booking"
          ] }) })
        ] })
      ] })
    ] }),
    error && /* @__PURE__ */ jsxs(Dialog, { open: true, onOpenChange: handleCloseErrorDialog, children: [
      /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx("div", { className: "hidden" }) }),
      /* @__PURE__ */ jsxs(DialogContent, { children: [
        /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Error" }) }),
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-red-600", children: error }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-end mt-4", children: /* @__PURE__ */ jsxs(Button, { variant: "default", onClick: handleCloseErrorDialog, children: [
            /* @__PURE__ */ jsx(IconX, { className: "mr-2 w-3" }),
            " Close"
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  BookingDialog as default
};
