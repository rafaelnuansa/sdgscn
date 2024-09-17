import { j as jsxs, a as jsx } from "../ssr.js";
import { Link } from "@inertiajs/react";
import { C as Card } from "./card-43a93659.js";
import { L as LogoDark } from "./logo-dark-11c95af7.js";
function GuestLayout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(LogoDark, { className: "h-10 w-10" }) }) }),
    /* @__PURE__ */ jsx(Card, { className: "mt-6 w-full max-w-md p-6", children })
  ] });
}
export {
  GuestLayout as G
};
