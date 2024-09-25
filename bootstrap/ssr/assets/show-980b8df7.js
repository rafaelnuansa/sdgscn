import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { usePage, Head } from "@inertiajs/react";
import { H as Header, B as Breadcrumb } from "./header-3b193594.js";
import { A as AppLayout } from "./app-layout-ec137134.js";
import { C as Container } from "./container-a7123293.js";
import { I as Image } from "./image-0458d8cd.js";
import moment from "moment";
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
import "react-lazy-load";
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
import "framer-motion";
function ArticleShow() {
  const { article, recentPosts } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: article.title }),
    /* @__PURE__ */ jsx(
      Header,
      {
        title: article.title
      }
    ),
    /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsx(
        Breadcrumb,
        {
          links: [
            { label: "Home", url: "/" },
            { label: "Articles", url: "/articles" },
            { label: article.title, url: `/articles/${article.slug}` }
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mx-auto lg:py-14", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "prose max-w-none", children: [
          /* @__PURE__ */ jsx(
            Image,
            {
              skeletonHeight: "40",
              className: "w-full h-auto max-h-[500px] shadow object-cover rounded-lg border shadow-lg",
              src: `/storage/articles/${article.image}`,
              alt: article.title
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
            "div",
            {
              dangerouslySetInnerHTML: { __html: article.content }
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4", children: "Recents Posts" }),
          /* @__PURE__ */ jsx("ul", { children: recentPosts.map((post) => /* @__PURE__ */ jsxs("li", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("a", { href: `/articles/${post.slug}`, className: "font-semibold hover:underline", children: post.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: moment(post.created_at).format("DD MMMM YYYY") })
          ] }, post.id)) })
        ] })
      ] }) })
    ] })
  ] });
}
ArticleShow.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  ArticleShow as default
};
