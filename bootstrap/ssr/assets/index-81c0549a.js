import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useState } from "react";
import { usePage, Head } from "@inertiajs/react";
import { P as Pagination } from "./pagination-59c80907.js";
import BookingCard from "./booking-card-a4ac67f0.js";
import "@irsyadadl/paranoid";
import { L as Layout } from "./layout-9535c5e2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-f706282b.js";
import { I as Input } from "./input-05b98463.js";
import { u as useFilter } from "./useFilter-40e5ac53.js";
import { L as Label } from "./label-22b65785.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./button-ef56bd5e.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-fa5dc5b8.js";
import "clsx";
import "tailwind-merge";
import "./image-50b4b38d.js";
import "framer-motion";
import "react-lazy-load";
import "./badge-68f4f9eb.js";
import "./logo-70150b74.js";
import "sweetalert2";
import "./avatar-f336b458.js";
import "@radix-ui/react-avatar";
import "./command-3c1526d0.js";
import "cmdk";
import "lucide-react";
import "./dialog-bc7d8a74.js";
import "@radix-ui/react-dialog";
import "./theme-provider-b3598db8.js";
import "./sheet-6fce3cff.js";
import "./dropdown-menu-fef2e637.js";
import "@radix-ui/react-dropdown-menu";
import "./lodash-d8bc076d.js";
import "@radix-ui/react-label";
function BookingIndex() {
  const {
    auth,
    bookings,
    user,
    booking_pending,
    booking_completed,
    payment_pending,
    payment_success
  } = usePage().props;
  const [params, setParams] = useState({
    search: "",
    start_date: "",
    end_date: ""
  });
  useFilter({
    route: route("bookings.index"),
    values: params,
    only: ["bookings"]
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setParams((prevParams) => ({
      ...prevParams,
      [id]: value
    }));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Bookings" }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Transaksi Saya" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Histori Booking saya" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-center md:space-x-4 md:space-y-0 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "search", className: "mb-1", children: "Search" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "text",
              id: "search",
              className: "form-input rounded-md",
              placeholder: "Search...",
              value: params.search,
              onChange: handleChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "start_date", className: "mb-1", children: "Start Date" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "date",
              id: "start_date",
              className: "form-input rounded-md",
              value: params.start_date,
              onChange: handleChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "end_date", className: "mb-1", children: "End Date" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "date",
              id: "end_date",
              className: "form-input rounded-md",
              value: params.end_date,
              onChange: handleChange
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "md:col-span-12", children: [
      /* @__PURE__ */ jsx("div", { className: "mt-8", children: bookings.data.map((booking) => /* @__PURE__ */ jsx(BookingCard, { booking }, booking.id)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(Pagination, { links: bookings.links }) })
    ] }) })
  ] });
}
BookingIndex.layout = (page) => /* @__PURE__ */ jsx(Layout, { title: "Bookings", children: page });
export {
  BookingIndex as default
};
