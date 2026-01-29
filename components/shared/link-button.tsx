const LinkButton = ({ text, className }: { text: string, className?: string }) => {
  return (
    <button className={`bg-primary-light text-primary-faded border border-primary-faded text-base sm:text-lg font-normal px-4 sm:px-8  py-2 sm:py-4 rounded-full ${className}`}>{text}</button>
  )
}

export default LinkButton