import { a as jsx, j as jsxs } from "../ssr.js";
import { usePage, Link } from "@inertiajs/react";
import { C as Card } from "./card-d70f34a0.js";
import "clsx";
import { I as Image } from "./image-0458d8cd.js";
function LogoDark({ className, ...props }) {
  const { web_setting } = usePage().props;
  return /* @__PURE__ */ jsx(Image, { src: `/storage/images/${web_setting == null ? void 0 : web_setting.website_logo_dark}`, className: "max-w-[180px] mr-2" });
}
function GuestLayout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(LogoDark, { className: "h-10 w-10" }) }) }),
    /* @__PURE__ */ jsx(Card, { className: "mt-6 w-full max-w-md p-6", children })
  ] });
}
export {
  GuestLayout as G
};
