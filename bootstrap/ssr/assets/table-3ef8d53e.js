import { j as jsxs, a as jsx } from "../ssr.js";
import "react";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-813451e6.js";
import { Link, router } from "@inertiajs/react";
import { B as Button } from "./button-c70c5ef8.js";
import { I as Image } from "./image-facc74b1.js";
import { f as formatDate } from "./utils-38e41470.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuLabel, d as DropdownMenuSeparator, e as DropdownMenuItem, f as DropdownMenuGroup } from "./dropdown-menu-4ccafc02.js";
import { IconDotsVertical } from "@irsyadadl/paranoid";
import { A as AlertAction } from "./alert-action-a6d9d096.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "framer-motion";
import "react-lazy-load";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "./alert-dialog-90b5007b.js";
import "@radix-ui/react-alert-dialog";
function PartnerTable({ partners }) {
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };
  return /* @__PURE__ */ jsxs(Table, { children: [
    /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableHead, { children: "Image" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Name" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Created" }),
      /* @__PURE__ */ jsx(TableHead, {})
    ] }) }),
    /* @__PURE__ */ jsx(TableBody, { children: partners.map((partner) => /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Image, { src: `/storage/partners/${partner.image}`, alt: partner.name, className: "w-40 bg-gray-300 dark:bg-transparent p-5 rounded-lg object-cover" }) }),
      /* @__PURE__ */ jsx(TableCell, { children: truncateString(partner.name, 40) }),
      /* @__PURE__ */ jsx(TableCell, { children: formatDate(partner.created_at) }),
      /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "icon", children: [
          "  ",
          /* @__PURE__ */ jsx(IconDotsVertical, { className: "size-4" })
        ] }) }),
        /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [
          /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Actions" }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("admin.partners.edit", [partner]), children: "Edit" }) }),
          /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [
            /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
            /* @__PURE__ */ jsx(
              AlertAction,
              {
                trigger: /* @__PURE__ */ jsx(
                  DropdownMenuItem,
                  {
                    onSelect: (e) => e.preventDefault(),
                    children: "Delete"
                  }
                ),
                title: "Delete",
                description: "Are you sure you want to delete this?",
                action: () => router.delete(
                  route("admin.partners.destroy", [partner]),
                  { preserveScroll: true }
                )
              }
            )
          ] })
        ] })
      ] }) }) })
    ] }, partner.id)) })
  ] });
}
export {
  PartnerTable as default
};
