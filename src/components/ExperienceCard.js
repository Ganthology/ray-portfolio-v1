export const ExperienceCard = ({ title, experiences, className }) => {
  return (
    <div
      className={`bg-zinc-50 mt-2 px-4 pt-6 pb-8 drop-shadow-md rounded-lg space-y-4 ${className}`}
    >
      <h1 className='bg-stone-300/80  text-2xl font-semibold underline inline-block'>
        {title}
      </h1>
      {experiences.map((experience) => (
        <div>
          <div className='flex justify-between'>
            <h1 className='text-lg font-semibold inline-block'>
              {experience.title}
            </h1>
            <p className='font-normal hidden sm:block'>{experience.period}</p>
          </div>
          <p className='font-normal sm:hidden block'>{experience.period}</p>
          <div className='text-md font-medium space-y-4 space-x-2'>
            {experience.description.map((role) => (
              <p className='bg-yellow-200 rounded-full inline-block px-2'>
                {role}
              </p>
            ))}
            {experience.skills.map((skill) => (
              <p className='bg-pink-200 rounded-full inline-block px-2'>
                {skill}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
