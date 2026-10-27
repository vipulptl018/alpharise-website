import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] outline-none select-none focus-visible:border-[#C4B5FD] focus-visible:ring-3 focus-visible:ring-[#4F46E5]/35 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[linear-gradient(180deg,#4F46E5_0%,#7C3AED_100%)] text-white shadow-[0_1px_0_rgba(255,255,255,0.22)_inset,0_12px_28px_-12px_rgba(79,70,229,0.55)] hover:bg-[linear-gradient(180deg,#4338CA_0%,#4F46E5_100%)] hover:text-white hover:shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_16px_34px_-12px_rgba(79,70,229,0.6)]",
        outline:
          "border-[#CBD5E1] bg-white text-[#0F172A] shadow-sm hover:border-[#C4B5FD] hover:bg-[#F5F3FF] hover:text-[#0F172A] hover:shadow-[0_10px_28px_-18px_rgba(79,70,229,0.3)] aria-expanded:bg-[#F5F3FF] aria-expanded:text-[#0F172A] dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-[#F5F3FF] text-[#4338CA] shadow-sm hover:bg-[#EDE9FE] aria-expanded:bg-[#EDE9FE] aria-expanded:text-[#4338CA]",
        ghost:
          "hover:bg-[#F5F3FF] hover:text-[#0F172A] aria-expanded:bg-[#F5F3FF] aria-expanded:text-[#0F172A] dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-[#4F46E5] underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 gap-1.5 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
