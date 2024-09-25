import { a as jsx, j as jsxs } from "../ssr.js";
import "react";
import { b as formatDateTime, d as formatRupiah } from "./utils-fa5dc5b8.js";
import { I as Image } from "./image-50b4b38d.js";
import { Link } from "@inertiajs/react";
import { B as Badge } from "./badge-68f4f9eb.js";
import { b as buttonVariants } from "./button-ef56bd5e.js";
import { C as Card } from "./card-f706282b.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "clsx";
import "tailwind-merge";
import "framer-motion";
import "react-lazy-load";
import "class-variance-authority";
import "@radix-ui/react-slot";
const BookingCard = ({ booking }) => {
  var _a, _b;
  return /* @__PURE__ */ jsx(Card, { className: "mb-4", children: /* @__PURE__ */ jsxs("div", { className: "mb-4 overflow-hidden rounded-md", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between border-b p-3", children: /* @__PURE__ */ jsxs("div", { className: "space-x-2", children: [
      /* @__PURE__ */ jsx(Badge, { children: (_b = (_a = booking.package) == null ? void 0 : _a.category) == null ? void 0 : _b.name.toUpperCase() }),
      /* @__PURE__ */ jsx("span", { className: "text-xs", children: formatDateTime(booking.created_at) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start p-4 md:flex-row", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 w-full overflow-hidden border rounded-md md:mb-0 md:mr-4 md:w-40 lg:w-40", children: /* @__PURE__ */ jsx(
        Image,
        {
          skeletonHeight: "24",
          className: "h-full w-full object-cover",
          src: `/images/${booking.package.image}`
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-md mb-1 font-semibold", children: [
          "#",
          booking.invoice,
          " ",
          booking.package.name
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mb-1 text-sm", children: [
          booking.qty,
          " x ",
          formatRupiah(booking.package.price)
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
          "Total: ",
          formatRupiah(parseInt(booking.amount))
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
          "Sisa Pembayaran: ",
          formatRupiah(parseInt(booking.remaining_payment))
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        Link,
        {
          className: buttonVariants({ variant: "default" }),
          href: route("bookings.show", booking.invoice),
          children: "Detail & Pembayaran"
        }
      ) })
    ] })
  ] }) });
};
const BookingCard$1 = BookingCard;
export {
  BookingCard$1 as default
};
