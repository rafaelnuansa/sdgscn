import { a as jsx } from "../ssr.js";
function Container({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children });
}
export {
  Container as C
};
