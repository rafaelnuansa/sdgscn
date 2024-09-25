import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { usePage, useForm, Head } from "@inertiajs/react";
import { A as AdminLayout } from "./admin-layout-474c2f83.js";
import { I as Input } from "./input-6fbce247.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-d70f34a0.js";
import { T as Textarea } from "./textarea-a3fe09ec.js";
import { L as Label } from "./label-4839c48b.js";
import { B as Button } from "./button-e2a7e3d3.js";
import { E as Editor } from "./editor-e02cf5f0.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./logo-360047b4.js";
import "sweetalert2";
import "clsx";
import "./image-0458d8cd.js";
import "framer-motion";
import "react-lazy-load";
import "./utils-186374bb.js";
import "tailwind-merge";
import "./scroll-area-4a6b9ba2.js";
import "@radix-ui/react-scroll-area";
import "@irsyadadl/paranoid";
import "./avatar-fff64a18.js";
import "@radix-ui/react-avatar";
import "./command-1156986d.js";
import "cmdk";
import "lucide-react";
import "./dialog-20065758.js";
import "@radix-ui/react-dialog";
import "./sonner-a166e9e0.js";
import "next-themes";
import "sonner";
import "./sheet-7a963302.js";
import "class-variance-authority";
import "./dropdown-menu-c2181ec7.js";
import "@radix-ui/react-dropdown-menu";
import "recoil";
import "@radix-ui/react-label";
import "@radix-ui/react-slot";
import "react-quill";
import "axios";
function PageEdit() {
  const { page } = usePage().props;
  const { data, setData, put, errors, processing } = useForm({
    title: page.title || "",
    content: page.content || "",
    seo_keywords: page.seo_keywords || "",
    seo_description: page.seo_description || ""
  });
  function handleSubmit(e) {
    e.preventDefault();
    put(route("admin.pages.update", page.id));
  }
  function handleEditorChange(content) {
    setData("content", content);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Edit Page" }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Edit Page" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Edit the page details below" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
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
          errors.title && /* @__PURE__ */ jsx("div", { className: "text-red-600", children: errors.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "content", children: "Content" }),
          /* @__PURE__ */ jsx(
            Editor,
            {
              content: data.content,
              onChange: handleEditorChange
            }
          ),
          errors.content && /* @__PURE__ */ jsx("div", { className: "text-red-600", children: errors.content })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "seo_keywords", children: "SEO Keywords" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "seo_keywords",
              type: "text",
              required: true,
              value: data.seo_keywords,
              onChange: (e) => setData("seo_keywords", e.target.value)
            }
          ),
          errors.seo_keywords && /* @__PURE__ */ jsx("div", { className: "text-red-600", children: errors.seo_keywords })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "seo_description", children: "SEO Description" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "seo_description",
              type: "text",
              required: true,
              value: data.seo_description,
              onChange: (e) => setData("seo_description", e.target.value)
            }
          ),
          errors.seo_description && /* @__PURE__ */ jsx("div", { className: "text-red-600", children: errors.seo_description })
        ] }),
        /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, children: "Save Changes" })
      ] }) })
    ] })
  ] });
}
PageEdit.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { title: "Edit Page", children: page });
export {
  PageEdit as default
};
