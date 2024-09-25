import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { usePage, useForm, Head, Link } from "@inertiajs/react";
import { C as Container } from "./container-a7123293.js";
import { B as Button, b as buttonVariants } from "./button-ef56bd5e.js";
import { A as AdminLayout } from "./admin-layout-58324348.js";
import { I as Input } from "./input-05b98463.js";
import { F as FileUpload } from "./file-upload-4b5275f8.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-f706282b.js";
import { L as Label } from "./label-22b65785.js";
import { I as InputErrorMessage } from "./input-error-message-a80fba17.js";
import { E as Editor } from "./editor-e02cf5f0.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-fa5dc5b8.js";
import "clsx";
import "tailwind-merge";
import "./logo-70150b74.js";
import "sweetalert2";
import "./image-50b4b38d.js";
import "framer-motion";
import "react-lazy-load";
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
import "./dropdown-menu-fef2e637.js";
import "@radix-ui/react-dropdown-menu";
import "recoil";
import "@radix-ui/react-label";
import "react-quill";
import "axios";
function SdgEdit() {
  const { sdg } = usePage().props;
  const { data, setData, post, errors, processing } = useForm({
    image: null,
    name: sdg.name ?? "",
    description: sdg.description ?? "",
    // Tambahkan kolom description
    content: sdg.content ?? "",
    // Tambahkan kolom content
    _method: "PUT"
  });
  function onChange(e) {
    setData(e.target.name, e.target.value);
  }
  const handleEditorChange = (content) => {
    setData("content", content);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", data.image);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("content", data.content);
    post(route("admin.sdgs.update", sdg.id), formData);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Edit Sdg" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Edit Sdg" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Edit the existing SDG" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "image", children: "Image" }),
          /* @__PURE__ */ jsx(FileUpload, { id: "image", accept: "image/*", name: "image", onChange: (file) => setData("image", file) }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.image })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
          /* @__PURE__ */ jsx(Input, { id: "name", type: "text", name: "name", value: data.name, onChange }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Description" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "description",
              name: "description",
              className: "w-full p-2 border rounded",
              rows: "4",
              value: data.description,
              onChange
            }
          ),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "content", children: "Content" }),
          /* @__PURE__ */ jsx(Editor, { content: data.content, onChange: handleEditorChange }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.content })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsx(Button, { type: "submit", variant: "primary", disabled: processing, children: "Update" }),
          /* @__PURE__ */ jsx(Link, { href: route("admin.sdgs.index"), className: buttonVariants({ variant: "default" }) + " ml-2", children: "Cancel" })
        ] })
      ] }) })
    ] }) })
  ] });
}
SdgEdit.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  SdgEdit as default
};
