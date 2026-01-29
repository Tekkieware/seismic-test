import React from 'react'
import Image from 'next/image'
import SecondaryCard from '../shared/secondary-card';


const HighlightItem = ({ item }: { item: { id: number; name: string; image: string, description: string } }) => {
  return (
    <SecondaryCard>
        <div className="w-full items-center justify-center min-h-35 ">
        <Image src={item.image} alt={item.name} width={1000} height={400}/>
        <div className=" p-5 flex flex-col gap-2">
            <h3 className=' text-grey font-bold text-2xl'>{item.name}</h3>
        <p className=' text-grey font-normal text-base'>{item.description}</p>
        </div>
        </div>
    </SecondaryCard>
  )
}

export default HighlightItem