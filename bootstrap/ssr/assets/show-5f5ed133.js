import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useState } from "react";
import { usePage, Head } from "@inertiajs/react";
import { C as Container } from "./container-a7123293.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent } from "./card-f706282b.js";
import { A as AppLayout } from "./app-layout-dd331cc4.js";
import { I as Image } from "./image-50b4b38d.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./utils-fa5dc5b8.js";
import "clsx";
import "tailwind-merge";
import "./logo-70150b74.js";
import "sweetalert2";
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
import "framer-motion";
import "react-lazy-load";
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
