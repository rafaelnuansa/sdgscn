import { a as jsx, F as Fragment, j as jsxs } from "../ssr.js";
import "react";
import { ChevronRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import { B as Breadcrumb$1, a as BreadcrumbList, b as BreadcrumbItem, c as BreadcrumbLink } from "./breadcrumb-a34574f9.js";
function Breadcrumb({ links }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Breadcrumb$1, { className: "hidden md:flex", children: /* @__PURE__ */ jsx(BreadcrumbList, { children: links.map((link, index) => /* @__PURE__ */ jsxs(BreadcrumbItem, { children: [
    link.url ? /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsx(
      Link,
      {
        href: link.url,
        className: "text-sm text-gray-500 dark:text-gray-300 hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:focus:text-blue-500",
        children: link.label
      }
    ) }) : /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500 dark:text-gray-300 focus:text-blue-600 focus:outline-none dark:focus:text-blue-500", children: link.label }),
    index !== links.length - 1 && /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 dark:dark:text-gray-300" })
  ] }, index)) }) }) });
}
export {
  Breadcrumb as B
};
