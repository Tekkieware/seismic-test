import React from 'react'

const PrimaryButton = ({text}: {text: string}) => {
  return (
        <button className='bg-primary text-white text-base font-bold px-8  py-3 rounded-full'>{text}</button>
  )
}

export default PrimaryButton