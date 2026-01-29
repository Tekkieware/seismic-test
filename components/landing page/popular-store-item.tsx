import React from 'react'
import Card from '../shared/card'
import Image from 'next/image'

const PopularStoreItem = ({ item }: { item: { id: number; name: string; image: string } }) => {
  return (
    <Card>
        <div className="flex w-full items-center justify-center min-h-35 ">
        <Image src={item.image} alt={item.name} width={100} height={100}/>
        </div>
    </Card>
  )
}

export default PopularStoreItem