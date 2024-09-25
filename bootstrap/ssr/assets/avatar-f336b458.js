import { a as jsx } from "../ssr.js";
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { c as cn } from "./utils-fa5dc5b8.js";
const Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AvatarPrimitive.Root, { ref, className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className), ...props }));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AvatarPrimitive.Image, { ref, className: cn("aspect-square h-full w-full", className), ...props }));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AvatarPrimitive.Fallback, { ref, className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className), ...props }));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
export {
  Avatar as A,
  AvatarImage as a,
  AvatarFallback as b
};
