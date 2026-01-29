import React from 'react'
import Badge from '../shared/badge'

const HowItWorks = () => {
    return (
        <section className=" flex flex-col py-12 mx-32">
            <div className=" my-4 flex justify-center">
                <Badge text='Simple Steps' />
            </div>
            <h2 className=' text-5xl/16 text-grey font-medium text-center'>How it Works</h2>
            <p className=' text-center font-normal text-base/6 text-grey my-2'>Buying from international stores doesn&apos;t have to be complicated. <br className="hidden lg:block" /> Here&apos;s how we make it simple.</p>
        </section>
    )
}

export default HowItWorks