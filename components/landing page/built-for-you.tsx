import React from 'react'
import Badge from '../shared/badge'
import SecondaryCard from '../shared/secondary-card'
import Image from 'next/image'
import ServicesItem from './services-item'

const BuiltForYou = () => {
    const services = [

        { id: 1, name: 'Shop Globally', image: '/images/icons/globe.png', description: 'Buy from US and other international stores.' },
        { id: 2, name: 'Overseas Warehouse', image: '/images/icons/warehouse.png', description: 'We receive and process your items securely.' },
        { id: 3, name: 'Delivered to Nigeria', image: '/images/icons/truck-delivery.png', description: 'Your package arrives at your chosen Nigerian address.' },
        { id: 4, name: 'Transparent & Secure', image: '/images/icons/shield-search.png', description: 'Clear costs, real tracking, safe payments.' },
    ]
    return (
        <section className=" flex flex-col py-12 mx-auto max-w-7xl px-5 sm:px-0">
            <div className=" my-4 flex justify-center">
                <Badge text='Built For You' />
            </div>
            <h2 className=' text-3xl sm:text-5xl/16 text-grey font-medium text-center'>Who Is This For?</h2>
            <p className=' text-center font-normal text-sm sm:text-base/6 text-grey-light my-2'>Designed for Nigerians who shop internationally and want reliable<br className="hidden lg:block" /> delivery back home.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-5">
                <SecondaryCard className='self-start'>
                    <div className="w-full items-center justify-center min-h-35 ">
                        <div className=" p-5 flex flex-col gap-2">
                            <h3 className=' text-grey font-bold text-xl sm:text-2xl'>Small Business Owners</h3>
                            <p className=' text-grey-light font-normal text-sm sm:text-base'>Importing items for resale in Nigeria.</p>
                        </div>
                        <Image src="/images/built for you/small-business-owners.png" alt="Small Business Owners" width={1000} height={400} />
                    </div>
                </SecondaryCard>
                <div className=" bg-red-50 sm:mt-22">
                    <SecondaryCard>
                        <div className="w-full items-center justify-center min-h-35">
                            <Image src="/images/built for you/everyday-shoppers.png" alt="Everyday Shoppers" width={1000} height={400} />
                            <div className=" p-5 flex flex-col gap-2">
                                <h3 className=' text-grey font-bold text-xl sm:text-2xl'>Everyday Shoppers</h3>
                                <p className=' text-grey-light font-normal text-sm sm:text-base'>Buying clothes, gadgets, and accessories from abroad.</p>
                            </div>
                        </div>
                    </SecondaryCard>
                </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-28">
                {
                    services.map((item) => (
                        <ServicesItem key={item.id} item={item} />
                    ))
                }
            </div>
        </section>
    )
}

export default BuiltForYou