import React from 'react'

const SecondaryCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' bg-white rounded-[30px] w-full border border-card-border overflow-hidden'>
        {children}
    </div>
  )
}

export default SecondaryCard