import { j as jsxs, a as jsx } from "../ssr.js";
import "react";
import Slider from "react-slick";
import { IconArrowRight, IconArrowLeft } from "@irsyadadl/paranoid";
import { Link } from "@inertiajs/react";
import { b as buttonVariants } from "./button-ef56bd5e.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-fa5dc5b8.js";
import "clsx";
import "tailwind-merge";
const slick = "";
const slickTheme = "";
function Hero({ slides }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3e3,
    nextArrow: /* @__PURE__ */ jsx(NextArrow, {}),
    prevArrow: /* @__PURE__ */ jsx(PrevArrow, {})
  };
  function NextArrow(props) {
    const { onClick } = props;
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute right-0 z-10 p-3 cursor-pointer bg-white/40 rounded-full shadow-md text-gray-800",
        style: { top: "50%", right: "2%", transform: "translateY(-50%)" },
        onClick,
        children: /* @__PURE__ */ jsx(IconArrowRight, { size: 24 })
      }
    );
  }
  function PrevArrow(props) {
    const { onClick } = props;
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute left-0 z-10 p-3 cursor-pointer bg-white/40 rounded-full shadow-md text-gray-800",
        style: { top: "50%", left: "2%", transform: "translateY(-50%)" },
        onClick,
        children: /* @__PURE__ */ jsx(IconArrowLeft, { size: 24 })
      }
    );
  }
  if (slides.length === 1) {
    const slide = slides[0];
    return /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden h-[500px]", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: `/storage/sliders/${slide.image}`,
          alt: slide.title || "Slide",
          className: "absolute inset-0 w-full h-full object-cover"
        }
      ),
      (slide.title || slide.description || slide.url) && /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 text-white z-20 bg-black/50 p-4 rounded-lg max-w-md", children: [
        slide.title && /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: slide.title }),
        slide.description && /* @__PURE__ */ jsx("p", { className: "mt-2", children: slide.description }),
        slide.url && /* @__PURE__ */ jsx(Link, { href: slide.url, className: buttonVariants({ variant: "primary", className: "mt-4" }), children: "Read More" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsx(Slider, { ...settings, children: slides.map((slide, index) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative overflow-hidden h-[500px]",
      children: [
        /* @__PURE__ */ jsx("div", { className: "relative w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: `/storage/sliders/${slide.image}`,
            alt: `Slide ${index + 1}`,
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ) }),
        (slide.title || slide.description || slide.url) && /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 text-white z-20 bg-black/50 p-4 rounded-lg max-w-md", children: [
          slide.title && /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: slide.title }),
          slide.description && /* @__PURE__ */ jsx("p", { className: "mt-2", children: slide.description }),
          slide.url && /* @__PURE__ */ jsx(Link, { href: slide.url, className: buttonVariants({ variant: "primary", className: "mt-4" }), children: "Read More" })
        ] })
      ]
    },
    index
  )) }) });
}
export {
  Hero as default
};
