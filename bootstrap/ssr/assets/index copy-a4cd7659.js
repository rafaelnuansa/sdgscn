import { a as jsx, j as jsxs } from "../ssr.js";
import { DollarSign, Users, CreditCard, Activity, ArrowUpRight } from "lucide-react";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-f336b458.js";
import { B as Badge } from "./badge-68f4f9eb.js";
import { B as Button } from "./button-ef56bd5e.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, c as CardDescription } from "./card-f706282b.js";
import "./dropdown-menu-fef2e637.js";
import "./input-05b98463.js";
import "./sheet-8bf1694f.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-4b5e7891.js";
import { Link } from "@inertiajs/react";
import "@irsyadadl/paranoid";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "@radix-ui/react-avatar";
import "./utils-fa5dc5b8.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-dialog";
function Dashboard() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen w-full flex-col", children: /* @__PURE__ */ jsxs("main", { className: "flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs(Card, { "x-chunk": "dashboard-01-chunk-0", children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total Revenue" }),
          /* @__PURE__ */ jsx(DollarSign, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: "$45,231.89" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "+20.1% from last month" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { "x-chunk": "dashboard-01-chunk-1", children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Subscriptions" }),
          /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: "+2350" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "+180.1% from last month" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { "x-chunk": "dashboard-01-chunk-2", children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Sales" }),
          /* @__PURE__ */ jsx(CreditCard, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: "+12,234" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "+19% from last month" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { "x-chunk": "dashboard-01-chunk-3", children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Active Now" }),
          /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: "+573" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "+201 since last hour" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3", children: [
      /* @__PURE__ */ jsxs(
        Card,
        {
          className: "xl:col-span-2",
          "x-chunk": "dashboard-01-chunk-4",
          children: [
            /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsx(CardTitle, { children: "Transactions" }),
                /* @__PURE__ */ jsx(CardDescription, { children: "Recent transactions from your store." })
              ] }),
              /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", className: "ml-auto gap-1", children: /* @__PURE__ */ jsxs(Link, { href: "#", children: [
                "View All",
                /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Table, { children: [
              /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
                /* @__PURE__ */ jsx(TableHead, { children: "Customer" }),
                /* @__PURE__ */ jsx(TableHead, { className: "hidden xl:table-column", children: "Type" }),
                /* @__PURE__ */ jsx(TableHead, { className: "hidden xl:table-column", children: "Status" }),
                /* @__PURE__ */ jsx(TableHead, { className: "hidden xl:table-column", children: "Date" }),
                /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Amount" })
              ] }) }),
              /* @__PURE__ */ jsxs(TableBody, { children: [
                /* @__PURE__ */ jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxs(TableCell, { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Liam Johnson" }),
                    /* @__PURE__ */ jsx("div", { className: "hidden text-sm text-muted-foreground md:inline", children: "liam@example.com" })
                  ] }),
                  /* @__PURE__ */ jsx(TableCell, { className: "hidden xl:table-column", children: "Sale" }),
                  /* @__PURE__ */ jsx(TableCell, { className: "hidden xl:table-column", children: /* @__PURE__ */ jsx(Badge, { className: "text-xs", variant: "outline", children: "Approved" }) }),
                  /* @__PURE__ */ jsx(TableCell, { className: "hidden md:table-cell lg:hidden xl:table-column", children: "2023-06-23" }),
                  /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: "$250.00" })
                ] }),
                /* @__PURE__ */ jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxs(TableCell, { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Olivia Smith" }),
                    /* @__PURE__ */ jsx("div", { className: "hidden text-sm text-muted-foreground md:inline", children: "olivia@example.com" })
                  ] }),
                  /* @__PURE__ */ jsx(TableCell, { className: "hidden xl:table-column", children: "Refund" }),
                  /* @__PURE__ */ jsx(TableCell, { className: "hidden xl:table-column", children: /* @__PURE__ */ jsx(Badge, { className: "text-xs", variant: "outline", children: "Declined" }) }),
                  /* @__PURE__ */ jsx(TableCell, { className: "hidden md:table-cell lg:hidden xl:table-column", children: "2023-06-24" }),
                  /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: "$150.00" })
                ] }),
                /* @__PURE__ */ jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxs(TableCell, { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Noah Williams" }),
                    /* @__PURE__ */ jsx("div", { className: "hidden text-sm text-muted-foreground md:inline", children: "noah@example.com" })
                  ] }),
                  /* @__PURE__ */ jsx(TableCell, { className: "hidden xl:table-column", children: "Subscription" }),
                  /* @__PURE__ */ jsx(TableCell, { className: "hidden xl:table-column", children: /* @__PURE__ */ jsx(Badge, { className: "text-xs", variant: "outline", children: "Approved" }) }),
                  /* @__PURE__ */ jsx(TableCell, { className: "hidden md:table-cell lg:hidden xl:table-column", children: "2023-06-25" }),
                  /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: "$350.00" })
                ] }),
                /* @__PURE__ */ jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxs(TableCell, { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Emma Brown" }),
                    /* @__PURE__ */ jsx("div", { className: "hidden text-sm text-muted-foreground md:inline", children: "emma@example.com" })
                  ] }),
                  /* @__PURE__ */ jsx(TableCell, { className: "hidden xl:table-column", children: "Sale" }),
                  /* @__PURE__ */ jsx(TableCell, { className: "hidden xl:table-column", children: /* @__PURE__ */ jsx(Badge, { className: "text-xs", variant: "outline", children: "Approved" }) }),
                  /* @__PURE__ */ jsx(TableCell, { className: "hidden md:table-cell lg:hidden xl:table-column", children: "2023-06-26" }),
                  /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: "$450.00" })
                ] }),
                /* @__PURE__ */ jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxs(TableCell, { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Liam Johnson" }),
                    /* @__PURE__ */ jsx("div", { className: "hidden text-sm text-muted-foreground md:inline", children: "liam@example.com" })
                  ] }),
                  /* @__PURE__ */ jsx(TableCell, { className: "hidden xl:table-column", children: "Sale" }),
                  /* @__PURE__ */ jsx(TableCell, { className: "hidden xl:table-column", children: /* @__PURE__ */ jsx(Badge, { className: "text-xs", variant: "outline", children: "Approved" }) }),
                  /* @__PURE__ */ jsx(TableCell, { className: "hidden md:table-cell lg:hidden xl:table-column", children: "2023-06-27" }),
                  /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: "$550.00" })
                ] })
              ] })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(Card, { "x-chunk": "dashboard-01-chunk-5", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Recent Sales" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "grid gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs(Avatar, { className: "hidden h-9 w-9 sm:flex", children: [
              /* @__PURE__ */ jsx(AvatarImage, { src: "/avatars/01.png", alt: "Avatar" }),
              /* @__PURE__ */ jsx(AvatarFallback, { children: "OM" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium leading-none", children: "Olivia Martin" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "olivia.martin@email.com" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "ml-auto font-medium", children: "+$1,999.00" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs(Avatar, { className: "hidden h-9 w-9 sm:flex", children: [
              /* @__PURE__ */ jsx(AvatarImage, { src: "/avatars/02.png", alt: "Avatar" }),
              /* @__PURE__ */ jsx(AvatarFallback, { children: "JL" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium leading-none", children: "Jackson Lee" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "jackson.lee@email.com" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "ml-auto font-medium", children: "+$39.00" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs(Avatar, { className: "hidden h-9 w-9 sm:flex", children: [
              /* @__PURE__ */ jsx(AvatarImage, { src: "/avatars/03.png", alt: "Avatar" }),
              /* @__PURE__ */ jsx(AvatarFallback, { children: "IN" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium leading-none", children: "Isabella Nguyen" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "isabella.nguyen@email.com" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "ml-auto font-medium", children: "+$299.00" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs(Avatar, { className: "hidden h-9 w-9 sm:flex", children: [
              /* @__PURE__ */ jsx(AvatarImage, { src: "/avatars/04.png", alt: "Avatar" }),
              /* @__PURE__ */ jsx(AvatarFallback, { children: "WK" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium leading-none", children: "William Kim" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "will@email.com" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "ml-auto font-medium", children: "+$99.00" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs(Avatar, { className: "hidden h-9 w-9 sm:flex", children: [
              /* @__PURE__ */ jsx(AvatarImage, { src: "/avatars/05.png", alt: "Avatar" }),
              /* @__PURE__ */ jsx(AvatarFallback, { children: "SD" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium leading-none", children: "Sofia Davis" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "sofia.davis@email.com" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "ml-auto font-medium", children: "+$39.00" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Dashboard as default
};
