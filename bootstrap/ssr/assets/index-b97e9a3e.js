import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useState } from "react";
import { usePage, useForm, Head, Link, router } from "@inertiajs/react";
import { C as Container } from "./container-a7123293.js";
import { B as Button, b as buttonVariants } from "./button-e2a7e3d3.js";
import { A as AdminLayout } from "./admin-layout-474c2f83.js";
import Swal from "sweetalert2";
import { C as Card, d as CardContent, a as CardHeader, b as CardTitle, c as CardDescription, e as CardFooter } from "./card-d70f34a0.js";
import { u as useFilter } from "./useFilter-40e5ac53.js";
import { IconCirclePlus } from "@irsyadadl/paranoid";
import SdgTable from "./table-aaaa29e4.js";
import { P as Pagination } from "./pagination-eab0ce12.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-186374bb.js";
import "clsx";
import "tailwind-merge";
import "./logo-360047b4.js";
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
function SdgsIndex({ auth, ...props }) {
  const { sdgs } = usePage().props;
  const { delete: handleDelete } = useForm();
  const [search, setSearch] = useState("");
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
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    router.get(route("admin.sdgs.index"), { search });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Sdgs" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardContent, { className: "p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "p-0", children: [
            /* @__PURE__ */ jsx(CardTitle, { children: "Sdgs" }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Manage Sdgs" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex max-w-md flex-col gap-2 md:flex-row", children: [
            /* @__PURE__ */ jsxs("form", { onSubmit: handleFilterSubmit, className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search SDGs...",
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  className: "p-2 border border-gray-300 rounded-md"
                }
              ),
              /* @__PURE__ */ jsx(Button, { type: "submit", className: buttonVariants("primary"), children: "Search" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-x-2 md:flex", children: /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("admin.sdgs.create"), children: [
              /* @__PURE__ */ jsx(IconCirclePlus, { className: "mr-2 size-4" }),
              "New"
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(SdgTable, { sdgs: sdgs.data, handleUserDelete })
      ] }),
      /* @__PURE__ */ jsx(CardFooter, { className: "border-t text-sm text-muted-foreground", children: /* @__PURE__ */ jsx(Pagination, { links: sdgs.links }) })
    ] }) })
  ] });
}
SdgsIndex.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  SdgsIndex as default
};
