'use client'
import { useState } from 'react'
import PrimaryButton from "../shared/primary-button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full p-6 flex justify-between items-center border-b border-white relative">
      <div className="flex gap-1 items-center">
        <span className='h-8 w-8 bg-primary rounded-full'></span>
        <span className='text-grey font-bold text-lg'>Brand Name</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-base text-grey font-normal">
        <li>How it works</li>
        <li>Features</li>
        <li>FAQs</li>
        <li>Support</li>
      </ul>

      {/* Desktop CTA */}
      <div className="hidden md:block">
        <PrimaryButton text="Get Started" />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-grey transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-grey transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-grey transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-background border-b border-white shadow-lg md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="flex flex-col space-y-4 p-6 text-base text-grey font-normal">
          <li className="hover:text-primary cursor-pointer">How it works</li>
          <li className="hover:text-primary cursor-pointer">Features</li>
          <li className="hover:text-primary cursor-pointer">FAQs</li>
          <li className="hover:text-primary cursor-pointer">Support</li>
          <li className="pt-2">
            <PrimaryButton text="Get Started" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar