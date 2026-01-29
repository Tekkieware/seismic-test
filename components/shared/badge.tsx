import React from 'react'

const Badge = ({text}: {text: string}) => {
    return (
        <span className=" py-3 px-6 rounded-full border font-normal text-sm bg-badge border-badge-border text-primary">
            {text}
        </span>
    )
}

export default Badge