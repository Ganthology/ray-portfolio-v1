export const SkillsSection = ({ skills }) => {
  return (
    <div
      className={`mt-4 grid grid-rows-2 grid-cols-2 sm:grid-rows-none sm:grid-cols-4 gap-4`}
    >
      {skills.map((skill) => {
        return (
          <div className='bg-zinc-50 py-4 w-full rounded-md drop-shadow-md text-center'>
            <img
              src={skill.image}
              alt={skill.title}
              className='w-20 h-20 object-contain mx-auto self-center'
            />
            <p className='text-lg font-medium'>{skill.title}</p>
          </div>
        )
      })}
    </div>
  )
}
