import { j as jsxs, a as jsx, F as Fragment } from "../ssr.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from "./card-f706282b.js";
import { useState } from "react";
import { useForm, Head } from "@inertiajs/react";
import { B as Button } from "./button-ef56bd5e.js";
import { L as Label } from "./label-22b65785.js";
import { I as Input } from "./input-05b98463.js";
import { I as InputErrorMessage } from "./input-error-message-a80fba17.js";
import { c as cn, a as flashMessage } from "./utils-fa5dc5b8.js";
import { toast } from "sonner";
import { A as AdminLayout } from "./admin-layout-58324348.js";
import { IconX } from "@irsyadadl/paranoid";
import LazyLoad from "react-lazy-load";
import { motion } from "framer-motion";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "clsx";
import "tailwind-merge";
import "./logo-70150b74.js";
import "sweetalert2";
import "./image-50b4b38d.js";
import "./scroll-area-db838748.js";
import "@radix-ui/react-scroll-area";
import "./avatar-f336b458.js";
import "@radix-ui/react-avatar";
import "./command-3c1526d0.js";
import "cmdk";
import "lucide-react";
import "./dialog-bc7d8a74.js";
import "@radix-ui/react-dialog";
import "./sonner-a166e9e0.js";
import "next-themes";
import "./sheet-6fce3cff.js";
import "./dropdown-menu-fef2e637.js";
import "@radix-ui/react-dropdown-menu";
import "recoil";
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
function Form({ auth, page_meta, page_data }) {
  var _a;
  const { data, setData, post, errors, processing } = useForm({
    video: null,
    title: ((_a = page_data.video) == null ? void 0 : _a.title) ?? "",
    _method: page_meta.method
  });
  function submit(e) {
    e.preventDefault();
    post(page_meta.url, {
      preserveScroll: true,
      onSuccess: (params) => {
        const flash = flashMessage(params);
        if (flash) {
          toast[flash.type](flash.message);
        }
      }
    });
  }
  function onChange(e) {
    setData(e.target.name, e.target.value);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: page_meta.title }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: page_meta.title }),
        /* @__PURE__ */ jsx(CardDescription, { children: page_meta.description })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx(Label, { children: "Title" }),
            /* @__PURE__ */ jsx(Input, { name: "title", onChange, value: data.title }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.title })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "max-w-sm space-y-1", children: [
            /* @__PURE__ */ jsx(Label, { children: "Video" }),
            /* @__PURE__ */ jsx(FileUploadVideo, { onChange: (file) => setData("video", file) }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.video })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Button, { disabled: processing, type: "submit", children: "Submit" }) })
      ] })
    ] })
  ] });
}
Form.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { title: page.props.page_meta.title, children: page });
export {
  Form as default
};
