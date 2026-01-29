import React from 'react'

const SecondaryButton = ({text}: {text: string}) => {
  return (
        <button className='bg-white text-primary border border-primary text-base font-bold px-8  py-3 rounded-full'>{text}</button>
  )
}

export default SecondaryButton