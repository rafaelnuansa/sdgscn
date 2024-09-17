import { j as jsxs, a as jsx } from "../ssr.js";
import { usePage, router } from "@inertiajs/react";
import { useState } from "react";
import { A as AdminLayout } from "./admin-layout-a706b491.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from "./card-43a93659.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-ae2d1520.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-813451e6.js";
import { C as Checkbox } from "./checkbox-da69a68e.js";
import { B as Button } from "./button-c70c5ef8.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "clsx";
import "./image-facc74b1.js";
import "framer-motion";
import "react-lazy-load";
import "./utils-38e41470.js";
import "tailwind-merge";
import "./scroll-area-9ef3b685.js";
import "@radix-ui/react-scroll-area";
import "@irsyadadl/paranoid";
import "./avatar-d5a71c43.js";
import "@radix-ui/react-avatar";
import "./command-d3e20674.js";
import "cmdk";
import "lucide-react";
import "./dialog-d3517b83.js";
import "@radix-ui/react-dialog";
import "./sonner-a166e9e0.js";
import "next-themes";
import "sonner";
import "./sheet-c59fdc39.js";
import "class-variance-authority";
import "./dropdown-menu-4ccafc02.js";
import "@radix-ui/react-dropdown-menu";
import "./label-3e67e23b.js";
import "@radix-ui/react-label";
import "recoil";
import "@radix-ui/react-select";
import "@radix-ui/react-checkbox";
import "@radix-ui/react-slot";
function HomeContentIndex() {
  const { homeContents, categories } = usePage().props;
  const [formData, setFormData] = useState(() => {
    const initialFormData = {};
    categories.forEach((category) => {
      const existingContent = homeContents.find((content) => content.package_category_id === category.id);
      initialFormData[category.id] = existingContent || {
        package_category_id: category.id,
        sort_column: "name",
        sort_order: "asc",
        is_active: !!existingContent
      };
    });
    return initialFormData;
  });
  const handleChange = (categoryId, field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [categoryId]: {
        ...prevState[categoryId],
        [field]: value
      }
    }));
  };
  const handleUpdate = () => {
    const data = Object.values(formData).map((content) => ({
      package_category_id: content.package_category_id,
      sort_column: content.sort_column,
      sort_order: content.sort_order,
      is_active: content.is_active
    }));
    router.post(route("admin.home_contents.update"), { data });
  };
  const sortColumnOptions = [
    "created_at",
    "name",
    "price",
    "rate",
    "day"
  ];
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "bg-muted/20 border-b", children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "Konten Home" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Pilih konten berdasarkan kategori untuk ditampilkan di home" })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableHead, { children: "Category" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Sort Column" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Sort Order" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Is Active" })
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: categories.map((category) => /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableCell, { children: category.name }),
        /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(
          Select,
          {
            value: formData[category.id].sort_column,
            onValueChange: (e) => handleChange(category.id, "sort_column", e),
            children: [
              /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { children: formData[category.id].sort_column }) }),
              /* @__PURE__ */ jsx(SelectContent, { children: sortColumnOptions.map((option) => /* @__PURE__ */ jsx(SelectItem, { value: option, children: option }, option)) })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(
          Select,
          {
            value: formData[category.id].sort_order,
            onValueChange: (e) => handleChange(category.id, "sort_order", e),
            children: [
              /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { children: formData[category.id].sort_order }) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "asc", children: "Ascending" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "desc", children: "Descending" })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
          Checkbox,
          {
            checked: formData[category.id].is_active,
            onCheckedChange: (e) => handleChange(category.id, "is_active", e)
          }
        ) })
      ] }, category.id)) })
    ] }) }),
    /* @__PURE__ */ jsx(CardFooter, { className: "border-t pt-5 bg-muted/40", children: /* @__PURE__ */ jsx(Button, { variant: "default", onClick: handleUpdate, children: "Save Changes" }) })
  ] });
}
HomeContentIndex.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { title: "Pengaturan Home", children: page });
export {
  HomeContentIndex as default
};
