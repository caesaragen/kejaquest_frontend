import React from 'react'


interface LayoutProps {
    children: React.ReactNode
    className?: string
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={`w-full inline-block z-0 bg-white dark:bg-black p-32 ${className}`}>
        {children}
    </div>

  )
}

export default Layout