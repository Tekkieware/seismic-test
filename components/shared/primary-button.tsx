import React from 'react'

const PrimaryButton = ({text, className}: {text: string, className?: string}) => {
  return (
        <button className={`bg-primary text-white text-base font-bold px-6  py-3 rounded-full ${className}`}>{text}</button>
  )
}

export default PrimaryButton