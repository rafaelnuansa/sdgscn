import { a as jsx, F as Fragment, j as jsxs } from "../ssr.js";
import { useState } from "react";
import { router, usePage, Head, Link } from "@inertiajs/react";
import "./breadcrumb-a9b848df.js";
import "sweetalert2";
import "react-floating-whatsapp";
import { d as formatRupiah, b as formatDateTime } from "./utils-fa5dc5b8.js";
import "react-lazy-load";
import "./dropdown-menu-fef2e637.js";
import { B as Button } from "./button-ef56bd5e.js";
import "./sheet-8bf1694f.js";
import "./theme-provider-b3598db8.js";
import { IconSearch, IconInvoice } from "@irsyadadl/paranoid";
import "./lodash-d8bc076d.js";
import "./command-3c1526d0.js";
import "./avatar-f336b458.js";
import "./label-22b65785.js";
import { I as Input } from "./input-05b98463.js";
import "./dialog-bc7d8a74.js";
import "./checkbox-75ff73a5.js";
import "./phone-input-bee968be.js";
import "sonner";
import "next-themes";
import { P as Pagination } from "./pagination-59c80907.js";
import "./table-4b5e7891.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-f706282b.js";
import "./badge-68f4f9eb.js";
import { L as Layout } from "./layout-9535c5e2.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "cmdk";
import "@radix-ui/react-avatar";
import "@radix-ui/react-label";
import "@radix-ui/react-checkbox";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-0590da32.js";
import "@radix-ui/react-popover";
import "./scroll-area-db838748.js";
import "@radix-ui/react-scroll-area";
import "./logo-70150b74.js";
import "./image-50b4b38d.js";
import "framer-motion";
import "./sheet-6fce3cff.js";
function Search({ URL, placeholder }) {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    router.get(`${URL}?q=${search}`);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("form", { onSubmit: searchHandler, className: "w-full ", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 py-2", children: [
    /* @__PURE__ */ jsx(Input, { type: "text", placeholder, value: search, onChange: (e) => setSearch(e.target.value) }),
    /* @__PURE__ */ jsxs(Button, { variant: "outline", type: "submit", children: [
      /* @__PURE__ */ jsx(IconSearch, { className: "w-4 mr-2" }),
      " Search"
    ] })
  ] }) }) });
}
function PaymentIndex() {
  const { auth, payments } = usePage().props;
  console.log(payments);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Transaksi" }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "md:col-span-12", children: [
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
        Search,
        {
          placeholder: "Cari Transaksi",
          URL: route("payments.index")
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Transaksi" }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Berikut data transaksi pembayaran" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: payments.data.map((payment, index) => {
          var _a, _b, _c;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex flex-col mb-5 gap-4 rounded-lg border p-4 shadow-sm transition-shadow hover:shadow-md",
              children: [
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center font-semibold ", children: [
                    /* @__PURE__ */ jsx(IconInvoice, { className: "mr-2" }),
                    (_a = payment.booking) == null ? void 0 : _a.invoice,
                    " : ",
                    " ",
                    (_b = payment.booking) == null ? void 0 : _b.package.name.toUpperCase()
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-sm font-bold ", children: [
                    formatRupiah(payment == null ? void 0 : payment.amount),
                    " -",
                    " ",
                    payment.status.toUpperCase()
                  ] }),
                  payment.method !== "offline" && /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold ", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                    "Bayar sebelum :",
                    " ",
                    formatDateTime(payment.expiry_time)
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm italic", children: payment.id })
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1  gap-4 md:grid-cols-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "border-r pr-2", children: [
                    /* @__PURE__ */ jsx("h2", { className: "font-medium", children: "Metode Pembayaran" }),
                    /* @__PURE__ */ jsx("p", { className: "font-bold " })
                  ] }),
                  payment.method !== "offline" && /* @__PURE__ */ jsxs("div", { className: "border-r pr-2", children: [
                    /* @__PURE__ */ jsx("h2", { className: "font-medium", children: "Virtual Account" }),
                    /* @__PURE__ */ jsx("p", { className: "font-bold ", children: payment.va_number ?? "" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "pr-2", children: [
                    /* @__PURE__ */ jsx("h2", { className: "font-medium", children: "Total Biaya Booking" }),
                    /* @__PURE__ */ jsx("p", { className: "font-bold ", children: formatRupiah((_c = payment.booking) == null ? void 0 : _c.amount) })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    onProgress: true,
                    href: route("payments.show", payment.id),
                    className: "text-blue-600 hover:underline",
                    children: "Lihat"
                  }
                ) })
              ]
            },
            index
          );
        }) })
      ] }) }),
      /* @__PURE__ */ jsx(Pagination, { links: payments.links })
    ] }) })
  ] });
}
PaymentIndex.layout = (page) => /* @__PURE__ */ jsx(Layout, { title: "Transaksi", children: page });
export {
  PaymentIndex as default
};
