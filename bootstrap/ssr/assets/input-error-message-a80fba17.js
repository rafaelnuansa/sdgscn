import { a as jsx } from "../ssr.js";
import { c as cn } from "./utils-fa5dc5b8.js";
function InputErrorMessage({ className, message, ...props }) {
  return /* @__PURE__ */ jsx("p", { ...props, className: cn("mt-1 text-sm text-destructive first-letter:uppercase", className), children: message });
}
export {
  InputErrorMessage as I
};
