import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useState } from "react";
import { usePage, Head, router } from "@inertiajs/react";
import { H as Header, B as Breadcrumb } from "./header-86c2f0f6.js";
import { A as AppLayout } from "./app-layout-dd331cc4.js";
import { C as Container } from "./container-a7123293.js";
import { P as Pagination } from "./pagination-59c80907.js";
import { b as buttonVariants } from "./button-ef56bd5e.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "lucide-react";
import "./breadcrumb-a9b848df.js";
import "@radix-ui/react-slot";
import "./utils-fa5dc5b8.js";
import "clsx";
import "tailwind-merge";
import "./logo-70150b74.js";
import "sweetalert2";
import "./image-50b4b38d.js";
import "framer-motion";
import "react-lazy-load";
import "react-floating-whatsapp";
import "./footer-775d67cf.js";
import "./dropdown-menu-fef2e637.js";
import "@radix-ui/react-dropdown-menu";
import "./sheet-8bf1694f.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@irsyadadl/paranoid";
import "./theme-provider-b3598db8.js";
import "./lodash-d8bc076d.js";
import "./command-3c1526d0.js";
import "cmdk";
import "./dialog-bc7d8a74.js";
import "axios";
import "usehooks-ts";
import "./avatar-f336b458.js";
import "@radix-ui/react-avatar";
import "./label-22b65785.js";
import "@radix-ui/react-label";
import "./logo-dark-fd798013.js";
import "./input-05b98463.js";
import "./checkbox-75ff73a5.js";
import "@radix-ui/react-checkbox";
import "./phone-input-bee968be.js";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-0590da32.js";
import "@radix-ui/react-popover";
import "./scroll-area-db838748.js";
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
              placeholder: "Search publications...",
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
              item.author,
              ", ",
              item.year || "N/A"
            ] }),
            item.link && /* @__PURE__ */ jsx(
              "a",
              {
                href: item.link,
                target: "_blank",
                rel: "noopener noreferrer",
                className: buttonVariants("primary"),
                children: "View"
              }
            )
          ] }, item.id)) }) : /* @__PURE__ */ jsx("p", { children: "No publications found." }),
          /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(Pagination, { links: publications.links }) })
        ] })
      ] })
    ] })
  ] });
}
PublicationIndex.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  PublicationIndex as default
};
