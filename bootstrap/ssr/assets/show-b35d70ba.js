import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { usePage, Head } from "@inertiajs/react";
import { C as Container } from "./container-a7123293.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent } from "./card-f706282b.js";
import { A as AppLayout } from "./app-layout-dd331cc4.js";
import { V as Video } from "./video-c5f2703e.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./utils-fa5dc5b8.js";
import "clsx";
import "tailwind-merge";
import "./logo-70150b74.js";
import "sweetalert2";
import "./image-50b4b38d.js";
import "framer-motion";
import "react-lazy-load";
import "react-floating-whatsapp";
import "./footer-775d67cf.js";
import "./dropdown-menu-fef2e637.js";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "./button-ef56bd5e.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./sheet-8bf1694f.js";
import "@radix-ui/react-dialog";
import "@irsyadadl/paranoid";
import "./theme-provider-b3598db8.js";
import "./lodash-d8bc076d.js";
import "./command-3c1526d0.js";
import "cmdk";
import "./dialog-bc7d8a74.js";
import "axios";
import "usehooks-ts";
import "./avatar-f336b458.js";
import "@radix-ui/react-avatar";
import "./label-22b65785.js";
import "@radix-ui/react-label";
import "./logo-dark-fd798013.js";
import "./input-05b98463.js";
import "./checkbox-75ff73a5.js";
import "@radix-ui/react-checkbox";
import "./phone-input-bee968be.js";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-0590da32.js";
import "@radix-ui/react-popover";
import "./scroll-area-db838748.js";
import "@radix-ui/react-scroll-area";
import "sonner";
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
