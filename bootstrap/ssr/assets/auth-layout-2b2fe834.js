import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { F as FlashMessage } from "./logo-8ae88bc6.js";
import { N as Navigation, F as Footer } from "./footer-67e2bd2e.js";
function AuthLayout({ children }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsx(Navigation, {}),
      /* @__PURE__ */ jsx(FlashMessage, {}),
      children
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  AuthLayout as A
};
