import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useState } from "react";
import { usePage, Head, router } from "@inertiajs/react";
import { H as Header, B as Breadcrumb } from "./header-3b193594.js";
import { A as AppLayout } from "./app-layout-ec137134.js";
import { C as Container } from "./container-a7123293.js";
import { P as Pagination } from "./pagination-eab0ce12.js";
import { b as buttonVariants } from "./button-e2a7e3d3.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "lucide-react";
import "./breadcrumb-b90f2dbf.js";
import "@radix-ui/react-slot";
import "./utils-186374bb.js";
import "clsx";
import "tailwind-merge";
import "./logo-360047b4.js";
import "sweetalert2";
import "./image-0458d8cd.js";
import "framer-motion";
import "react-lazy-load";
import "react-floating-whatsapp";
import "./footer-5dc05f52.js";
import "./dropdown-menu-c2181ec7.js";
import "@radix-ui/react-dropdown-menu";
import "./sheet-6d41fe2c.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@irsyadadl/paranoid";
import "./theme-provider-b3598db8.js";
import "./lodash-d8bc076d.js";
import "./command-1156986d.js";
import "cmdk";
import "./dialog-20065758.js";
import "axios";
import "usehooks-ts";
import "./avatar-fff64a18.js";
import "@radix-ui/react-avatar";
import "./label-4839c48b.js";
import "@radix-ui/react-label";
import "./input-6fbce247.js";
import "./checkbox-b75be4ac.js";
import "@radix-ui/react-checkbox";
import "./phone-input-d483b92f.js";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-7b9a4e5c.js";
import "@radix-ui/react-popover";
import "./scroll-area-4a6b9ba2.js";
import "@radix-ui/react-scroll-area";
import "sonner";
function PublicationIndex() {
  const { auth, publications, filters, sdgs } = usePage().props;
  const [search, setSearch] = useState(filters.search || "");
  const [sdg, setSdg] = useState(filters.sdg || "");
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    router.get("/publications", { search, sdg });
  };
  const handleReset = () => {
    setSearch("");
    setSdg("");
    router.get("/publications", { search: "", sdg: "" });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Publication" }),
    /* @__PURE__ */ jsx(Header, { title: "Publication", subtitle: "All research related to SDGs" }),
    /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsx(
        Breadcrumb,
        {
          links: [
            { label: "Home", url: "/" },
            { label: "Publications", url: "/publications" }
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto lg:py-14", children: [
        /* @__PURE__ */ jsx("form", { onSubmit: handleFilterSubmit, className: "mb-6 space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Search publications or author name...",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              className: "p-2 border border-gray-300 rounded-md w-full md:w-1/3"
            }
          ),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: sdg,
              onChange: (e) => setSdg(e.target.value),
              className: "p-2 border border-gray-300 rounded-md w-full md:w-1/3",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "All SDGs" }),
                sdgs.map((sdgItem) => /* @__PURE__ */ jsx("option", { value: sdgItem.id, children: sdgItem.name }, sdgItem.id))
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("button", { type: "submit", className: buttonVariants("primary"), children: "Apply Filters" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: handleReset,
                className: buttonVariants("secondary"),
                children: "Reset"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-12", children: [
          publications.data.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-6", children: publications.data.map((item) => /* @__PURE__ */ jsxs("div", { className: "p-4 bg-gray-100 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: item.title }),
            /* @__PURE__ */ jsxs("p", { className: "text-gray-500 mb-3", children: [
              item.experts && item.experts.length > 0 ? item.experts.map((expert) => expert.name).join(", ") : "",
              item.year && (item.experts && item.experts.length > 0 ? ` • ${item.year}` : item.year)
            ] }),
            item.link && /* @__PURE__ */ jsx(
              "a",
              {
                href: item.link,
                target: "_blank",
                rel: "noopener noreferrer",
                className: buttonVariants("primary"),
                children: "View Publication"
              }
            )
          ] }, item.id)) }) : /* @__PURE__ */ jsx("p", { children: "No publication found." }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ jsx(Pagination, { links: publications.links }) })
        ] })
      ] })
    ] })
  ] });
}
PublicationIndex.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  PublicationIndex as default
};
