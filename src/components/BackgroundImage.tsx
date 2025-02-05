import { useState, useEffect, useCallback } from "react"

interface BackgroundImageProps {
  pcImageUrl: string
  mobileImageUrl: string
  children: React.ReactNode
}

export default function BackgroundImage({ pcImageUrl, mobileImageUrl, children }: BackgroundImageProps) {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [handleResize])

  return (
    <>
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-[-1]"
        style={{
          backgroundImage: `url(${isMobile ? mobileImageUrl : pcImageUrl})`,
          backgroundSize: isMobile ? "cover" : "100% 100%",
        }}
      />
      <div className="relative min-h-screen">
        {children}
      </div>
    </>
  )
}
