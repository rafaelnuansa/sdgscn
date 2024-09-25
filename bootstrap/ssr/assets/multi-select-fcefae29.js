import { a as jsx, j as jsxs, F as Fragment } from "../ssr.js";
import * as React from "react";
import { cva } from "class-variance-authority";
import { XCircle, XIcon, ChevronDown, CheckIcon, Wand } from "lucide-react";
import { c as cn } from "./utils-186374bb.js";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { B as Button } from "./button-e2a7e3d3.js";
import { B as Badge } from "./badge-520453d1.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-7b9a4e5c.js";
import { C as Command, b as CommandInput, a as CommandList, c as CommandEmpty, d as CommandGroup, e as CommandItem, f as CommandSeparator } from "./command-1156986d.js";
const Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
  SeparatorPrimitive.Root,
  {
    ref,
    decorative,
    orientation,
    className: cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    ),
    ...props
  }
));
Separator.displayName = SeparatorPrimitive.Root.displayName;
const multiSelectVariants = cva(
  "m-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
  {
    variants: {
      variant: {
        default: "border-foreground/10 text-foreground bg-card hover:bg-card/80",
        secondary: "border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        inverted: "inverted"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const MultiSelect = React.forwardRef(
  ({
    options,
    onValueChange,
    variant,
    defaultValue = [],
    placeholder = "Select options",
    animation = 0,
    maxCount = 3,
    modalPopover = false,
    asChild = false,
    className,
    ...props
  }, ref) => {
    const [selectedValues, setSelectedValues] = React.useState(defaultValue);
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const handleInputKeyDown = (event) => {
      if (event.key === "Enter") {
        setIsPopoverOpen(true);
      } else if (event.key === "Backspace" && !event.currentTarget.value) {
        const newSelectedValues = [...selectedValues];
        newSelectedValues.pop();
        setSelectedValues(newSelectedValues);
        onValueChange(newSelectedValues);
      }
    };
    const toggleOption = (option) => {
      const newSelectedValues = selectedValues.includes(option) ? selectedValues.filter((value) => value !== option) : [...selectedValues, option];
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
    };
    const handleClear = () => {
      setSelectedValues([]);
      onValueChange([]);
    };
    const handleTogglePopover = () => {
      setIsPopoverOpen((prev) => !prev);
    };
    const clearExtraOptions = () => {
      const newSelectedValues = selectedValues.slice(0, maxCount);
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
    };
    const toggleAll = () => {
      if (selectedValues.length === options.length) {
        handleClear();
      } else {
        const allValues = options.map((option) => option.value);
        setSelectedValues(allValues);
        onValueChange(allValues);
      }
    };
    return /* @__PURE__ */ jsxs(
      Popover,
      {
        open: isPopoverOpen,
        onOpenChange: setIsPopoverOpen,
        modal: modalPopover,
        children: [
          /* @__PURE__ */ jsx(
            PopoverTrigger,
            {
              ref,
              ...props,
              onClick: handleTogglePopover,
              className: cn(
                "flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between bg-inherit hover:bg-inherit",
                className
              ),
              asChild: true,
              children: /* @__PURE__ */ jsx(
                Button,
                {
                  children: selectedValues.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center w-full", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center", children: [
                      selectedValues.slice(0, maxCount).map((value) => {
                        const option = options.find((o) => o.value === value);
                        const IconComponent = option == null ? void 0 : option.icon;
                        return /* @__PURE__ */ jsxs(
                          Badge,
                          {
                            className: cn(
                              isAnimating ? "animate-bounce" : "",
                              multiSelectVariants({ variant })
                            ),
                            style: { animationDuration: `${animation}s` },
                            children: [
                              IconComponent && /* @__PURE__ */ jsx(IconComponent, { className: "h-4 w-4 mr-2" }),
                              option == null ? void 0 : option.label,
                              /* @__PURE__ */ jsx(
                                XCircle,
                                {
                                  className: "ml-2 h-4 w-4 cursor-pointer",
                                  onClick: (event) => {
                                    event.stopPropagation();
                                    toggleOption(value);
                                  }
                                }
                              )
                            ]
                          },
                          value
                        );
                      }),
                      selectedValues.length > maxCount && /* @__PURE__ */ jsxs(
                        Badge,
                        {
                          className: cn(
                            "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                            isAnimating ? "animate-bounce" : "",
                            multiSelectVariants({ variant })
                          ),
                          style: { animationDuration: `${animation}s` },
                          children: [
                            `+ ${selectedValues.length - maxCount} more`,
                            /* @__PURE__ */ jsx(
                              XCircle,
                              {
                                className: "ml-2 h-4 w-4 cursor-pointer",
                                onClick: (event) => {
                                  event.stopPropagation();
                                  clearExtraOptions();
                                }
                              }
                            )
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx(
                        XIcon,
                        {
                          className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                          onClick: (event) => {
                            event.stopPropagation();
                            handleClear();
                          }
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Separator,
                        {
                          orientation: "vertical",
                          className: "flex min-h-6 h-full"
                        }
                      ),
                      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                    ] })
                  ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground mx-3", children: placeholder }),
                    /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
                  ] })
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            PopoverContent,
            {
              className: "w-auto p-0",
              align: "start",
              onEscapeKeyDown: () => setIsPopoverOpen(false),
              children: /* @__PURE__ */ jsxs(Command, { children: [
                /* @__PURE__ */ jsx(
                  CommandInput,
                  {
                    placeholder: "Search...",
                    onKeyDown: handleInputKeyDown
                  }
                ),
                /* @__PURE__ */ jsxs(CommandList, { children: [
                  /* @__PURE__ */ jsx(CommandEmpty, { children: "No results found." }),
                  /* @__PURE__ */ jsxs(CommandGroup, { children: [
                    /* @__PURE__ */ jsxs(
                      CommandItem,
                      {
                        onSelect: toggleAll,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ jsx(
                            "div",
                            {
                              className: cn(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                selectedValues.length === options.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ jsx("span", { children: "(Select All)" })
                        ]
                      },
                      "all"
                    ),
                    options.map((option) => {
                      const isSelected = selectedValues.includes(option.value);
                      return /* @__PURE__ */ jsxs(
                        CommandItem,
                        {
                          onSelect: () => toggleOption(option.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: cn(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                  isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-4 w-4" })
                              }
                            ),
                            option.icon && /* @__PURE__ */ jsx(option.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                            /* @__PURE__ */ jsx("span", { children: option.label })
                          ]
                        },
                        option.value
                      );
                    })
                  ] }),
                  /* @__PURE__ */ jsx(CommandSeparator, {}),
                  /* @__PURE__ */ jsx(CommandGroup, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    selectedValues.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx(
                        CommandItem,
                        {
                          onSelect: handleClear,
                          className: "flex-1 justify-center cursor-pointer",
                          children: "Clear"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Separator,
                        {
                          orientation: "vertical",
                          className: "flex min-h-6 h-full"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx(
                      CommandItem,
                      {
                        onSelect: () => setIsPopoverOpen(false),
                        className: "flex-1 justify-center cursor-pointer max-w-full",
                        children: "Close"
                      }
                    )
                  ] }) })
                ] })
              ] })
            }
          ),
          animation > 0 && selectedValues.length > 0 && /* @__PURE__ */ jsx(
            Wand,
            {
              className: cn(
                "cursor-pointer my-2 text-foreground",
                isAnimating ? "animate-spin" : ""
              ),
              onClick: () => setIsAnimating((prev) => !prev)
            }
          )
        ]
      }
    );
  }
);
MultiSelect.displayName = "MultiSelect";
export {
  MultiSelect as M
};
