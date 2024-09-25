import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { F as FlashMessage } from "./logo-360047b4.js";
import { N as Navigation, F as Footer } from "./footer-5dc05f52.js";
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
