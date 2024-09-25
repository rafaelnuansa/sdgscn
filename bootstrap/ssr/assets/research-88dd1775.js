import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { usePage, Head } from "@inertiajs/react";
import { H as Header, B as Breadcrumb } from "./header-3b193594.js";
import { A as AppLayout } from "./app-layout-ec137134.js";
import { C as Container } from "./container-a7123293.js";
import { P as Pagination } from "./pagination-eab0ce12.js";
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
import "./button-e2a7e3d3.js";
import "class-variance-authority";
import "./sheet-6d41fe2c.js";
import "@radix-ui/react-dialog";
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
