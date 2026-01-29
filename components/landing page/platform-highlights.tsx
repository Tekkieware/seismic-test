import React from 'react'
import Badge from '../shared/badge'
import HighlightItem from './hightlight-item'

const PlatformHighlights = () => {
    const highlights = [
        {id: 1, name: "Package Receiving", description: "We receive your international orders at our overseas warehouse.", image: "/images/plaform highlights/package-receiving.png"},
        {id: 2, name: "Parcel Consolidation", description: "Combine multiple packages into one shipment to reduce shipping costs.", image: "/images/plaform highlights/package-consolidation.png"},
        {id: 3, name: "Shipping Cost Calculator", description: "See your shipping cost before paying. No surprises.", image: "/images/plaform highlights/shipping cost calculator.png"},
        {id: 4, name: "Real-Time Tracking", description: "Track your package from warehouse to delivery in Nigeria.", image: "/images/plaform highlights/real-time-tracking.png"},
        {id: 5, name: "Assisted Purchase", description: "If a store doesn’t accept your card, share the product link and we’ll help you buy it.", image: "/images/plaform highlights/assisted-purchase.png"},
        {id: 6, name: "Order Notifications", description: "Get updates when your package arrives, ships, and is delivered.", image: "/images/plaform highlights/order-notifications.png"},
    ]
    return (
        <section className=" flex flex-col py-12 mx-32">
            <div className=" my-4 flex justify-center">
                <Badge text='Platform Highlights' />
            </div>
            <h2 className=' text-5xl/16 text-grey font-medium text-center'>Everything You Need, In One Place</h2>
            <p className=' text-center font-normal text-base/6 text-grey-light my-2'>Everything You Need, In One Place</p>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {/* Popular Store Items */}
               {highlights.map((item) => (
                <HighlightItem key={item.id} item={item} />
               ))}
            </div>
        </section>
    )
}

export default PlatformHighlights