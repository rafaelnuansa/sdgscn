import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { usePage, Head, Link } from "@inertiajs/react";
import { C as Container } from "./container-a7123293.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent } from "./card-d70f34a0.js";
import { A as AppLayout } from "./app-layout-ec137134.js";
import { V as Video } from "./video-629890ac.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./utils-186374bb.js";
import "clsx";
import "tailwind-merge";
import "./logo-360047b4.js";
import "sweetalert2";
import "./image-0458d8cd.js";
import "framer-motion";
import "react-lazy-load";
import "react-floating-whatsapp";
import "./footer-5dc05f52.js";
import "./dropdown-menu-c2181ec7.js";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "./button-e2a7e3d3.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./sheet-6d41fe2c.js";
import "@radix-ui/react-dialog";
import "@irsyadadl/paranoid";
import "./theme-provider-b3598db8.js";
import "./lodash-d8bc076d.js";
import "./command-1156986d.js";
import "cmdk";
import "./dialog-20065758.js";
import "axios";
import "usehooks-ts";
import "./avatar-fff64a18.js";
import "@radix-ui/react-avatar";
import "./label-4839c48b.js";
import "@radix-ui/react-label";
import "./input-6fbce247.js";
import "./checkbox-b75be4ac.js";
import "@radix-ui/react-checkbox";
import "./phone-input-d483b92f.js";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-7b9a4e5c.js";
import "@radix-ui/react-popover";
import "./scroll-area-4a6b9ba2.js";
import "@radix-ui/react-scroll-area";
import "sonner";
import "react-player";
function GalleryVideoIndex() {
  const { videos } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Galleries" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: "py-20", children: /* @__PURE__ */ jsxs(Card, { className: "border-0 shdow-none", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Videos" }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-3", children: videos.data.map((video) => /* @__PURE__ */ jsxs(
        Link,
        {
          href: route("galleries.videos.show", video.slug),
          className: "relative overflow-hidden rounded-lg shadow-md",
          children: [
            /* @__PURE__ */ jsx(
              Video,
              {
                src: `/storage/videos/${video.video}`,
                alt: video.title,
                className: "w-full object-cover"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity hover:opacity-100", children: /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-white", children: video.name }) })
          ]
        },
        video.id
      )) }) })
    ] }) }) })
  ] });
}
GalleryVideoIndex.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  GalleryVideoIndex as default
};
