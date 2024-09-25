import { a as jsx, j as jsxs } from "../ssr.js";
import "react";
import { d as formatRupiah } from "./utils-fa5dc5b8.js";
import { I as Image } from "./image-50b4b38d.js";
import { Link } from "@inertiajs/react";
import { B as Badge } from "./badge-68f4f9eb.js";
import "@irsyadadl/paranoid";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "clsx";
import "tailwind-merge";
import "framer-motion";
import "react-lazy-load";
import "class-variance-authority";
const OverlayPackageCard = ({ paket }) => {
  return /* @__PURE__ */ jsx(Link, { href: route("packages.show", paket.slug), children: /* @__PURE__ */ jsx("div", { className: "relative rounded-xl border overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      Image,
      {
        skeletonHeight: "40",
        className: "aspect-[16/9] w-full object-cover",
        src: `/images/${paket.image}`
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs("div", { className: "text-white text-center", children: [
      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "rounded mb-2 bg-white bg-opacity-20 text-white", children: paket.category.name }),
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: paket.name }),
      /* @__PURE__ */ jsx("p", { className: "text-xs", children: paket.description }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-3", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-x-1", children: /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "rounded bg-white bg-opacity-20 text-white", children: [
          paket.day,
          " Hari"
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-bold", children: formatRupiah(paket.price) })
      ] })
    ] }) })
  ] }) }) }, paket.id);
};
export {
  OverlayPackageCard as default
};
