import { a as jsx, j as jsxs } from "../ssr.js";
import "react";
import Slider from "react-slick";
import { IconArrowRight, IconArrowLeft } from "@irsyadadl/paranoid";
import { I as Image } from "./image-facc74b1.js";
import { Link } from "@inertiajs/react";
import { b as buttonVariants } from "./button-c70c5ef8.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "framer-motion";
import "react-lazy-load";
import "./utils-38e41470.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
const slick = "";
const slickTheme = "";
function Hero({ slides }) {
  const settings = {
    dots: true,
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
    return /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        Image,
        {
          src: `/storage/sliders/${slide.image}`,
          alt: "Slide 1",
          className: "w-full h-full object-cover"
        }
      ),
      slide.title || slide.description || slide.url ? /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 text-white z-20 bg-black/50 p-4 rounded-lg", children: [
        slide.title && /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: slide.title }),
        slide.description && /* @__PURE__ */ jsx("p", { className: "mt-2", children: slide.description }),
        slide.url && /* @__PURE__ */ jsx(Link, { href: slide.url, className: buttonVariants({ variant: "primary", className: "mt-4" }), children: "Read More" })
      ] }) : null
    ] }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsx(Slider, { ...settings, children: slides.map((slide, index) => /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      Image,
      {
        src: `/storage/sliders/${slide.image}`,
        alt: `Slide ${index + 1}`,
        className: "w-full h-full object-cover"
      }
    ),
    slide.title || slide.description || slide.url ? /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 text-white z-20 bg-black/50 p-4 rounded-lg", children: [
      slide.title && /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: slide.title }),
      slide.description && /* @__PURE__ */ jsx("p", { className: "mt-2", children: slide.description }),
      slide.url && /* @__PURE__ */ jsx(Link, { href: slide.url, className: buttonVariants({ variant: "primary", className: "mt-4" }), children: "Read More" })
    ] }) : null
  ] }, index)) }) });
}
export {
  Hero as default
};
