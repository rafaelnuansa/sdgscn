import { a as jsx, j as jsxs } from "../ssr.js";
import "react";
import { I as Image } from "./image-0458d8cd.js";
import "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "framer-motion";
import "react-lazy-load";
import "./utils-186374bb.js";
import "clsx";
import "tailwind-merge";
const ExpertCard = ({ expert }) => {
  return /* @__PURE__ */ jsx("a", { target: "_blank", href: expert.link, className: "block", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg  bg-white  overflow-hidden flex flex-col h-full  duration-300", children: [
    /* @__PURE__ */ jsx("div", { className: "relative flex justify-center bg-white p-4", children: /* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-full overflow-hidden border-4 border-gray-100 shadow-md", children: /* @__PURE__ */ jsx(
      Image,
      {
        skeletonHeight: "40",
        className: "object-cover w-full h-full",
        src: `/storage/experts/${expert.image}`
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-gray-800", children: expert.name }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mt-2", children: expert.description || "" })
    ] })
  ] }) }, expert.id);
};
const ExpertCard$1 = ExpertCard;
export {
  ExpertCard$1 as default
};
