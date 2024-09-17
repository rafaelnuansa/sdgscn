import { j as jsxs, a as jsx } from "../ssr.js";
import "react";
import { T as Table, f as TableCaption, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-813451e6.js";
import { Link } from "@inertiajs/react";
import { b as buttonVariants, B as Button } from "./button-c70c5ef8.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-d5a71c43.js";
import { u as useSwal } from "./useSwal-486594a3.js";
import { Image } from "lucide-react";
import { f as formatDate } from "./utils-38e41470.js";
import "react-lazy-load";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-avatar";
import "sweetalert";
import "clsx";
import "tailwind-merge";
function VendorTable({ products }) {
  const { ask } = useSwal();
  return /* @__PURE__ */ jsxs(Table, { children: [
    /* @__PURE__ */ jsx(TableCaption, { children: "List of Vendors" }),
    /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableHead, { children: "Image" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Product Name" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Vendor" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Created at" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Actions" })
    ] }) }),
    /* @__PURE__ */ jsx(TableBody, { children: products.data.map((product) => /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(Avatar, { children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-w-1 aspect-h-1", children: /* @__PURE__ */ jsx(AvatarImage, { src: `storage/products/${product.image}`, alt: product.name, className: "h-full w-full rounded-lg object-cover" }) }),
        /* @__PURE__ */ jsx(AvatarFallback, { children: /* @__PURE__ */ jsx(Image, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(TableCell, { children: product.name }),
      /* @__PURE__ */ jsx(TableCell, { children: product.vendor.name }),
      /* @__PURE__ */ jsx(TableCell, { children: formatDate(product.created_at) }),
      /* @__PURE__ */ jsxs(TableCell, { children: [
        /* @__PURE__ */ jsx(Link, { href: route("admin.products.show", product.id), className: buttonVariants({ variant: "default", size: "sm" }) + " me-2", children: "View" }),
        /* @__PURE__ */ jsx(Link, { href: route("admin.products.edit", product.id), className: buttonVariants({ variant: "default", size: "sm" }) + " me-2", children: "Edit" }),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            variant: "destructive",
            onClick: () => ask({
              url: route("admin.products.destroy", [product.id]),
              method: "delete",
              icon: "warning",
              message: "Are you sure you want to delete this Vendor?"
            }),
            children: /* @__PURE__ */ jsx("span", { children: "Delete" })
          }
        )
      ] })
    ] }, product.id)) })
  ] });
}
export {
  VendorTable as default
};
