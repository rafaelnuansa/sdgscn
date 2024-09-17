import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { usePage, Head, Link } from "@inertiajs/react";
import { C as Container } from "./container-a7123293.js";
import { b as buttonVariants } from "./button-c70c5ef8.js";
import { A as AdminLayout } from "./admin-layout-a706b491.js";
import { H as Header } from "./header-6466b04b.js";
import { S as Search } from "./search-24973659.js";
import { P as Pagination } from "./pagination-1301a0c3.js";
import VendorTable from "./table-cc3adead.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-38e41470.js";
import "clsx";
import "tailwind-merge";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "./image-facc74b1.js";
import "framer-motion";
import "react-lazy-load";
import "./scroll-area-9ef3b685.js";
import "@radix-ui/react-scroll-area";
import "@irsyadadl/paranoid";
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
import "./input-e2af5f4c.js";
import "./table-813451e6.js";
import "./useSwal-486594a3.js";
import "sweetalert";
function ProductIndex() {
  const { auth, products } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Products" }),
    /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsx(Header, { title: "Products", subtitle: "Manage products" }),
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:px-6 lg:p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(Search, { URL: route("admin.products.index") }),
          /* @__PURE__ */ jsx(Link, { href: route("admin.products.create"), className: buttonVariants({ variant: "default" }), children: "Create Product" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-4 text-lg font-semibold", children: "Products" }),
          /* @__PURE__ */ jsx(VendorTable, { products }),
          /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(Pagination, { links: products.links }) })
        ] })
      ] })
    ] })
  ] });
}
ProductIndex.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  ProductIndex as default
};
