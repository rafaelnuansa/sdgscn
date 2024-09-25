import { a as jsx, j as jsxs } from "../ssr.js";
import { ChevronsUpDown, CheckIcon } from "lucide-react";
import React__default, { forwardRef } from "react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { B as Button } from "./button-e2a7e3d3.js";
import { C as Command, a as CommandList, b as CommandInput, c as CommandEmpty, d as CommandGroup, e as CommandItem } from "./command-1156986d.js";
import { I as Input } from "./input-6fbce247.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-7b9a4e5c.js";
import { c as cn } from "./utils-186374bb.js";
import { S as ScrollArea } from "./scroll-area-4a6b9ba2.js";
const PhoneInput = forwardRef(
  ({
    className,
    onChange,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      RPNInput.default,
      {
        ref,
        className: cn("flex", className),
        flagComponent: FlagComponent,
        countrySelectComponent: CountrySelect,
        inputComponent: InputComponent,
        onChange: (value) => onChange == null ? void 0 : onChange(value || ""),
        ...props
      }
    );
  }
);
PhoneInput.displayName = "PhoneInput";
const InputComponent = forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    Input,
    {
      className: cn("rounded-e-lg rounded-s-none", className),
      ...props,
      ref
    }
  )
);
InputComponent.displayName = "InputComponent";
const CountrySelect = ({
  disabled,
  value,
  onChange,
  options
}) => {
  const handleSelect = React__default.useCallback(
    (country) => {
      onChange(country);
    },
    [onChange]
  );
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        type: "button",
        variant: "outline",
        className: cn("flex gap-1 rounded-e-none rounded-s-lg px-3"),
        disabled,
        children: [
          /* @__PURE__ */ jsx(FlagComponent, { country: value, countryName: value }),
          /* @__PURE__ */ jsx(
            ChevronsUpDown,
            {
              className: cn(
                "-mr-2 h-4 w-4 opacity-50",
                disabled ? "hidden" : "opacity-100"
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-[300px] p-0", children: /* @__PURE__ */ jsx(Command, { children: /* @__PURE__ */ jsx(CommandList, { children: /* @__PURE__ */ jsxs(ScrollArea, { className: "h-72", children: [
      /* @__PURE__ */ jsx(CommandInput, { placeholder: "Search country..." }),
      /* @__PURE__ */ jsx(CommandEmpty, { children: "No country found." }),
      /* @__PURE__ */ jsx(CommandGroup, { children: options.filter((x) => x.value).map((option) => /* @__PURE__ */ jsxs(
        CommandItem,
        {
          className: "gap-2",
          onSelect: () => handleSelect(option.value),
          children: [
            /* @__PURE__ */ jsx(
              FlagComponent,
              {
                country: option.value,
                countryName: option.label
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "flex-1 text-sm", children: option.label }),
            option.value && /* @__PURE__ */ jsx("span", { className: "text-foreground/50 text-sm", children: `+${RPNInput.getCountryCallingCode(option.value)}` }),
            /* @__PURE__ */ jsx(
              CheckIcon,
              {
                className: cn(
                  "ml-auto h-4 w-4",
                  option.value === value ? "opacity-100" : "opacity-0"
                )
              }
            )
          ]
        },
        option.value
      )) })
    ] }) }) }) })
  ] });
};
const FlagComponent = ({ country, countryName }) => {
  const Flag = flags[country];
  return /* @__PURE__ */ jsx("span", { className: "bg-foreground/20 flex h-4 w-6 overflow-hidden rounded-sm", children: Flag && /* @__PURE__ */ jsx(Flag, { title: countryName }) });
};
FlagComponent.displayName = "FlagComponent";
export {
  PhoneInput as P
};
