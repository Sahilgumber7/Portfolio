import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import * as React from 'react'

const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:shadow-md',
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          'border border-black dark:border-white bg-transparent hover:bg-accent hover:text-accent-foreground',
        custom:
          ' bg-black text-white dark:bg-white dark:text-black hover:shadow-lg',
        subtle:
          'border border-input bg-background hover:bg-zinc-100 dark:hover:bg-zinc-800',
        ghost:
          'bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-foreground',
        link: 'bg-transparent underline-offset-4 hover:underline text-primary',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3',
        xs: 'h-8 px-2',
        lg: 'h-11 px-8',
        icon: "h-10 w-10",
        notch: "text-2xl px-2"
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}>
        {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }