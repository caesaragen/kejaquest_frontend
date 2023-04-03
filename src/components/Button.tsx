import React from 'react'

const Button: React.FC<{
    bgColor?: string
    color: string
    size?: string
    text?: string
    borderRadius: string
    icon?: JSX.Element
    bgHoverColor?: string
    onClick?: () => void
}> = ({ bgColor, color, size, text, borderRadius, icon, bgHoverColor, onClick }) => {
  return (
    <button
      type='button'
      style={{ backgroundColor: bgColor, color: color, borderRadius: borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-${size} `}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button