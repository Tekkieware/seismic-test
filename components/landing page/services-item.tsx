import React from 'react'
import PrimaryCard from '../shared/primary-card';
import Image from 'next/image';

const ServicesItem = ({ item }: { item: { id: number; name: string; image: string, description: string } }) => {
    return (
        <PrimaryCard>
            <div className="flex flex-col w-full items-center justify-center min-h-35 gap-5 p-6">
                <Image src={item.image} alt={item.name} width={50} height={50} />
                <h4 className=' text-grey font-bold text-lg sm:text-xl text-center'>{item.name}</h4>
                <p className=' font-normal text-grey-light text-sm sm:text-base text-center'>{item.description}</p>
            </div>
        </PrimaryCard>
    )
}

export default ServicesItem