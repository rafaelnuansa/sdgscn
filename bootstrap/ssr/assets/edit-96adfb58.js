import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { usePage, useForm, Head, Link } from "@inertiajs/react";
import { C as Container } from "./container-a7123293.js";
import { B as Button, b as buttonVariants } from "./button-e2a7e3d3.js";
import { A as AdminLayout } from "./admin-layout-474c2f83.js";
import { I as Input } from "./input-6fbce247.js";
import { F as FileUpload } from "./file-upload-640d49bd.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-d70f34a0.js";
import { L as Label } from "./label-4839c48b.js";
import { I as InputErrorMessage } from "./input-error-message-7afde931.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-186374bb.js";
import "clsx";
import "tailwind-merge";
import "./logo-360047b4.js";
import "sweetalert2";
import "./image-0458d8cd.js";
import "framer-motion";
import "react-lazy-load";
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
import "./dropdown-menu-c2181ec7.js";
import "@radix-ui/react-dropdown-menu";
import "recoil";
import "@radix-ui/react-label";
function SliderEdit() {
  const { slider } = usePage().props;
  const { data, setData, post, errors, processing } = useForm({
    image: null,
    title: slider.title ?? "",
    description: slider.description ?? "",
    url: slider.url ?? "",
    _method: "PUT"
  });
  function onChange(e) {
    setData(e.target.name, e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", data.image);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("url", data.url);
    console.log(formData);
    post(route("admin.sliders.update", slider.id), formData);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Edit Slider" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Edit Slider" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Edit the existing slider" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "image", children: "Image" }),
          /* @__PURE__ */ jsx(FileUpload, { id: "image", accept: "image/*", name: "image", onChange: (file) => setData("image", file) }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.image })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "title", children: "Title" }),
          /* @__PURE__ */ jsx(Input, { id: "title", type: "text", name: "title", value: data.title, onChange }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Description" }),
          /* @__PURE__ */ jsx(Input, { id: "description", type: "text", name: "description", value: data.description, onChange }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "url", children: "URL" }),
          /* @__PURE__ */ jsx(Input, { id: "url", type: "text", name: "url", value: data.url, onChange }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.url })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsx(Button, { type: "submit", variant: "primary", disabled: processing, children: "Update" }),
          /* @__PURE__ */ jsx(Link, { href: route("admin.sliders.index"), className: buttonVariants({ variant: "default" }) + " ml-2", children: "Cancel" })
        ] })
      ] }) })
    ] }) })
  ] });
}
SliderEdit.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  SliderEdit as default
};
