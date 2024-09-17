import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { usePage, Head } from "@inertiajs/react";
import { C as Container } from "./container-a7123293.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent } from "./card-43a93659.js";
import { A as AppLayout } from "./app-layout-a22821eb.js";
import { V as Video } from "./video-e9876707.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./utils-38e41470.js";
import "clsx";
import "tailwind-merge";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "./image-facc74b1.js";
import "framer-motion";
import "react-lazy-load";
import "react-floating-whatsapp";
import "./footer-67e2bd2e.js";
import "./dropdown-menu-4ccafc02.js";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "./button-c70c5ef8.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./sheet-4df565dd.js";
import "@radix-ui/react-dialog";
import "@irsyadadl/paranoid";
import "./theme-provider-b3598db8.js";
import "./lodash-d8bc076d.js";
import "./command-d3e20674.js";
import "cmdk";
import "./dialog-d3517b83.js";
import "axios";
import "usehooks-ts";
import "./avatar-d5a71c43.js";
import "@radix-ui/react-avatar";
import "./label-3e67e23b.js";
import "@radix-ui/react-label";
import "./logo-dark-11c95af7.js";
import "./login-nav-427a7598.js";
import "./input-e2af5f4c.js";
import "./input-error-5d71eba3.js";
import "./checkbox-da69a68e.js";
import "@radix-ui/react-checkbox";
import "./phone-input-9795e577.js";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-6a1d9996.js";
import "@radix-ui/react-popover";
import "./scroll-area-9ef3b685.js";
import "@radix-ui/react-scroll-area";
import "sonner";
import "./login-register-c2778968.js";
import "react-player";
function GalleryShow() {
  const { video } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: video == null ? void 0 : video.title }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: "py-20", children: /* @__PURE__ */ jsxs(Card, { className: "border-0", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: video == null ? void 0 : video.title }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
        Video,
        {
          src: `/storage/videos/${video.video}`,
          alt: video.title,
          className: "w-full rounded-lg	"
        }
      ) })
    ] }) }) })
  ] });
}
GalleryShow.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  GalleryShow as default
};
