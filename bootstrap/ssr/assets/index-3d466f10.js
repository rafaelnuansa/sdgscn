import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useState } from "react";
import { useForm, Head, Link } from "@inertiajs/react";
import { B as Button } from "./button-c70c5ef8.js";
import { A as AdminLayout } from "./admin-layout-a706b491.js";
import Swal from "sweetalert2";
import UserTable from "./table-e3dc7f4d.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-ae2d1520.js";
import { C as Card, d as CardContent, a as CardHeader, b as CardTitle, c as CardDescription, e as CardFooter } from "./card-43a93659.js";
import { I as Input } from "./input-e2af5f4c.js";
import { u as useFilter } from "./useFilter-40e5ac53.js";
import { IconCirclePlus } from "@irsyadadl/paranoid";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-38e41470.js";
import "clsx";
import "tailwind-merge";
import "./logo-8ae88bc6.js";
import "./image-facc74b1.js";
import "framer-motion";
import "react-lazy-load";
import "./scroll-area-9ef3b685.js";
import "@radix-ui/react-scroll-area";
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
import "./dropdown-menu-4ccafc02.js";
import "@radix-ui/react-dropdown-menu";
import "./label-3e67e23b.js";
import "@radix-ui/react-label";
import "recoil";
import "./table-813451e6.js";
import "./alert-action-a6d9d096.js";
import "./alert-dialog-90b5007b.js";
import "@radix-ui/react-alert-dialog";
import "@radix-ui/react-select";
import "./lodash-d8bc076d.js";
function UsersIndex({ auth, ...props }) {
  const { data: users, meta, links } = props.users;
  const { delete: handleDelete } = useForm();
  const [params, setParams] = useState(props.state);
  useFilter({
    route: route("admin.users.index"),
    values: params,
    only: ["users"]
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
        handleDelete(route("admin.users.destroy", slug));
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Users" }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardContent, { className: "p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "p-0", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "flex", children: "Users" }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Users Managements" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex max-w-md flex-col gap-2 md:flex-row", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                value: params == null ? void 0 : params.search,
                onChange: (e) => setParams((prev) => ({ ...prev, search: e.target.value })),
                placeholder: "Search..."
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-x-2 md:flex", children: [
              /* @__PURE__ */ jsxs(Select, { value: params == null ? void 0 : params.status, onValueChange: (e) => setParams({ ...params, status: e }), children: [
                /* @__PURE__ */ jsx(SelectTrigger, { className: "md:w-40", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: params == null ? void 0 : params.status }) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { children: "All" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "draft", children: "Aktif" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "pending", children: "Pending" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "published", children: "Published" })
                ] })
              ] }),
              /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("admin.users.create"), children: [
                /* @__PURE__ */ jsx(IconCirclePlus, { className: "mr-2 size-4" }),
                "New"
              ] }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(UserTable, { users, handleUserDelete })
      ] }),
      /* @__PURE__ */ jsxs(CardFooter, { className: "justify-between border-t pt-6 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "Showing ",
          meta.from,
          " of ",
          meta.total
        ] }),
        meta.has_pages && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-1", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "outline", children: links.prev ? /* @__PURE__ */ jsxs(Link, { href: links.prev, children: [
            /* @__PURE__ */ jsx(IconChevronLeft, { className: "-ml-1 mr-1 size-4" }),
            "Prev"
          ] }) : /* @__PURE__ */ jsx("span", { children: "Prev" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "outline", children: links.next ? /* @__PURE__ */ jsxs(Link, { href: links.next, children: [
            "Next",
            /* @__PURE__ */ jsx(IconChevronRight, { className: "-mr-1 ml-1 size-4" })
          ] }) : /* @__PURE__ */ jsx("span", { children: "Next" }) })
        ] })
      ] })
    ] })
  ] });
}
UsersIndex.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  UsersIndex as default
};
