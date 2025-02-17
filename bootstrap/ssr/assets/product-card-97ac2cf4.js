import { j as jsxs, a as jsx } from "../ssr.js";
import "react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from "./card-d70f34a0.js";
import { d as formatRupiah } from "./utils-186374bb.js";
import { I as Image } from "./image-0458d8cd.js";
import { B as Badge } from "./badge-520453d1.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "clsx";
import "tailwind-merge";
import "framer-motion";
import "react-lazy-load";
import "class-variance-authority";
const ProductCard = ({ product }) => {
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: product.name }),
      /* @__PURE__ */ jsxs(CardDescription, { children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3", children: product.vendor.name }),
        /* @__PURE__ */ jsx(Badge, { children: formatRupiah(product.price) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
      Image,
      {
        className: "aspect-[16/9] border w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]",
        src: `${product.image}`
      }
    ) }),
    /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between gap-2" }) })
  ] }, product.id);
};
export {
  ProductCard as default
};
