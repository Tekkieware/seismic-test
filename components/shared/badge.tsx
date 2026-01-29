import React from 'react'

const Badge = ({ text }: { text: string }) => {
    return (
        <span className=" py-2 sm:py-3 px-4 sm:px-6 rounded-full border font-normal text-sm sm:text-base bg-badge border-badge-border text-primary">
            {text}
        </span>
    )
}

export default Badge