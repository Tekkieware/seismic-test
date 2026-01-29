import React from 'react'

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' bg-card rounded-[30px] w-full'>
        {children}
    </div>
  )
}

export default Card