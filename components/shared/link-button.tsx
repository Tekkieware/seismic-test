const LinkButton = ({text, className}: {text: string, className?: string}) => {
  return (
        <button className={`bg-primary-light text-primary-faded border border-primary-faded text-lg font-normal px-8  py-4 rounded-full ${className}`}>{text}</button>
  )
}

export default LinkButton