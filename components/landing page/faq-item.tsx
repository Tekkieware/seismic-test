import React from 'react'
import PrimaryCard from '../shared/primary-card';

const FAQItem = ({ item }: { item: { id: number; question: string; answer: string } }) => {
    return (
        <PrimaryCard>
            <div className="flex w-full items-center min-h-35 p-6">
                <h4 className=' text-grey font-bold text-sm sm:text-base flex-1 '>{item.question}</h4>
                <p className=' font-normal text-grey-light text-sm sm:text-base flex-1'>{item.answer}</p>
            </div>
        </PrimaryCard>
    )
}

export default FAQItem