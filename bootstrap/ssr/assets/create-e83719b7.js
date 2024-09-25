import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from "./card-d70f34a0.js";
import "react";
import { useForm, Head } from "@inertiajs/react";
import { B as Button } from "./button-e2a7e3d3.js";
import { L as Label } from "./label-4839c48b.js";
import { I as Input } from "./input-6fbce247.js";
import { I as InputErrorMessage } from "./input-error-message-7afde931.js";
import { F as FileUpload } from "./file-upload-640d49bd.js";
import { a as flashMessage } from "./utils-186374bb.js";
import { toast } from "sonner";
import { A as AdminLayout } from "./admin-layout-474c2f83.js";
import { E as Editor } from "./editor-e02cf5f0.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "@irsyadadl/paranoid";
import "./image-0458d8cd.js";
import "framer-motion";
import "react-lazy-load";
import "clsx";
import "tailwind-merge";
import "./logo-360047b4.js";
import "sweetalert2";
import "./scroll-area-4a6b9ba2.js";
import "@radix-ui/react-scroll-area";
import "./avatar-fff64a18.js";
import "@radix-ui/react-avatar";
import "./command-1156986d.js";
import "cmdk";
import "lucide-react";
import "./dialog-20065758.js";
import "@radix-ui/react-dialog";
import "./sonner-a166e9e0.js";
import "next-themes";
import "./sheet-7a963302.js";
import "./dropdown-menu-c2181ec7.js";
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
