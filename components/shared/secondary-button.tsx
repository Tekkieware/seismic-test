const SecondaryButton = ({ text, className }: { text: string, className?: string }) => {
  return (
    <button className={`bg-white text-primary border border-primary text-sm sm:text-base font-bold px-4 sm:px-6  py-2 sm:py-3 rounded-full ${className}`}>{text}</button>
  )
}

export default SecondaryButton