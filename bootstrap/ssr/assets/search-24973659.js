import { a as jsx, F as Fragment, j as jsxs } from "../ssr.js";
import { useState } from "react";
import { router } from "@inertiajs/react";
import { I as Input } from "./input-e2af5f4c.js";
import { B as Button } from "./button-c70c5ef8.js";
import { IconSearch } from "@irsyadadl/paranoid";
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
export {
  Search as S
};
