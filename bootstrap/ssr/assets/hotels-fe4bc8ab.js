import { a as jsx, F as Fragment, j as jsxs } from "../ssr.js";
import { I as Image } from "./image-facc74b1.js";
import { IconStar } from "@irsyadadl/paranoid";
import "react";
import { C as Carousel, a as CarouselContent, b as CarouselItem, c as CarouselPrevious, d as CarouselNext } from "./carousel-95a5b32c.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "framer-motion";
import "react-lazy-load";
import "./utils-38e41470.js";
import "clsx";
import "tailwind-merge";
import "embla-carousel-react";
import "lucide-react";
import "./button-c70c5ef8.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
function HotelsSection({ paket }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "bg-gray-200 dark:bg-gray-900", children: /* @__PURE__ */ jsx("div", { className: "py-6 container", children: /* @__PURE__ */ jsx("div", { className: "accommodation", children: paket.hotels.map((hotel, index) => /* @__PURE__ */ jsxs("div", { className: `card mb-4 p-4 flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`, children: [
    /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/3 mb-4 md:mb-0", children: /* @__PURE__ */ jsxs(Carousel, { className: "w-full", plugins: [], children: [
      /* @__PURE__ */ jsxs(CarouselContent, { children: [
        /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(
          Image,
          {
            src: `/images/${hotel.image}`,
            alt: hotel.image,
            className: "h-80 w-full shadow-lg rounded-md object-cover",
            objectFit: "cover"
          }
        ) }),
        hotel.images.map((image, index2) => /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(
          Image,
          {
            src: `/storage/images/${image.image}`,
            alt: image.image,
            className: "h-80 w-full shadow-lg rounded-md object-cover",
            objectFit: "cover"
          }
        ) }, index2))
      ] }),
      /* @__PURE__ */ jsx(CarouselPrevious, {}),
      /* @__PURE__ */ jsx(CarouselNext, {})
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "w-full bg-card p-5 rounded-lg shadow-lg md:mx-4 md:w-2/3", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2", children: hotel.name }),
      /* @__PURE__ */ jsx("p", { className: "mb-2 text-md font-semibold", children: hotel.location }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center mb-2", children: [...Array(5)].map((_, index2) => /* @__PURE__ */ jsx(IconStar, { className: index2 < hotel.stars ? "fill-current text-yellow-500 w-4 h-4" : "text-gray-300 w-4 h-4" }, index2)) }),
      /* @__PURE__ */ jsx("div", { className: "mb-2 text-md", children: hotel.description })
    ] })
  ] }, hotel.id)) }) }) }) });
}
export {
  HotelsSection as default
};
