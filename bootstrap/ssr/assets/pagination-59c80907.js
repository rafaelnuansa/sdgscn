import { a as jsx } from "../ssr.js";
import "react";
import { Link } from "@inertiajs/react";
import { b as buttonVariants } from "./button-ef56bd5e.js";
function Pagination({ links }) {
  function getVariantName(active) {
    if (active) {
      return "default";
    } else {
      return "outline";
    }
  }
  return links.length > 3 && /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap gap-1", children: links.map(
    (link, key) => link.url === null ? /* @__PURE__ */ jsx(Link, { className: buttonVariants({ variant: "outline" }), dangerouslySetInnerHTML: { __html: link.label } }, key) : /* @__PURE__ */ jsx(
      Link,
      {
        className: buttonVariants({ variant: getVariantName(link.active) }),
        href: link.url,
        dangerouslySetInnerHTML: { __html: link.label }
      },
      key
    )
  ) }) });
}
export {
  Pagination as P
};
