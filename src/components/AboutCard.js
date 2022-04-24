export const AboutCard = ({ title, children, className }) => {
  return (
    <div
      className={`bg-zinc-50 px-4 pt-6 pb-8 drop-shadow-md rounded-lg space-y-4 ${className}`}
    >
      <h1 className='text-2xl font-semibold bg-stone-300/80 inline-block'>
        #{title}
      </h1>
      <div className='text-lg font-medium space-y-4'>{children}</div>
    </div>
  )
}
