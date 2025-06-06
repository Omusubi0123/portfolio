import type React from "react"
import AnimatedBackground from "./Background/AnimatedBackground";

const Layout: React.FC<{ header: React.ReactNode; children: React.ReactNode }> = ({ header, children }) => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="flex flex-col min-h-screen relative z-10">
        <nav className="sticky top-0 z-50">{header}</nav>
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  )
}

export default Layout
