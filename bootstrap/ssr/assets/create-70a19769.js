import { j as jsxs, a as jsx } from "../ssr.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from "./card-43a93659.js";
import "react";
import { useForm } from "@inertiajs/react";
import { B as Button } from "./button-c70c5ef8.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-ae2d1520.js";
import { L as Label } from "./label-3e67e23b.js";
import { I as Input } from "./input-e2af5f4c.js";
import "./badge-a28027f7.js";
import "./command-d3e20674.js";
import "@irsyadadl/paranoid";
import { I as InputErrorMessage } from "./input-error-message-7f16fe4d.js";
import { T as Textarea } from "./textarea-5aed477a.js";
import { F as FileUpload } from "./file-upload-e248f672.js";
import { a as flashMessage } from "./utils-38e41470.js";
import { toast } from "sonner";
import { A as AdminLayout } from "./admin-layout-a706b491.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-select";
import "lucide-react";
import "@radix-ui/react-label";
import "cmdk";
import "./dialog-d3517b83.js";
import "@radix-ui/react-dialog";
import "./image-facc74b1.js";
import "framer-motion";
import "react-lazy-load";
import "clsx";
import "tailwind-merge";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "./scroll-area-9ef3b685.js";
import "@radix-ui/react-scroll-area";
import "./avatar-d5a71c43.js";
import "@radix-ui/react-avatar";
import "./sonner-a166e9e0.js";
import "next-themes";
import "./sheet-c59fdc39.js";
import "./dropdown-menu-4ccafc02.js";
import "@radix-ui/react-dropdown-menu";
import "recoil";
function Form({ auth, page_meta, page_data }) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { data, setData, post, errors, processing } = useForm({
    image: null,
    category_id: ((_a = page_data.pkg) == null ? void 0 : _a.category_id) ?? "",
    name: ((_b = page_data.pkg) == null ? void 0 : _b.name) ?? "",
    description: ((_c = page_data.pkg) == null ? void 0 : _c.description) ?? "",
    price: ((_d = page_data.pkg) == null ? void 0 : _d.price) ?? "",
    minimum_dp_percent: ((_e = page_data.pkg) == null ? void 0 : _e.minimum_dp_percent) ?? "",
    rate: ((_f = page_data.pkg) == null ? void 0 : _f.rate) ?? "",
    day: ((_g = page_data.pkg) == null ? void 0 : _g.day) ?? "",
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
  return /* @__PURE__ */ jsxs(Card, { children: [
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
          /* @__PURE__ */ jsx(Input, { name: "name", onChange, value: data.name }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx(Label, { children: "Price" }),
          /* @__PURE__ */ jsx(Input, { name: "price", onChange, value: data.price }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.price })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx(Label, { children: "Min DP %" }),
          /* @__PURE__ */ jsx(Input, { name: "minimum_dp_percent", onChange, value: data.minimum_dp_percent }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.minimum_dp_percent })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx(Label, { children: "Days" }),
          /* @__PURE__ */ jsx(Input, { name: "day", onChange, value: data.day }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.day })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx(Label, { children: "Rate" }),
          /* @__PURE__ */ jsx(Input, { name: "rate", placeholder: "1-5", type: "number", onChange, value: data.rate }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.rate })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx(Label, { children: "Description" }),
          /* @__PURE__ */ jsx(Textarea, { name: "description", onChange, value: data.description }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.description })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6", children: /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx(Label, { children: "Category" }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              defaultValue: data.category_id,
              onValueChange: (value) => setData("category_id", value),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select category", children: ((_h = page_data.categories.find((category) => category.value == data.category_id)) == null ? void 0 : _h.label) ?? "Select a category" }) }),
                /* @__PURE__ */ jsx(SelectContent, { children: page_data.categories.map((category) => /* @__PURE__ */ jsx(SelectItem, { value: category.value, children: category.label }, category.value)) })
              ]
            }
          ),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.category_id })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Button, { disabled: processing, type: "submit", children: "Submit" }) })
    ] })
  ] });
}
Form.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { title: page.props.page_meta.title, children: page });
export {
  Form as default
};
