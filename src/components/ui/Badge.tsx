import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-2xl border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black",
  {
    variants: {
      variant: {
        default: "border-transparent bg-white text-black hover:bg-white/90",
        secondary: "border-white/20 bg-white/10 text-white hover:bg-white/20",
        outline: "border-white text-white hover:bg-white hover:text-black",
        success: "border-transparent bg-green-500 text-white hover:bg-green-600",
        warning: "border-transparent bg-yellow-500 text-black hover:bg-yellow-600",
        destructive: "border-transparent bg-red-500 text-white hover:bg-red-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }