import React from 'react'

const PrimaryCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' bg-card rounded-[30px] w-full'>
        {children}
    </div>
  )
}

export default PrimaryCard