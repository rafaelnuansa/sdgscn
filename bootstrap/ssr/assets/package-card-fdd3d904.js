import { a as jsx, j as jsxs } from "../ssr.js";
import "react";
import { d as formatRupiah } from "./utils-186374bb.js";
import { I as Image } from "./image-0458d8cd.js";
import { Link } from "@inertiajs/react";
import { B as Badge } from "./badge-520453d1.js";
import "@irsyadadl/paranoid";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "clsx";
import "tailwind-merge";
import "framer-motion";
import "react-lazy-load";
import "class-variance-authority";
const PackageCard = ({ paket }) => {
  return /* @__PURE__ */ jsx(Link, { href: route("packages.show", paket.slug), children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl border overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsx(
      Image,
      {
        skeletonHeight: "40",
        className: "aspect-[16/9] w-full object-cover",
        src: `/images/${paket.image}`
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsx(Badge, { variant: "default", className: "rounded mb-2", children: paket.category.name }),
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: paket.name }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: paket.description }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-3", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-x-1", children: /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "rounded", children: [
          paket.day,
          " Hari"
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-gray-600 dark:text-gray-300", children: formatRupiah(paket.price) })
      ] })
    ] })
  ] }) }, paket.id);
};
export {
  PackageCard as default
};
