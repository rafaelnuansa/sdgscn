import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { usePage, Head } from "@inertiajs/react";
import { H as Header, B as Breadcrumb } from "./header-86c2f0f6.js";
import { A as AppLayout } from "./app-layout-dd331cc4.js";
import { C as Container } from "./container-a7123293.js";
import { I as Image } from "./image-50b4b38d.js";
import moment from "moment";
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
import "framer-motion";
import "react-lazy-load";
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
