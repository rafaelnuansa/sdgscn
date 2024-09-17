import { a as jsx } from "../ssr.js";
import "clsx";
import { I as Image } from "./image-facc74b1.js";
import { usePage } from "@inertiajs/react";
function LogoDark({ className, ...props }) {
  const { web_setting } = usePage().props;
  return /* @__PURE__ */ jsx(Image, { src: `/storage/images/${web_setting == null ? void 0 : web_setting.website_logo_dark}`, className: "max-w-[180px] mr-2" });
}
export {
  LogoDark as L
};
