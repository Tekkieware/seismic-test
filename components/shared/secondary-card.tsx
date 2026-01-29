import React from 'react'

const SecondaryCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={` bg-white rounded-[30px] w-full border border-card-border overflow-hidden ${className}`}>
        {children}
    </div>
  )
}

export default SecondaryCard