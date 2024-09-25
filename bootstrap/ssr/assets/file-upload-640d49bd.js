import { j as jsxs, a as jsx } from "../ssr.js";
import { IconX } from "@irsyadadl/paranoid";
import { c as cn } from "./utils-186374bb.js";
import { useState } from "react";
import { B as Button } from "./button-e2a7e3d3.js";
import { I as Input } from "./input-6fbce247.js";
import { I as Image } from "./image-0458d8cd.js";
function FileUpload({ className, onChange, accept, isMultiple }) {
  const [previewSrc, setPreviewSrc] = useState(null);
  const handleFileChange = (event) => {
    const files = event.target.files || [];
    if (isMultiple) {
      onChange(files);
      new FileReader();
      const previewImages = [];
      const readFile = (index) => {
        if (index >= files.length) {
          setPreviewSrc(previewImages);
          return;
        }
        const reader2 = new FileReader();
        reader2.onloadend = () => {
          previewImages.push(reader2.result);
          readFile(index + 1);
        };
        reader2.readAsDataURL(files[index]);
      };
      readFile(0);
    } else {
      const file = files[0] || null;
      onChange(file);
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewSrc(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewSrc(null);
      }
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: cn(className), children: [
    Array.isArray(previewSrc) ? previewSrc.map((src, index) => /* @__PURE__ */ jsxs("div", { className: "relative rounded-lg", children: [
      /* @__PURE__ */ jsx(
        Image,
        {
          src: String(src),
          alt: "Preview",
          className: "max-h-96 w-full rounded-lg border object-cover object-center"
        }
      ),
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
    ] }, index)) : previewSrc ? /* @__PURE__ */ jsxs("div", { className: "relative rounded-lg", children: [
      /* @__PURE__ */ jsx(
        Image,
        {
          src: String(previewSrc),
          alt: "Preview",
          className: "max-h-96 w-full rounded-lg border object-cover object-center"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          className: "absolute -right-3 -top-3 size-6 rounded-full",
          size: "icon",
          variant: "secondary",
          type: "button",
          onClick: () => setPreviewSrc(null),
          children: /* @__PURE__ */ jsx(IconX, { className: "size-4" })
        }
      )
    ] }) : null,
    /* @__PURE__ */ jsx(
      Input,
      {
        className: "mt-2 max-w-[14rem] file:text-foreground",
        onChange: handleFileChange,
        accept,
        type: "file",
        multiple: isMultiple
      }
    )
  ] });
}
export {
  FileUpload as F
};
