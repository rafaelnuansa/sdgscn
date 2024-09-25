import { a as jsx, j as jsxs } from "../ssr.js";
import "react";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-47544d29.js";
import { Link } from "@inertiajs/react";
import "./button-e2a7e3d3.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-fff64a18.js";
import { f as formatDate } from "./utils-186374bb.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuLabel, d as DropdownMenuSeparator, e as DropdownMenuItem, f as DropdownMenuGroup } from "./dropdown-menu-c2181ec7.js";
import { IconDotsVertical } from "@irsyadadl/paranoid";
import { A as AlertAction } from "./alert-action-4ffceca7.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-avatar";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "@radix-ui/react-alert-dialog";
function UserTable({ users, handleUserDelete }) {
  if (users.length === 0) {
    return /* @__PURE__ */ jsx("p", { children: "No users found" });
  }
  return /* @__PURE__ */ jsxs(Table, { children: [
    /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableHead, { children: "Avatar" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Name" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Email" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Level" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Created" }),
      /* @__PURE__ */ jsx(TableHead, {})
    ] }) }),
    /* @__PURE__ */ jsx(TableBody, { children: users.length > 0 && users.map((user) => /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(Avatar, { children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-w-1 aspect-h-1", children: /* @__PURE__ */ jsx(AvatarImage, { src: user.gravatar, alt: user.name, className: "h-full w-full rounded-lg object-cover" }) }),
        /* @__PURE__ */ jsx(AvatarFallback, { children: user.initial })
      ] }) }),
      /* @__PURE__ */ jsx(TableCell, { children: user.name }),
      /* @__PURE__ */ jsx(TableCell, { children: user.email }),
      /* @__PURE__ */ jsx(TableCell, { children: user.is_admin ? "Admin" : "Customer" }),
      /* @__PURE__ */ jsx(TableCell, { children: formatDate(user.created_at) }),
      /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(IconDotsVertical, { className: "size-4" }) }),
        /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [
          /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Actions" }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("admin.users.edit", [user]), children: "Edit" }) }),
          /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [
            /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
            /* @__PURE__ */ jsx(
              AlertAction,
              {
                trigger: /* @__PURE__ */ jsx(
                  DropdownMenuItem,
                  {
                    onSelect: (e) => e.preventDefault(),
                    children: "Delete"
                  }
                ),
                title: "Delete User",
                description: "Are you sure you want to delete this User?",
                action: () => handleUserDelete(user.id)
              }
            )
          ] })
        ] })
      ] }) }) })
    ] }, user.id)) })
  ] });
}
export {
  UserTable as default
};
