import { a as jsx, j as jsxs } from "../ssr.js";
import "react";
import "clsx";
import { I as Image } from "./image-50b4b38d.js";
import { Link } from "@inertiajs/react";
import { B as Badge } from "./badge-68f4f9eb.js";
import { IconStar } from "@irsyadadl/paranoid";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "framer-motion";
import "react-lazy-load";
import "./utils-fa5dc5b8.js";
import "tailwind-merge";
import "class-variance-authority";
const ExpertCard = ({ expert }) => {
  return /* @__PURE__ */ jsx(Link, { href: expert.link, className: "block", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg  bg-white  overflow-hidden flex flex-col h-full  duration-300", children: [
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
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-2", children: expert.title || "Expert" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mt-2", children: expert.description || "" }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4", children: expert.rating && /* @__PURE__ */ jsxs(Badge, { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(IconStar, { className: "w-4 h-4 text-yellow-500" }),
        expert.rating
      ] }) })
    ] })
  ] }) }, expert.id);
};
const ExpertCard$1 = ExpertCard;
export {
  ExpertCard$1 as default
};
