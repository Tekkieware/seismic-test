import Image from "next/image"
import PrimaryButton from "../shared/primary-button"
import SecondaryCard from "../shared/secondary-card"

const StartNow = () => {
    return (
        <section className=" flex flex-col py-12 mx-auto max-w-7xl items-center px-5 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-5 justify-center">
                    <h1 className="text-grey font-black text-4xl sm:text-bold-caption/16 max-w-4xl py-3">
                        Start Shipping From
                        <br className="hidden lg:block" />&nbsp;
                        Abroad Without Stress
                    </h1>
                    <p className=' font-normal text-grey-light text-sm sm:text-base'>Shop internationally with confidence and receive your items <br className="hidden lg:block" /> in Nigeria with ease.</p>
                    <div className="">
                        <PrimaryButton className=" py-4 px-9" text="Create an Account" />
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex w-full">
                        <Image src="/images/start shipping/start-shipping-top.png" alt="Shipping Network" width={1000} height={300} />
                    </div>
                    <div className="flex gap-5">
                        <SecondaryCard>
                            <Image src="/images/start shipping/start-shipping-bottom-left.png" alt="Warehouse" width={500} height={300} />
                        </SecondaryCard>
                        <SecondaryCard>
                            <Image src="/images/start shipping/start-shipping-bottom-right.png" alt="Shipping route" width={500} height={300} />
                        </SecondaryCard>
                    </div>
                </div>

            </div>


        </section>
    )
}

export default StartNow