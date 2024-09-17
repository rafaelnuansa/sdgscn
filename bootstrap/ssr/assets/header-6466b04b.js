import { a as jsx, j as jsxs } from "../ssr.js";
import { C as Container } from "./container-a7123293.js";
function Header({ title, subtitle }) {
  return /* @__PURE__ */ jsx("div", { className: "bg-background py-20", children: /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-2 text-3xl font-bold tracking-tight text-foreground", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-lg leading-8 text-muted-foreground", children: subtitle })
  ] }) });
}
export {
  Header as H
};
