import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Download, Loader } from "lucide-react" 

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        download: "bg-blue-600 text-white hover:bg-blue-700", // New download variant
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  downloadUrl?: string
  downloadFileName?: string
  onDownloadStart?: () => void
  onDownloadComplete?: () => void
  onDownloadError?: (error: Error) => void
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    downloadUrl,
    downloadFileName,
    onDownloadStart,
    onDownloadComplete,
    onDownloadError,
    onClick,
    children,
    ...props 
  }, ref) => {
    const [isDownloading, setIsDownloading] = React.useState(false)

    const handleDownload = async (event: React.MouseEvent<HTMLButtonElement>) => {
      // Call original onClick if provided
      if (onClick) {
        onClick(event)
      }

      // If no download URL provided, return early
      if (!downloadUrl) return

      // Prevent default if it's a download button to avoid form submissions
      if (variant === "download") {
        event.preventDefault()
      }

      setIsDownloading(true)
      onDownloadStart?.()

      try {
        // Method 1: Simple anchor download (recommended for public files)
        const link = document.createElement('a')
        link.href = downloadUrl
        link.download = downloadFileName || 'download.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        onDownloadComplete?.()
      } catch (error) {
        console.error('Download failed:', error)
        onDownloadError?.(error as Error)
        
        // Fallback: open in new tab
        window.open(downloadUrl, '_blank')
      } finally {
        setIsDownloading(false)
      }
    }

    const Comp = asChild ? Slot : "button"
    
    // Determine if we should show download content
    const shouldShowDownloadContent = downloadUrl && variant === "download"
    const showLoadingState = isDownloading && shouldShowDownloadContent

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={downloadUrl ? handleDownload : onClick}
        disabled={isDownloading || props.disabled}
        {...props}
      >
        {showLoadingState ? (
          <>
            <Loader className="w-4 h-4 animate-spin" />
            Downloading...
          </>
        ) : shouldShowDownloadContent ? (
          <>
            <Download className="w-4 h-4" />
            {children || 'Download'}
          </>
        ) : (
          children
        )}
      </Comp>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }