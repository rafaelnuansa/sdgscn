import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useState } from "react";
import { usePage, useForm, Head, Link } from "@inertiajs/react";
import { C as Container } from "./container-a7123293.js";
import { B as Button } from "./button-e2a7e3d3.js";
import { A as AdminLayout } from "./admin-layout-474c2f83.js";
import { C as Card, d as CardContent, a as CardHeader, b as CardTitle, c as CardDescription } from "./card-d70f34a0.js";
import { u as useFilter } from "./useFilter-40e5ac53.js";
import { IconCirclePlus } from "@irsyadadl/paranoid";
import SliderTable from "./table-3cef3f0d.js";
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
import "./label-4839c48b.js";
import "@radix-ui/react-label";
import "recoil";
import "./lodash-d8bc076d.js";
import "./table-47544d29.js";
import "./alert-action-4ffceca7.js";
import "@radix-ui/react-alert-dialog";
function SlidersIndex({ auth, ...props }) {
  const { sliders } = usePage().props;
  useForm();
  const [params, setParams] = useState(props.state);
  useFilter({
    route: route("admin.sliders.index"),
    values: params,
    only: ["sliders"]
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Sliders" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0", children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "p-0", children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Sliders" }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Manage Sliders" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex max-w-md flex-col gap-2 md:flex-row", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-x-2 md:flex", children: /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("admin.sliders.create"), children: [
          /* @__PURE__ */ jsx(IconCirclePlus, { className: "mr-2 size-4" }),
          "New"
        ] }) }) }) })
      ] }),
      /* @__PURE__ */ jsx(SliderTable, { sliders })
    ] }) }) })
  ] });
}
SlidersIndex.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  SlidersIndex as default
};
