import LinkButton from "./link-button"

const Footer = () => {
    const links = [
        { id: 1, text: "How it works", href: "#" },
        { id: 2, text: "Features", href: "#" },
        { id: 3, text: "FAQs", href: "#" },
        { id: 4, text: "Contact Us", href: "#" },
        { id: 5, text: "Track Order", href: "#" },
        { id: 6, text: "Terms or Service", href: "#" },
    ]
    return (
        <footer className=" w-full bg-primary-light flex flex-col items-center gap-3 pt-16 mt-12">
            <div className="flex gap-1 items-center">
                <span className='h-8 w-8 bg-white rounded-full'></span>
                <span className='text-white font-bold text-base sm:text-lg'>Brand Name</span>
            </div>
            <p className=" text-primary-faded font-normal text-base sm:text-lg text-center">Shop internationally, receive your items in Nigeria. Simply, <br className="hidden lg:block" /> safely, and transparently.</p>
            <div className="flex w-full justify-center gap-5 flex-wrap py-10">
                {links.map((link) => (
                    <LinkButton key={link.id} text={link.text} />
                ))}
            </div>
            <div className="flex w-full justify-center py-5 border-t border-primary-faded">
                <p className=" text-white font-normal text-sm sm:text-lg text-center">© 2024 YourPlatformName. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer