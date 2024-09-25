import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from "./card-f706282b.js";
import "react";
import { useForm, Head } from "@inertiajs/react";
import { B as Button } from "./button-ef56bd5e.js";
import { L as Label } from "./label-22b65785.js";
import { I as Input } from "./input-05b98463.js";
import { I as InputErrorMessage } from "./input-error-message-a80fba17.js";
import { F as FileUpload } from "./file-upload-4b5275f8.js";
import { a as flashMessage } from "./utils-fa5dc5b8.js";
import { toast } from "sonner";
import { A as AdminLayout } from "./admin-layout-58324348.js";
import { E as Editor } from "./editor-e02cf5f0.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "@irsyadadl/paranoid";
import "./image-50b4b38d.js";
import "framer-motion";
import "react-lazy-load";
import "clsx";
import "tailwind-merge";
import "./logo-70150b74.js";
import "sweetalert2";
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
import "react-quill";
import "axios";
function Form({ auth, page_meta, page_data }) {
  var _a, _b;
  const { data, setData, post, errors, processing } = useForm({
    image: null,
    title: ((_a = page_data.article) == null ? void 0 : _a.title) ?? "",
    content: ((_b = page_data.article) == null ? void 0 : _b.content) ?? "",
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
  function handleEditorChange(content) {
    setData("content", content);
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
          /* @__PURE__ */ jsxs("div", { className: "max-w-2xl space-y-1", children: [
            /* @__PURE__ */ jsx(Label, { children: "Thumbnail" }),
            /* @__PURE__ */ jsx(FileUpload, { onChange: (file) => setData("image", file) }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.image })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx(Label, { children: "Name" }),
            /* @__PURE__ */ jsx(Input, { name: "title", onChange, value: data.title }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.title })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx(Label, { children: "Description" }),
            /* @__PURE__ */ jsx(Editor, { content: data.content, onChange: handleEditorChange }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.content })
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
