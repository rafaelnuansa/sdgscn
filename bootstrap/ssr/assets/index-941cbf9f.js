import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useState } from "react";
import { usePage, useForm, Head, Link } from "@inertiajs/react";
import { C as Container } from "./container-a7123293.js";
import { B as Button } from "./button-ef56bd5e.js";
import { A as AdminLayout } from "./admin-layout-58324348.js";
import Swal from "sweetalert2";
import { C as Card, d as CardContent, a as CardHeader, b as CardTitle, c as CardDescription } from "./card-f706282b.js";
import { u as useFilter } from "./useFilter-40e5ac53.js";
import { IconCirclePlus } from "@irsyadadl/paranoid";
import SdgTable from "./table-0dbc4f7b.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-fa5dc5b8.js";
import "clsx";
import "tailwind-merge";
import "./logo-70150b74.js";
import "./image-50b4b38d.js";
import "framer-motion";
import "react-lazy-load";
import "./scroll-area-db838748.js";
import "@radix-ui/react-scroll-area";
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
import "./label-22b65785.js";
import "@radix-ui/react-label";
import "recoil";
import "./lodash-d8bc076d.js";
import "./table-4b5e7891.js";
import "./alert-action-7de1ea7b.js";
import "./alert-dialog-7a34daaa.js";
import "@radix-ui/react-alert-dialog";
function SdgsIndex({ auth, ...props }) {
  const { sdgs } = usePage().props;
  const { delete: handleDelete } = useForm();
  const [params, setParams] = useState(props.state);
  useFilter({
    route: route("admin.sdgs.index"),
    values: params,
    only: ["sdgs"]
  });
  const handleUserDelete = (slug) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(route("admin.sdgs.destroy", slug));
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Sdgs" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0", children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "p-0", children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Sdgs" }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Manage Sdgs" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex max-w-md flex-col gap-2 md:flex-row", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-x-2 md:flex", children: /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("admin.sdgs.create"), children: [
          /* @__PURE__ */ jsx(IconCirclePlus, { className: "mr-2 size-4" }),
          "New"
        ] }) }) }) })
      ] }),
      /* @__PURE__ */ jsx(SdgTable, { sdgs: sdgs.data, handleUserDelete })
    ] }) }) })
  ] });
}
SdgsIndex.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  SdgsIndex as default
};
