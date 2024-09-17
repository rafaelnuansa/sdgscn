import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { usePage, useForm, Head, Link } from "@inertiajs/react";
import { C as Container } from "./container-a7123293.js";
import { B as Button } from "./button-c70c5ef8.js";
import { A as AdminLayout } from "./admin-layout-a706b491.js";
import Swal from "sweetalert2";
import { C as Card, d as CardContent, a as CardHeader, b as CardTitle, c as CardDescription } from "./card-43a93659.js";
import { IconCirclePlus } from "@irsyadadl/paranoid";
import AlbumTable from "./table-537cafef.js";
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
function AlbumIndex() {
  const { albums } = usePage().props;
  const { delete: handleDelete } = useForm();
  const handleDataDelete = (slug) => {
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
        handleDelete(route("admin.albums.destroy", slug));
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Albums" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0", children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "p-0", children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Albums" }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Manage Albums" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex max-w-md flex-col gap-2 md:flex-row", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-x-2 md:flex", children: /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("admin.albums.create"), children: [
          /* @__PURE__ */ jsx(IconCirclePlus, { className: "mr-2 size-4" }),
          "New"
        ] }) }) }) })
      ] }),
      /* @__PURE__ */ jsx(AlbumTable, { albums, handleDataDelete })
    ] }) }) })
  ] });
}
AlbumIndex.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  AlbumIndex as default
};
