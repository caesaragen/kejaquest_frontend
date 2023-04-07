import React from 'react'

const Button: React.FC<{
    bgColor?: string
    color: string
    size?: string
    text?: string
    borderRadius: string
    icon?: JSX.Element
    bgHoverColor?: string
    width?: string
    onClick?: () => void
}> = ({ bgColor, color, size, text, borderRadius, icon, bgHoverColor, onClick, width }) => {
  return (
    <button
      type='button'
      style={{ backgroundColor: bgColor, color: color, borderRadius: borderRadius, width: width }}
      className={`text-${size} p-3 hover:drop-shadow-${size}  ${bgHoverColor} w-${width}`}
      onClick={onClick}
    >
      <span className='flex justify-center items-center gap-3'>
      {text} {icon}
      </span>
    </button>
  )
}

export default Button