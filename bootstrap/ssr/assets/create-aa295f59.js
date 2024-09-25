import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { useForm, Head } from "@inertiajs/react";
import { A as AdminLayout } from "./admin-layout-58324348.js";
import { I as Input } from "./input-05b98463.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from "./card-f706282b.js";
import { T as Textarea } from "./textarea-85cbc568.js";
import { L as Label } from "./label-22b65785.js";
import { B as Button } from "./button-ef56bd5e.js";
import { E as Editor } from "./editor-e02cf5f0.js";
import { I as InputErrorMessage } from "./input-error-message-a80fba17.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./logo-70150b74.js";
import "sweetalert2";
import "clsx";
import "./image-50b4b38d.js";
import "framer-motion";
import "react-lazy-load";
import "./utils-fa5dc5b8.js";
import "tailwind-merge";
import "./scroll-area-db838748.js";
import "@radix-ui/react-scroll-area";
import "@irsyadadl/paranoid";
import "./avatar-f336b458.js";
import "@radix-ui/react-avatar";
import "./command-3c1526d0.js";
import "cmdk";
import "lucide-react";
import "./dialog-bc7d8a74.js";
import "@radix-ui/react-dialog";
import "./sonner-a166e9e0.js";
import "next-themes";
import "sonner";
import "./sheet-6fce3cff.js";
import "class-variance-authority";
import "./dropdown-menu-fef2e637.js";
import "@radix-ui/react-dropdown-menu";
import "recoil";
import "@radix-ui/react-label";
import "@radix-ui/react-slot";
import "react-quill";
import "axios";
function PageCreate() {
  const { data, setData, post, errors, processing } = useForm({
    title: "",
    content: "",
    seo_keywords: "",
    seo_description: ""
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route("admin.pages.store"));
  }
  function handleEditorChange(content) {
    setData("content", content);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Create Page" }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Create Page" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Create a new page by filling out the form below" })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "title", children: "Title" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "title",
                type: "text",
                value: data.title,
                onChange: (e) => setData("title", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.title })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "content", children: "Content" }),
            /* @__PURE__ */ jsx(Editor, { content: data.content, onChange: handleEditorChange }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.content })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "seo_keywords", children: "SEO Keywords" }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                id: "seo_keywords",
                value: data.seo_keywords,
                onChange: (e) => setData("seo_keywords", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.seo_keywords })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "seo_description", children: "SEO Description" }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                id: "seo_description",
                value: data.seo_description,
                onChange: (e) => setData("seo_description", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.seo_description })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, children: "Create" }) })
      ] })
    ] })
  ] });
}
PageCreate.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { title: "Setting", children: page });
export {
  PageCreate as default
};
