export const ProjectCard = ({
  projectImage,
  projectTitle,
  projectLink,
  projectSkills,
}) => {
  return (
    <div className='bg-zinc-50 max-w-sm rounded-lg drop-shadow-md pb-4 inline-block mx-auto sm:mx-0'>
      <div className='bg-black/90 rounded-t-lg'>
        <img
          src={projectImage}
          className='w-full h-80 rounded-3xl object-scale-down object-center'
          alt={projectTitle}
        />
      </div>
      <div className='pt-4 px-4'>
        <a
          href={projectLink}
          target='_blank'
          rel='noopener noreferrer'
          className='text-2xl font-medium hover:underline hover:text-white hover:bg-stone-400 transition duration-300'
        >
          {projectTitle}
        </a>
      </div>

      <div className='text-md font-medium space-x-1 pt-2 px-4 space-y-2'>
        {projectSkills.map((role) => (
          <p className='bg-stone-300 rounded-full inline-block px-2'>{role}</p>
        ))}
      </div>
    </div>
  )
}
