import { j as jsxs, a as jsx } from "../ssr.js";
import { IconX } from "@irsyadadl/paranoid";
import { d as cn } from "./utils-38e41470.js";
import { useState } from "react";
import { B as Button } from "./button-c70c5ef8.js";
import { I as Input } from "./input-e2af5f4c.js";
import LazyLoad from "react-lazy-load";
import { motion } from "framer-motion";
function FileUploadVideo({ className, onChange, accept, isMultiple }) {
  const [previewSrc, setPreviewSrc] = useState([]);
  const handleFileChange = (event) => {
    const files = event.target.files || [];
    if (isMultiple) {
      onChange(files);
      const previewVideos = [];
      const readFile = (index) => {
        if (index >= files.length) {
          setPreviewSrc(previewVideos);
          return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
          previewVideos.push(reader.result);
          readFile(index + 1);
        };
        reader.readAsDataURL(files[index]);
      };
      readFile(0);
    } else {
      const file = files[0] || null;
      onChange(file);
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewSrc([reader.result]);
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewSrc([]);
      }
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: cn(className), children: [
    previewSrc.length > 0 && previewSrc.map((src, index) => /* @__PURE__ */ jsxs("div", { className: "relative rounded-lg", children: [
      /* @__PURE__ */ jsx(LazyLoad, { height: 200, width: "100%", children: /* @__PURE__ */ jsxs(
        motion.video,
        {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          controls: true,
          className: "max-h-sm w-full rounded-lg border object-cover object-center",
          children: [
            /* @__PURE__ */ jsx("source", { src, type: "video/mp4" }),
            "Your browser does not support the video tag."
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          className: "absolute -right-3 -top-3 size-6 rounded-full",
          size: "icon",
          variant: "secondary",
          type: "button",
          onClick: () => {
            const newPreviewSrc = [...previewSrc];
            newPreviewSrc.splice(index, 1);
            setPreviewSrc(newPreviewSrc);
          },
          children: /* @__PURE__ */ jsx(IconX, { className: "size-4" })
        }
      )
    ] }, index)),
    /* @__PURE__ */ jsx(
      Input,
      {
        className: "mt-10 max-w-2xl file:text-foreground",
        onChange: handleFileChange,
        accept,
        type: "file",
        multiple: isMultiple
      }
    )
  ] });
}
export {
  FileUploadVideo as F
};
