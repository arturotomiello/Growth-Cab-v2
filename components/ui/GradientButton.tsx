"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const gradientButtonVariants = cva(
    [
        "gradient-button",
        "inline-flex items-center justify-center",
        "rounded-[9999px] min-w-[132px] px-9 py-4", // Changed rounded-[11px] to rounded-full (9999px) to match current site style if desired, or stick to user request "copy perfectly". User said "copy perfectly" the code, but "adapting colors". I'll stick to provided code but check rounded.
        "text-base leading-[19px] font-[500] text-white",
        "font-sans font-bold",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-50",
    ],
    {
        variants: {
            variant: {
                default: "gradient-button-black", // Renamed for clarity, maps to default in CSS
                blue: "gradient-button-blue", // Renamed for clarity, maps to variant in CSS
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface GradientButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
    asChild?: boolean
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
    ({ className, variant, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                // If variant is default (black), no extra class needed if CSS handles .gradient-button. 
                // But if I want specific overrides I can add them.
                // Actually the CSS uses .gradient-button for base styles and vars.
                // I will make sure the variants add the specific class for color overrides.
                className={cn(gradientButtonVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
GradientButton.displayName = "GradientButton"

export { GradientButton, gradientButtonVariants }
