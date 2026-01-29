import React from 'react'
import Badge from '../shared/badge'
import Image from 'next/image'
import PrimaryButton from '../shared/primary-button'
import SecondaryButton from '../shared/secondary-button'

const Hero = () => {
    return (
        <section className=" flex flex-col items-center justify-center py-12">
            <div className=" my-4">
                <Badge text='Global Shopping, Made Simple' />
            </div>
            <h1 className="text-grey font-black text-bold-caption/16 text-center max-w-4xl py-3">
                Buy from International Stores.
                <br className="hidden lg:block" />
                We Deliver to Nigeria.
            </h1>
            <Image src='/images/hero/hero_products.png' alt='hero product stack' width={1200} height={200}/>
            <p className=' text-base font-normal text-grey-light text-center'>We help <b>Nigerians shop from abroad,</b> receive items at our overseas warehouse, and <br className="hidden lg:block" /> <b>ship them safely to Nigeria,</b> with clear pricing and full tracking.</p>
            <div className="flex gap-4 py-5">
                <PrimaryButton text='Get Started' />
                <SecondaryButton text='How it Works' />
            </div>
        </section>
    )
}

export default Hero