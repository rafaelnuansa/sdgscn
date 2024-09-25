import { a as jsx } from "../ssr.js";
import { useState } from "react";
import ReactPlayer from "react-player";
import LazyLoad from "react-lazy-load";
import { S as Skeleton } from "./image-50b4b38d.js";
function Video({ className, title, height, src, width }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleVideoError = () => {
    setError(true);
    setLoading(false);
  };
  const handleVideoLoad = () => {
    setLoading(false);
  };
  return /* @__PURE__ */ jsx(LazyLoad, { height, width, threshold: 0.95, children: error ? /* @__PURE__ */ jsx(Skeleton, { className: className + " bg-gray-300" }) : /* @__PURE__ */ jsx("div", { className, style: { display: loading ? "none" : "block", width, height }, children: /* @__PURE__ */ jsx(
    ReactPlayer,
    {
      url: src,
      title,
      onReady: handleVideoLoad,
      onError: handleVideoError,
      width: "100%",
      height: "100%",
      controls: true,
      playing: false
    }
  ) }) });
}
export {
  Video as V
};
