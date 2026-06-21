import * as React from "react"
import { cn } from "@/src/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border-none bg-white shadow-clinical",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
