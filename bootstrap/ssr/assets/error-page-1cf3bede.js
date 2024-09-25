import { j as jsxs, a as jsx } from "../ssr.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription } from "./card-f706282b.js";
import { Head } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "./utils-fa5dc5b8.js";
import "clsx";
import "tailwind-merge";
function ErrorPage({ status }) {
  const errorMessages = {
    503: {
      title: "Service Unavailable",
      description: "Sorry, we are doing some maintenance. Please check back soon."
    },
    500: { title: "Server Error", description: "Whoops, something went wrong on our servers." },
    404: { title: "Not Found", description: "Sorry, the page you are looking for could not be found." },
    403: { title: "Forbidden", description: "Sorry, you are forbidden from accessing this page." },
    401: { title: "Unauthorized", description: "Sorry, you are unauthorized to access this page." },
    429: { title: "Too Many Requests", description: "Please try again in just a second." }
  }[status];
  return /* @__PURE__ */ jsxs("div", { className: "grid min-h-screen place-content-center bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Head, { title: errorMessages.title }),
    /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: errorMessages.title }),
      /* @__PURE__ */ jsx(CardDescription, { children: errorMessages.description })
    ] }) })
  ] });
}
export {
  ErrorPage as default
};
