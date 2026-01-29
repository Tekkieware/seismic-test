import React from 'react'
import Badge from '../shared/badge'
import SecondaryCard from '../shared/secondary-card'
import Image from 'next/image'
import ServicesItem from './services-item'
import FAQItem from './faq-item'
import SecondaryButton from '../shared/secondary-button'

const FAQs = () => {
    
    const faqData = [
        {
            id: 1,
            question: 'Do I get a personal warehouse address?',
            answer: 'No. All packages are received at our shared overseas warehouse and processed securely.'
        },
        {
            id: 2,
            question: 'Do you handle customs fees?',
            answer: 'Customs duties are determined by Nigerian customs and are not controlled by us.'
        },
        {
            id: 3,
            question: 'Can I shop from any international store?',
            answer: 'Yes, as long as the store can ship to our warehouse location.'
        },
        {
            id: 4,
            question: 'Can I track my package?',
            answer: 'Yes. You’ll receive tracking updates from warehouse to delivery.'
        },
        {
            id: 5,
            question: 'What if my item is damaged?',
            answer: 'Optional insurance is available for eligible shipments.'
        },
    ]
  
    return (
        <section className=" flex flex-col py-12 mx-auto max-w-7xl items-center">
            <div className=" my-4 flex justify-center">
                <Badge text='Built For You' />
            </div>
            <h2 className=' text-5xl/16 text-grey font-medium text-center'>FAQs</h2>
            <p className=' text-center font-normal text-base/6 text-grey-light my-2'>Focused on your needs, our team delivers solutions to ensure<br className="hidden lg:block" /> adequate and secure buy and ship to Nigeria.</p>
            <div className=" w-full flex flex-col gap-5 my-5 max-w-4xl">
               {faqData.map((item) => (
                    <FAQItem key={item.id} item={item} />
               ))}

            </div>
            <div className="py-5 gap-2 flex flex-col items-center">
                <h5 className=' text-grey font-bold text-xl'>Still have a question?</h5>
                <p className=' text-center font-normal text-base/6 text-grey-light my-2'>Reach out to our support team.</p>
                <SecondaryButton text='Contact Us' />
            </div>
           

           
        </section>
    )
}

export default FAQs