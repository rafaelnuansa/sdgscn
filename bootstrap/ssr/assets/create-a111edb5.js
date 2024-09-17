import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { useForm, Head } from "@inertiajs/react";
import { A as AdminLayout } from "./admin-layout-a706b491.js";
import { I as Input } from "./input-e2af5f4c.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from "./card-43a93659.js";
import { T as Textarea } from "./textarea-5aed477a.js";
import { L as Label } from "./label-3e67e23b.js";
import { B as Button } from "./button-c70c5ef8.js";
import { E as Editor } from "./editor-e02cf5f0.js";
import { I as InputErrorMessage } from "./input-error-message-7f16fe4d.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "clsx";
import "./image-facc74b1.js";
import "framer-motion";
import "react-lazy-load";
import "./utils-38e41470.js";
import "tailwind-merge";
import "./scroll-area-9ef3b685.js";
import "@radix-ui/react-scroll-area";
import "@irsyadadl/paranoid";
import "./avatar-d5a71c43.js";
import "@radix-ui/react-avatar";
import "./command-d3e20674.js";
import "cmdk";
import "lucide-react";
import "./dialog-d3517b83.js";
import "@radix-ui/react-dialog";
import "./sonner-a166e9e0.js";
import "next-themes";
import "sonner";
import "./sheet-c59fdc39.js";
import "class-variance-authority";
import "./dropdown-menu-4ccafc02.js";
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
