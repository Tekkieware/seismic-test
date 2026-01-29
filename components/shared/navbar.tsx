import PrimaryButton from "../shared/primary-button"

const Navbar = () => {
  return (
    <nav className="w-full p-6 flex justify-between items-center border-b border-white">
      <div className="flex gap-1 items-center">
        <span className='h-8 w-8 bg-primary rounded-full'></span>
        <span className='text-grey font-bold text-lg'>Brand Name</span>
      </div>
      <ul className="flex space-x-6 text-base text-grey font-normal">
        <li>How it works</li>
        <li>Features</li>
        <li>FAQs</li>
        <li>Support</li>
      </ul>
      <PrimaryButton text="Get Started" />
    </nav>
  )
}

export default Navbar