import { j as jsxs, a as jsx } from "../ssr.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from "./card-43a93659.js";
import "react";
import { useForm } from "@inertiajs/react";
import { B as Button } from "./button-c70c5ef8.js";
import "./select-ae2d1520.js";
import { L as Label } from "./label-3e67e23b.js";
import { I as Input } from "./input-e2af5f4c.js";
import "./badge-a28027f7.js";
import "./command-d3e20674.js";
import "@irsyadadl/paranoid";
import { I as InputErrorMessage } from "./input-error-message-7f16fe4d.js";
import "./textarea-5aed477a.js";
import { a as flashMessage } from "./utils-38e41470.js";
import "react-lazy-load";
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
import "clsx";
import "tailwind-merge";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "./image-facc74b1.js";
import "framer-motion";
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
  var _a;
  const { data, setData, post, errors, processing } = useForm({
    name: ((_a = page_data.category) == null ? void 0 : _a.name) ?? "",
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
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx(Label, { children: "Name" }),
        /* @__PURE__ */ jsx(Input, { name: "name", onChange, value: data.name }),
        /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.name })
      ] }) }) }),
      /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Button, { disabled: processing, type: "submit", children: "Save" }) })
    ] })
  ] });
}
Form.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { title: page.props.page_meta.title, children: page });
export {
  Form as default
};
