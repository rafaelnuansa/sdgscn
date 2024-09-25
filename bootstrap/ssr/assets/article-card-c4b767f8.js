import { a as jsx, j as jsxs } from "../ssr.js";
import "react";
import "clsx";
import { I as Image } from "./image-0458d8cd.js";
import { Link } from "@inertiajs/react";
import "./badge-520453d1.js";
import "@irsyadadl/paranoid";
import moment from "moment";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "framer-motion";
import "react-lazy-load";
import "./utils-186374bb.js";
import "tailwind-merge";
import "class-variance-authority";
const ArticleCard = ({ article }) => {
  return /* @__PURE__ */ jsx(Link, { href: route("articles.show", article.slug), children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg border bg-white shadow overflow-hidden flex flex-col h-full", children: [
    /* @__PURE__ */ jsx("div", { className: "relative bg-white overflow-hidden", children: /* @__PURE__ */ jsx(
      Image,
      {
        skeletonHeight: "40",
        className: "aspect-[16/9] w-full object-cover",
        src: `/storage/articles/${article.image}`
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-300", children: moment(article.created_at).format("d MMMM YYYY") }),
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold mb-3", children: article.title })
    ] })
  ] }) }, article.id);
};
const ArticleCard$1 = ArticleCard;
export {
  ArticleCard$1 as default
};
