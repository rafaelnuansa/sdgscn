import { a as jsx, j as jsxs } from "../ssr.js";
import * as React from "react";
import { Command as Command$1 } from "cmdk";
import { Search } from "lucide-react";
import { d as cn } from "./utils-38e41470.js";
import { D as Dialog, b as DialogContent } from "./dialog-d3517b83.js";
const Command = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = Command$1.displayName;
const CommandDialog = ({
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsx(Dialog, { ...props, children: /* @__PURE__ */ jsx(DialogContent, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ jsx(
    Command,
    {
      className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
      children
    }
  ) }) });
};
const CommandInput = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsx(
    Command$1.Input,
    {
      ref,
      className: cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = Command$1.Input.displayName;
const CommandList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = Command$1.List.displayName;
const CommandEmpty = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(Command$1.Empty, { ref, className: "py-6 text-center text-sm", ...props }));
CommandEmpty.displayName = Command$1.Empty.displayName;
const CommandGroup = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = Command$1.Group.displayName;
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Command$1.Separator, { ref, className: cn("-mx-1 h-px bg-border", className), ...props }));
CommandSeparator.displayName = Command$1.Separator.displayName;
const CommandItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = Command$1.Item.displayName;
export {
  Command as C,
  CommandList as a,
  CommandInput as b,
  CommandEmpty as c,
  CommandGroup as d,
  CommandItem as e,
  CommandDialog as f
};
