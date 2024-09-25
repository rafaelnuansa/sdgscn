import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useState } from "react";
import { usePage, Head } from "@inertiajs/react";
import { C as Container } from "./container-a7123293.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent } from "./card-d70f34a0.js";
import { A as AppLayout } from "./app-layout-ec137134.js";
import { I as Image } from "./image-0458d8cd.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./utils-186374bb.js";
import "clsx";
import "tailwind-merge";
import "./logo-360047b4.js";
import "sweetalert2";
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
import "react-lazy-load";
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
import "framer-motion";
function GalleryShow() {
  const { album, galleries } = usePage().props;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };
  const closeLightbox = () => {
    setSelectedImage(null);
    setLightboxOpen(false);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: album == null ? void 0 : album.name }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: "py-20", children: /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: album == null ? void 0 : album.name }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6", children: galleries.map((gallery) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative overflow-hidden rounded-lg shadow-md cursor-pointer",
          onClick: () => openLightbox(gallery.image),
          style: { aspectRatio: "1/1" },
          children: [
            /* @__PURE__ */ jsx(
              Image,
              {
                src: `/storage/albums/${gallery.image}`,
                alt: gallery.image,
                className: "h-full w-full object-cover absolute inset-0",
                style: { objectPosition: "center" }
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity hover:opacity-100", children: /* @__PURE__ */ jsx("p", { className: "text-white font-bold", children: "Click to View" }) })
          ]
        },
        gallery.id
      )) }) })
    ] }) }) }),
    lightboxOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50", onClick: closeLightbox, children: /* @__PURE__ */ jsxs("div", { className: "max-w-screen-lg p-4 overflow-auto bg-background", children: [
      /* @__PURE__ */ jsx("button", { className: "absolute top-0 right-0 m-4 text-2xl font-bold text-gray-700 hover:text-gray-900", onClick: closeLightbox, children: "×" }),
      /* @__PURE__ */ jsx(Image, { src: `/storage/albums/${selectedImage}`, alt: selectedImage, className: "w-full rounded h-auto max-h-screen" })
    ] }) })
  ] });
}
GalleryShow.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  GalleryShow as default
};
