import Badge from '../shared/badge'
import SecondaryCard from '../shared/secondary-card'

const HowItWorks = () => {
    return (
        <section className=" flex flex-col py-12 mx-auto px-5 sm:px-0 max-w-7xl">
            <div className=" my-4 flex justify-center">
                <Badge text='Simple Steps' />
            </div>
            <h2 className=' text-3xl sm:text-5xl/16 text-grey font-medium text-center'>How it Works</h2>
            <p className=' text-center font-normal text-sm sm:text-base/6 text-grey-light my-2'>Buying from international stores doesn&apos;t have to be complicated. <br className="hidden lg:block" /> Here&apos;s how we make it simple.</p>
            <div className=" w-full flex flex-col my-5 max-w-5xl relative z-10">
                <div className="pointer-events-none -z-50 absolute left-0 top-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-[url('/images/how-it-works/bg.jpg')] bg-no-repeat bg-auto opacity-100 mask-[radial-gradient(ellipse_at_center,black_55%,transparent_100%)] mask-no-repeat mask-size-[100%_100%]" />
                <div className="grid grid-cols-1 sm:grid-cols-3 w-full items-center sm:mx-5">
                    <div className="flex flex-col gap-2 self-start">
                        <SecondaryCard className='py-3 px-5 rounded-full border-none bg-white'>
                            <div className="flex justify-between items-center">
                                <h1 className=' uppercase font-normal text-xl sm:text-2xl text-grey'>STEP ONE</h1>
                                <span className=' text-primary border text-lg sm:text-xl border-primary rounded-full py-2 px-3 border-dashed'>01</span>
                            </div>

                        </SecondaryCard>
                        <SecondaryCard className='p-8 pt-30 border-none bg-white mb-10 sm:mb-0'>
                            <div className="flex flex-col gap-2">
                                <h1 className='font-bold text-xl sm:text-2xl text-grey'>Shop Online</h1>
                                <span className=' text-grey-light text-sm sm:text-base font-normal'>Buy items from international stores that ship to our overseas warehouse.</span>
                            </div>
                        </SecondaryCard>
                    </div>
                    <svg
                        className='hidden sm:block -ml-4'
                        width="350"
                        height="210"
                        viewBox="0 0 350 210"
                    >
                        <path
                            d="M27 20 L112 20 L256 190 L342 190"
                            fill="none"
                            stroke="#0B3D3A"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <circle cx="27" cy="20" r="6" fill="#0B3D3A" />
                        <circle cx="342" cy="190" r="6" fill="#0B3D3A" />
                    </svg>
                    <div className="flex flex-col gap-2 justify-self-end sm:mt-45">
                        <SecondaryCard className='py-3 px-5 rounded-full border-none bg-white'>
                            <div className="flex justify-between items-center">
                                <h1 className=' uppercase font-normal text-xl sm:text-2xl text-grey'>STEP TWO</h1>
                                <span className=' text-primary border text-lg sm:text-xl border-primary rounded-full py-2 px-2.5 border-dashed'>02</span>
                            </div>

                        </SecondaryCard>
                        <SecondaryCard className='p-8 pt-30 border-none bg-white mb-10 sm:mb-0'>
                            <div className="flex flex-col gap-2">
                                <h1 className='font-bold text-xl sm:text-2xl text-grey'>We Receive Your Item</h1>
                                <span className=' text-grey-light text-sm sm:text-base font-normal'>Your order arrives at our shared overseas warehouse, where it is checked in and prepared for shipping.</span>
                            </div>
                        </SecondaryCard>
                    </div>

                </div>
                <div className="hidden sm:flex justify-end mr-20">
                    <svg
                        width="150"
                        height="150"
                        viewBox="0 0 150 150"
                    >
                        <path
                            d="M75 10 L75 140"
                            fill="none"
                            stroke="#0B3D3A"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <circle cx="75" cy="10" r="6" fill="#0B3D3A" />

                        <circle cx="75" cy="140" r="6" fill="#0B3D3A" />
                    </svg>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 w-full items-center sm:mx-5 mt">

                    <div className="flex flex-col gap-2 sm:mt-45 order-2 sm:order-1">
                        <SecondaryCard className='py-3 px-5 rounded-full border-none bg-white'>
                            <div className="flex justify-between items-center">
                                <h1 className=' uppercase font-normal text-xl sm:text-2xl text-grey'>STEP FOUR</h1>
                                <span className=' text-primary border text-lg sm:text-xl border-primary rounded-full py-2 px-2.5 border-dashed'>04</span>
                            </div>

                        </SecondaryCard>
                        <SecondaryCard className='p-8 pt-30 border-none bg-white mb-10 sm:mb-0'>
                            <div className="flex flex-col gap-2">
                                <h1 className=' font-bold text-xl sm:text-2xl text-grey'>Delivered to Nigeria</h1>
                                <span className=' text-grey-light text-sm sm:text-base font-normal'>Your package is shipped to Nigeria and delivered to your address, with tracking updates along the way.</span>
                            </div>
                        </SecondaryCard>
                    </div>

                    <svg
                        className='hidden sm:block sm:order-2'
                        width="350"
                        height="210"
                        viewBox="0 0 350 210"
                    >
                        <path
                            d="M10 190 L112 190 L256 20 L335 20"
                            fill="none"
                            stroke="#0B3D3A"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <circle cx="10" cy="190" r="6" fill="#0B3D3A" />

                        <circle cx="335" cy="20" r="6" fill="#0B3D3A" />
                    </svg>

                    <div className="flex flex-col gap-2 justify-self-end self-start order-1 sm:order-3">
                        <SecondaryCard className='py-3 px-5 rounded-full border-none bg-white'>
                            <div className="flex justify-between items-center">
                                <h1 className=' uppercase font-normal text-xl sm:text-2xl text-grey'>STEP THREE</h1>
                                <span className=' text-primary border text-lg sm:text-xl border-primary rounded-full py-2 px-2.5 border-dashed'>03</span>
                            </div>

                        </SecondaryCard>
                        <SecondaryCard className='p-8 pt-30 border-none bg-white mb-10 sm:mb-0'>
                            <div className="flex flex-col gap-2">
                                <h1 className=' font-bold text-xl sm:text-2xl text-grey'>Choose Shipping & Pay</h1>
                                <span className=' text-grey-light text-sm sm:text-base font-normal'>Select your shipping option, view the cost, and complete payment.</span>
                            </div>
                        </SecondaryCard>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HowItWorks