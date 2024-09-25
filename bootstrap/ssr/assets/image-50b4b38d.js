import { a as jsx } from "../ssr.js";
import { useState } from "react";
import { motion } from "framer-motion";
import LazyLoad from "react-lazy-load";
import { c as cn } from "./utils-fa5dc5b8.js";
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { className: cn("animate-pulse rounded-md bg-muted", className), ...props });
}
function Image({ className, alt, height, src, width }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleImageError = () => {
    setError(true);
    setLoading(false);
  };
  const handleImageLoad = () => {
    setLoading(false);
  };
  return /* @__PURE__ */ jsx(LazyLoad, { height, width, threshold: 0.95, children: error ? /* @__PURE__ */ jsx(Skeleton, { className: className + " bg-gray-300" }) : /* @__PURE__ */ jsx(
    motion.img,
    {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      className,
      src,
      alt,
      onLoad: handleImageLoad,
      onError: handleImageError,
      style: {
        display: loading ? "none" : "block",
        width,
        height,
        objectFit: "cover"
      }
    }
  ) });
}
export {
  Image as I,
  Skeleton as S
};
