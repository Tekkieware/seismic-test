const SecondaryButton = ({text, className}: {text: string, className?: string}) => {
  return (
        <button className={`bg-white text-primary border border-primary text-base font-bold px-6  py-3 rounded-full ${className}`}>{text}</button>
  )
}

export default SecondaryButton