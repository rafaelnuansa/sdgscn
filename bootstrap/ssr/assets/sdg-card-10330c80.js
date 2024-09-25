import { a as jsx, j as jsxs } from "../ssr.js";
import "react";
import "clsx";
import { I as Image } from "./image-50b4b38d.js";
import { Link } from "@inertiajs/react";
import "./badge-68f4f9eb.js";
import "@irsyadadl/paranoid";
import moment from "moment";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "framer-motion";
import "react-lazy-load";
import "./utils-fa5dc5b8.js";
import "tailwind-merge";
import "class-variance-authority";
const SdgCard = ({ sdg }) => {
  return /* @__PURE__ */ jsx(Link, { href: route("sdgs.show", sdg.slug), children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg border bg-white shadow overflow-hidden flex flex-col h-full", children: [
    /* @__PURE__ */ jsx("div", { className: "relative bg-white overflow-hidden", children: /* @__PURE__ */ jsx(
      Image,
      {
        skeletonHeight: "40",
        className: "aspect-[16/9] w-full object-cover",
        src: `/storage/sdgs/${sdg.image}`
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-300", children: moment(sdg.created_at).format("d MMMM YYYY") }),
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold mb-3", children: sdg.name })
    ] })
  ] }) }, sdg.id);
};
const SdgCard$1 = SdgCard;
export {
  SdgCard$1 as default
};
