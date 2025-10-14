"use client"

import { useState, useEffect } from "react"
import { toast } from "@/hooks/use-toast"

export const DesignVerseBadges = () => {
  const [isOriginalVisible, setIsOriginalVisible] = useState(false)
  const [isOriginalAnimating, setIsOriginalAnimating] = useState(false)
  const [isOriginalOpening, setIsOriginalOpening] = useState(false)

  const [isRemixVisible, setIsRemixVisible] = useState(false)
  const [isRemixAnimating, setIsRemixAnimating] = useState(false)
  const [isRemixOpening, setIsRemixOpening] = useState(false)

  useEffect(() => {
    const checkDomainAndShow = (): void => {
      const hostname = window.location.hostname

      // Hide badges only for preview/webcontainer URLs
      const isPreview = hostname.includes('webcontainer-api.io') ||
                       hostname.includes('stackblitz.io') ||
                       hostname.includes('codesandbox.io') ||
                       hostname.includes('codepen.io')

      if (!isPreview) {
        // Show both badges with staggered animation
        setIsRemixVisible(true)
        setIsRemixOpening(true)
        setTimeout(() => setIsRemixOpening(false), 50)

        setTimeout(() => {
          setIsOriginalVisible(true)
          setIsOriginalOpening(true)
          setTimeout(() => setIsOriginalOpening(false), 50)
        }, 150)
      }
    }

    checkDomainAndShow()
  }, [])

  const handleOriginalClose = (): void => {
    setIsOriginalAnimating(true)
    // Delay the actual hiding to allow animation to complete
    setTimeout(() => {
      setIsOriginalVisible(false)
    }, 300)
  }

  const handleRemixClick = (): void => {
    toast({
      title: "This feature is coming soon!",
      description: "Stay tuned for updates.",
    })
  }

  // Calculate position for remix badge (above original when both visible, or at bottom when original is closed)
  const getRemixPosition = (): string => {
    if (isOriginalVisible) {
      return "bottom-16" // Above the original badge
    } else {
      return "bottom-4" // At the bottom when original is closed
    }
  }

  if (!isOriginalVisible && !isRemixVisible) {
    return null
  }

  return (
    <>
      {/* Remix Badge */}
      {isRemixVisible && (
        <div
          className={`fixed ${getRemixPosition()} right-4 transition-all duration-300 ease-in-out text-white ${
            isRemixAnimating || isRemixOpening
              ? "transform translate-x-full opacity-0 scale-75"
              : "transform translate-x-0 opacity-100 scale-100"
          }`}
        >
          <div className="p-px rounded-[100px]" style={{ background: "linear-gradient(100deg, #7F56D9 57.87%, #F0FF48 89.47%, #8EFF48 100%)" }}>
            <button
              onClick={handleRemixClick}
              className="bg-[#7F56D9] text-xs flex flex-row justify-between items-center p-2.5 gap-2 rounded-[100px] cursor-pointer hover:opacity-80 transition-opacity duration-150 border-none"
            >
              <div className="flex items-center gap-1">
                <span>Remix this Project</span>
                <RefreshIcon className="size-3" />
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Original Badge */}
      {isOriginalVisible && (
        <div
          className={`fixed bottom-4 right-4 transition-all duration-300 ease-in-out text-white ${
            isOriginalAnimating || isOriginalOpening
              ? "transform translate-x-full opacity-0 scale-75"
              : "transform translate-x-0 opacity-100 scale-100"
          }`}
        >
          <div className="p-px rounded-[100px]" style={{ background: "linear-gradient(100deg, #7F56D9 57.87%, #F0FF48 89.47%, #8EFF48 100%)" }}>
            <div className="bg-black flex flex-row justify-between items-center p-2.5 gap-2 rounded-[100px]">
              <a
                href="https://designverse.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-[2px] flex items-center gap-1 text-xs hover:opacity-80 transition-opacity duration-150"
              >
                Built with <LogoIcon className="size-3.5" /> DesignVerse
              </a>
              <DividerIcon className="h-4 w-2" />
              <button
                onClick={handleOriginalClose}
                className="p-0 bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity duration-150"
                aria-label="Close badge"
              >
                <CloseIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

//** Self contained icons */
function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33496 3.33337L12.6677 12.6661"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33429 12.6662L12.667 3.3335"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DividerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="2"
      height="13"
      viewBox="0 0 2 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.484375 0.830078H1.52734V12.8301H0.484375V0.830078Z"
        fill="white"
      />
    </svg>
  )
}

function RefreshIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 6C11 8.76 8.76 11 6 11C3.24 11 1.555 8.22 1.555 8.22M1.555 8.22H3.815M1.555 8.22V10.72M1 6C1 3.24 3.22 1 6 1C9.335 1 11 3.78 11 3.78M11 3.78V1.28M11 3.78H8.78"
          stroke="white"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
    </svg>
  )}

function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 18.0001C0.5 3.58887 3.58875 0.500122 18 0.500122C32.4113 0.500122 35.5 3.58887 35.5 18.0001C35.5 32.4114 32.4113 35.5001 18 35.5001C3.58875 35.5001 0.5 32.4114 0.5 18.0001Z"
        fill="url(#paint0_linear_3999_26829)"
      />
      <path
        d="M28.4268 14.3701C28.4268 19.4092 24.3427 23.4933 19.3036 23.4933C19.1986 23.4933 19.0936 23.4908 18.9886 23.4882C21.9154 23.373 24.2634 20.9558 24.2634 17.9984C24.2634 14.9692 21.7976 12.506 18.7684 12.506H8.90002V8.78489C8.90002 8.01169 9.52683 7.38489 10.3 7.38489H18.7684C23.0189 7.38489 26.6959 9.89424 28.3884 13.5123C28.414 13.794 28.4268 14.0808 28.4268 14.3701Z"
        fill="url(#paint1_linear_3999_26829)"
      />
      <path
        d="M29.3845 17.9984C29.3845 23.8544 24.6218 28.6145 18.7684 28.6145H10.3C9.52683 28.6145 8.90002 27.9876 8.90002 27.2145V10.7648C8.90002 9.51752 10.408 8.89289 11.29 9.77484L14.0211 12.506V23.4934H18.7684C18.8427 23.4934 18.917 23.4908 18.9886 23.4883C19.0936 23.4908 19.1986 23.4934 19.3036 23.4934C24.3428 23.4934 28.4268 19.4093 28.4268 14.3701C28.4268 14.0808 28.414 13.794 28.3884 13.5123C29.0285 14.8745 29.3845 16.3955 29.3845 17.9984Z"
        fill="url(#paint2_linear_3999_26829)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3999_26829"
          x1="33.575"
          y1="4.52501"
          x2="2.425"
          y2="30.775"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.139354"
            stopColor="#8F69E4"
          />
          <stop
            offset="0.416666"
            stopColor="#6E58CF"
          />
          <stop
            offset="1"
            stopColor="#39109A"
          />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3999_26829"
          x1="18.7"
          y1="9.42473"
          x2="29.375"
          y2="21.8497"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop
            offset="1"
            stopColor="#AFAAB9"
          />
        </linearGradient>
        <linearGradient
          id="paint2_linear_3999_26829"
          x1="39.7"
          y1="27.7997"
          x2="7.67502"
          y2="13.2747"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C9C6D0" />
          <stop
            offset="1"
            stopColor="white"
          />
        </linearGradient>
      </defs>
    </svg>
  )
}
