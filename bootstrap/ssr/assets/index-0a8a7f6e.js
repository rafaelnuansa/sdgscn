import { j as jsxs, a as jsx, F as Fragment } from "../ssr.js";
import { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, e as CardFooter } from "./card-43a93659.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-813451e6.js";
import { A as AdminLayout } from "./admin-layout-a706b491.js";
import { b as formatDateTime } from "./utils-38e41470.js";
import { B as Button } from "./button-c70c5ef8.js";
import "./select-ae2d1520.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuLabel, d as DropdownMenuSeparator, e as DropdownMenuItem, f as DropdownMenuGroup } from "./dropdown-menu-4ccafc02.js";
import { IconUpload, IconDotsVertical, IconChevronLeft, IconChevronRight } from "@irsyadadl/paranoid";
import { I as Input } from "./input-e2af5f4c.js";
import { u as useFilter } from "./useFilter-40e5ac53.js";
import { A as AlertAction } from "./alert-action-a6d9d096.js";
import { V as Video } from "./video-e9876707.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "clsx";
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
import "class-variance-authority";
import "./label-3e67e23b.js";
import "@radix-ui/react-label";
import "recoil";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "@radix-ui/react-select";
import "@radix-ui/react-dropdown-menu";
import "./lodash-d8bc076d.js";
import "./alert-dialog-90b5007b.js";
import "@radix-ui/react-alert-dialog";
import "react-player";
function Index({ auth, main_package, ...props }) {
  const { data: videos, meta, links } = props.videos;
  const [params, setParams] = useState(props.state);
  useFilter({
    route: route("admin.packages.videos.index", main_package.id),
    values: params,
    only: ["videos"]
  });
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Videos" }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0", children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "p-0", children: /* @__PURE__ */ jsx(CardTitle, { children: "Videos" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              value: params == null ? void 0 : params.search,
              onChange: (e) => setParams((prev) => ({ ...prev, search: e.target.value })),
              placeholder: "Search..."
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("admin.packages.videos.create", main_package.id), children: [
            /* @__PURE__ */ jsx(IconUpload, { className: "mr-2 size-4" }),
            "Upload"
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { className: "p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t", children: /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { children: "#" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Videos" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Upload At" }),
          /* @__PURE__ */ jsx(TableHead, {})
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: videos.map((video, index) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { children: meta.from + index }),
          /* @__PURE__ */ jsx(TableCell, { className: "min-w-32", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-32", children: /* @__PURE__ */ jsx(
              Video,
              {
                skeletonHeight: "40",
                className: "h-full w-full object-cover rounded",
                src: `/storage/videos/${video.video}`
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "ml-4", children: /* @__PURE__ */ jsx("p", { className: "font-semibold", children: video.title }) })
          ] }) }),
          /* @__PURE__ */ jsx(TableCell, { children: formatDateTime(video.created_at) }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(IconDotsVertical, { className: "size-4" }) }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [
              /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Actions" }),
              /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
              !params.onlyTrashed && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("admin.packages.videos.edit", [video.package_id, video.id]), children: "Edit" }) }),
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
                      description: "Are you sure you want to delete this Video?",
                      action: () => router.delete(
                        route("admin.packages.videos.destroy", [video.package_id, video.id]),
                        { preserveScroll: true }
                      )
                    }
                  )
                ] })
              ] })
            ] })
          ] }) }) })
        ] }, video.id)) })
      ] }) }),
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
export {
  Index as default
};
