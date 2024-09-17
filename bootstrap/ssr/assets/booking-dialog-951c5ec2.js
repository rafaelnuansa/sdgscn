import { a as jsx, j as jsxs } from "../ssr.js";
import * as React from "react";
import { useState, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { I as Input } from "./input-e2af5f4c.js";
import { L as Label } from "./label-3e67e23b.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle } from "./dialog-d3517b83.js";
import { Drawer } from "vaul";
import { d as cn, c as formatRupiah } from "./utils-38e41470.js";
import { B as Button } from "./button-c70c5ef8.js";
import { u as useSwal } from "./useSwal-486594a3.js";
import { DialogDescription } from "@radix-ui/react-dialog";
import { IconBag, IconCheck } from "@irsyadadl/paranoid";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "@radix-ui/react-label";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "sweetalert";
Drawer.Trigger;
const DrawerPortal = Drawer.Portal;
Drawer.Close;
const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80", className),
    ...props
  }
));
DrawerOverlay.displayName = Drawer.Overlay.displayName;
const DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DrawerPortal, { children: [
  /* @__PURE__ */ jsx(DrawerOverlay, {}),
  /* @__PURE__ */ jsxs(
    Drawer.Content,
    {
      ref,
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        children
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DrawerTitle.displayName = Drawer.Title.displayName;
const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DrawerDescription.displayName = Drawer.Description.displayName;
function BookingDialog({ paket }) {
  const { ask } = useSwal();
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(paket.price);
  const [open, setOpen] = useState(false);
  useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    setTotalPrice(qty * paket.price);
  }, [qty, paket.price]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (qty < 1) {
      toast.error("Quantity must be at least 1");
      return;
    }
    ask({
      url: route("packages.book", { slug: paket.slug }),
      message: "Apakah kamu yakin ingin melakukan booking paket ini?",
      method: "post",
      data: new FormData(e.target)
    });
  };
  const handleQtyChange = (e) => {
    setQty(Math.max(1, parseInt(e.target.value, 10)));
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "default",
        onClick: () => setOpen(true),
        className: "w-full ",
        children: [
          /* @__PURE__ */ jsx(IconBag, { className: "me-2" }),
          " Booking Now"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "Booking" }),
        /* @__PURE__ */ jsx(DialogDescription, { children: "Pastikan Sebelum Pembayaran Melakukan Konfirmasi pada Administrator" })
      ] }),
      /* @__PURE__ */ jsxs("form", { method: "POST", onSubmit: handleSubmit, className: "space-y-6 px-4", children: [
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
        /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(Button, { variant: "default", type: "submit", className: "flex w-full items-center", children: [
          /* @__PURE__ */ jsx(IconCheck, { className: "mr-2 w-3" }),
          " Booking"
        ] }) })
      ] })
    ] })
  ] });
}
export {
  BookingDialog as default
};
