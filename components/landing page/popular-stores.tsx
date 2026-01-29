import React from 'react'
import Badge from '../shared/badge'
import PopularStoreItem from './popular-store-item'

const PopularStores = () => {
    const popularStores = [
        { id: 1, name: "addidas", image: '/images/popular stores/addidas.png' },
        { id: 2, name: "channel", image: '/images/popular stores/chanel.png' },
        { id: 3, name: "nike", image: '/images/popular stores/nike.png' },
        { id: 4, name: "channel", image: '/images/popular stores/chanel.png' },
        { id: 5, name: "amazon", image: '/images/popular stores/amazon.png' },
        { id: 6, name: "ebay", image: '/images/popular stores/ebay.png' },
        { id: 7, name: "north", image: '/images/popular stores/north.png' },
        { id: 8, name: "amazon", image: '/images/popular stores/amazon.png' },]; //
    return (
        <section className=" flex flex-col py-12 mx-auto max-w-7xl">
            <div className=" my-4 flex justify-center">
                <Badge text='Popular Stores' />
            </div>
            <h2 className=' text-5xl/16 text-grey font-medium text-center'>Top Stores Nigerians Shop From</h2>
            <p className=' text-center font-normal text-base/6 text-grey-light my-2'>Shop from trusted international brands across fashion, electronics, home, and more. We <br className="hidden lg:block" /> handle the delivery from abroad and bring your items safely to Nigeria.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
                {/* Popular Store Items */}
                {popularStores.map((item) => (
                    <PopularStoreItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    )
}

export default PopularStores