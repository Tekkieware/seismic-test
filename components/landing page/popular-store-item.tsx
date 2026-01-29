import React from 'react'
import Image from 'next/image'
import PrimaryCard from '../shared/primary-card';

const PopularStoreItem = ({ item }: { item: { id: number; name: string; image: string } }) => {
  return (
    <PrimaryCard>
        <div className="flex w-full items-center justify-center min-h-35 ">
        <Image src={item.image} alt={item.name} width={100} height={100}/>
        </div>
    </PrimaryCard>
  )
}

export default PopularStoreItem