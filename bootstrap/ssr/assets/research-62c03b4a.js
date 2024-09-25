import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { usePage, Head } from "@inertiajs/react";
import { H as Header, B as Breadcrumb } from "./header-86c2f0f6.js";
import { A as AppLayout } from "./app-layout-dd331cc4.js";
import { C as Container } from "./container-a7123293.js";
import { P as Pagination } from "./pagination-59c80907.js";
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
import "./button-ef56bd5e.js";
import "class-variance-authority";
import "./sheet-8bf1694f.js";
import "@radix-ui/react-dialog";
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
function ResearchIndex() {
  const { auth, researches } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Research" }),
    /* @__PURE__ */ jsx(Header, { title: "Research", subtitle: "All research related to SDGs" }),
    /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsx(
        Breadcrumb,
        {
          links: [
            { label: "Home", url: "/" },
            { label: "Sdgs", url: "/sdgs" },
            { label: "Research", url: "/sdgs/research" }
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mx-auto lg:py-14", children: /* @__PURE__ */ jsx("div", { className: "grid gap-10 md:grid-cols-12", children: /* @__PURE__ */ jsxs("div", { className: "md:col-span-12", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: researches.data.length > 0 ? researches.data.map((item) => /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white shadow rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: item.title }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-500", children: [
            "Author: ",
            item.author
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-500", children: [
            "Year: ",
            item.year || "N/A"
          ] }),
          item.link && /* @__PURE__ */ jsx("a", { href: item.link, target: "_blank", rel: "noopener noreferrer", className: "text-blue-500 hover:underline", children: "View Research" })
        ] }, item.id)) : /* @__PURE__ */ jsx("p", { children: "No research found." }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(Pagination, { links: researches.links }) })
      ] }) }) })
    ] })
  ] });
}
ResearchIndex.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  ResearchIndex as default
};
