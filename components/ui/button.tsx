import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-extrabold transition-colors ring-offset-white",
  {
    variants: {
      variant: {
        default:"bg-primary text-white shadow hover:bg-secondary font-medium",
        secondary: "bg-secondary text-white shadow hover:bg-primary rounded-lg",
        outline: "border border-accent bg-transparent text-primary hover:bg-primary",
        hotline:"bg-accent text-white shadow hover:bg-secondary font-medium",
      },
      size: {
        default: "h-[41px] px-5 py-5",
        xs: "h-[10px] px-4 py-4",
        md: "h-[45px] px-6",
        lg: "h-[54px] px-8 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
