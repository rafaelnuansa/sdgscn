import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { useForm, Head, Link } from "@inertiajs/react";
import { C as Container } from "./container-a7123293.js";
import { B as Button, b as buttonVariants } from "./button-e2a7e3d3.js";
import { A as AdminLayout } from "./admin-layout-474c2f83.js";
import { I as Input } from "./input-6fbce247.js";
import { F as FileUpload } from "./file-upload-640d49bd.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-d70f34a0.js";
import { L as Label } from "./label-4839c48b.js";
import { I as InputErrorMessage } from "./input-error-message-7afde931.js";
import { T as Textarea } from "./textarea-a3fe09ec.js";
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
function TestimonialsCreate() {
  const { data, setData, post, errors, processing } = useForm({
    image: null,
    name: "",
    from: "",
    description: ""
  });
  function onChange(e) {
    setData(e.target.name, e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("from", data.from);
    formData.append("description", data.description);
    formData.append("image", data.image);
    post(route("admin.testimonials.store"), formData);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Create Testimonial" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Create Testimonial" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Create a new testimonial" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "image", children: "Image" }),
          /* @__PURE__ */ jsx(FileUpload, { id: "image", accept: "image/*", name: "image", onChange: (file) => setData("image", file) }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.image })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "name",
              type: "text",
              name: "name",
              onChange
            }
          ),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "from", children: "From" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "from",
              type: "text",
              name: "from",
              onChange
            }
          ),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.from })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Description" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "description",
              type: "text",
              name: "description",
              onChange
            }
          ),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsx(Button, { type: "submit", variant: "default", disabled: processing, children: "Create" }),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("admin.testimonials.index"),
              className: buttonVariants({ variant: "default" }) + " ml-2",
              children: "Cancel"
            }
          )
        ] })
      ] }) })
    ] }) })
  ] });
}
TestimonialsCreate.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  TestimonialsCreate as default
};
