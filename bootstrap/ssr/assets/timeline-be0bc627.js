import { a as jsx, F as Fragment, j as jsxs } from "../ssr.js";
import { IconDateTime } from "@irsyadadl/paranoid";
import "react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
const Timeline = ({ children }) => {
  return /* @__PURE__ */ jsx("div", { className: "space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent", children });
};
const TimelineItem = ({ day, description, items }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:flex items-center md:space-x-4 mb-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(IconDateTime, { className: "mr-2" }),
        /* @__PURE__ */ jsx("time", { className: "font-sans font-bold italic text-xl  md:w-28", children: day })
      ] }),
      /* @__PURE__ */ jsx("div", { className: " ml-14", children: /* @__PURE__ */ jsx("h2", { className: "font-bold", children: description }) })
    ] }),
    items.map((item, idx) => /* @__PURE__ */ jsx("div", { className: "bg-gray-200 text-sm mb-2 dark:bg-slate-800 dark:text-white p-4 rounded border border-slate-200 dark:border-slate-900 text-gray-800 shadow ml-14 md:ml-44", children: item.description }, `${item.id}_${idx}`))
  ] }) });
};
export {
  Timeline,
  TimelineItem
};
