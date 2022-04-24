import Navbar from '../components/Navbar/Navbar'
import HeroImage from '../components/HeroImage/HeroImage'
import { AboutCard } from '../components/AboutCard'
import { ExperienceCard } from '../components/ExperienceCard'
import { SkillsSection } from '../components/SkillsSection'
import { ProjectCard } from '../components/ProjectCard'
import portraitPhoto from '../assets/business-3d-man-sitting-with-smartphone-1.png'

const Homepage = () => {
  return (
    <div className='mx-auto bg-stone-100'>
      {/* <Navbar/>
      <HeroImage/> */}
      <nav className='bg-stone-200'>
        <div className='container flex justify-between px-4 py-4 mx-auto'>
          <a
            href='https://www.linkedin.com/in/ray-gan-bk/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl font-medium'
          >
            Ganthology
          </a>
          <div className='hidden lg:flex space-x-8 items-center'>
            <a
              href='#about'
              className='hover:rounded-md hover:bg-stone-400/50 py-1 px-3'
            >
              About
            </a>
            <a
              href='#experience'
              className='hover:rounded-md hover:bg-stone-400/50 py-1 px-3'
            >
              Experience
            </a>
            <a
              href='#skills'
              className='hover:rounded-md hover:bg-stone-400/50 py-1 px-3'
            >
              Skills
            </a>
            <a
              href='#projects'
              className='hover:rounded-md hover:bg-stone-400/50 py-1 px-3'
            >
              Projects
            </a>
            <a
              href='https://drive.google.com/file/d/1qaXB1gAh-hclkCPFPzof3zaq9jExzcx-/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-md bg-yellow-400 text-yellow-800 hover:bg-yellow-400/80 py-1 px-3'
            >
              Resume
            </a>
          </div>
          <div className='flex lg:hidden'>
            <a>Hamburger</a>
          </div>
        </div>
      </nav>
      <section className='container grid sm:gap-4 grid-rows-2 sm:grid-rows-none sm:grid-cols-2 px-4 py-8 mx-auto'>
        <div className='sm:hidden block mx-auto'>
          <img
            src={portraitPhoto}
            alt='Illustration by Icons 8 from Ouch!'
            className='w-full h-full max-h-48 max-w-sm rounded-3xl object-contain'
          />
        </div>
        <div className='self-center mx-4 sm:ml-auto'>
          <h1 className='sm:hidden text-4xl font-bold underline text-center mb-4'>
            Hello, I'm <span className='bg-cyan-300/80'>Ray</span>✨!
          </h1>
          <div className='bg-zinc-50 rounded-xl drop-shadow-md py-4 px-4 sm:px-12 sm:py-0 sm:pt-10 sm:pb-16 sm:space-y-3'>
            <h1 className='hidden sm:inline lg:text-4xl  text-xl font-bold'>
              Hi There, This is <span className='underline'>Ray</span>✨!
            </h1>
            <h2 className='lg:text-2xl text-md font-semibold text-center sm:text-left'>
              I'm a{' '}
              <span className='bg-pink-300/80 underline'>
                Frontend Engineer
              </span>{' '}
              specialises in <br />{' '}
              <span className='bg-yellow-300/80 inline-block underline'>
                React.js
              </span>{' '}
              and{' '}
              <span className='bg-yellow-300/80 inline-block underline'>
                React Native
              </span>
              .
            </h2>
          </div>
        </div>
        <div className='hidden sm:block ml-4'>
          <img
            src={portraitPhoto}
            alt='Illustration by Icons 8 from Ouch!'
            className='w-full h-full max-h-96 max-w-sm rounded-3xl object-contain'
          />
        </div>
      </section>
      <section className='container px-4 mx-auto' id='about'>
        <h1 className='text-3xl font-bold'>About Myself</h1>
        <div className='grid grid-rows-2 md:grid-rows-none md:grid-cols-3 gap-8 py-4'>
          <AboutCard title='INFJ/Protagonist' className='hidden md:block'>
            <p>
              I like to help and support people around me to grow in their
              respective path by giving advices and mentorship.
            </p>
            <p>
              I gain satisfaction in seeing others succeed and continue to
              strive for personal growth.
            </p>
          </AboutCard>
          <AboutCard title='Founder'>
            <p>
              Founded Google Developer Students Club UPM and UPM Hackers, the
              first of its kind in UPM to advocate personal development and
              opportunities in tech industries.
            </p>
            <p>
              We collaborated with companies like ViTrox, TalentLabs on
              organising talks and seminars related to tech and job
              opportunities.
            </p>
          </AboutCard>
          <AboutCard title='Self-taught Developer'>
            <p>
              Taught myself programming and web development through building
              projects, actively participating hackathons and doing internships.{' '}
            </p>
            <p>
              Found my passion in Software Development and decided to pivot into
              Software Engineering career.
            </p>
          </AboutCard>
        </div>
      </section>
      <section
        className='container px-4 mx-auto space-y-4 mt-8'
        id='experience'
      >
        <h1 className='text-3xl font-bold'>My Experience</h1>
        <div className='space-y-8'>
          <ExperienceCard
            title='Technical'
            experiences={[
              {
                title: 'Web Developer Intern @ Speedhome',
                period: 'Jan 2022 - Present',
                description: ['Scrum Master', 'Frontend Engineer'],
                skills: [
                  'Next.JS',
                  'React.js',
                  'AGILE',
                  'Git',
                  'AWS CodePipeline',
                  'Jira',
                ],
              },
              {
                title: 'Dev Team Volunteer @ MalaysianPayGap',
                period: 'Mar 2022 - Present',
                description: ['Coordinator', 'Engineer'],
                skills: ['Next.JS', 'TypeScript', 'TailwindCSS', 'Git'],
              },
              {
                title: 'Software Intern (Mobile) @ Agmo Studio',
                period: 'July 2021 - Oct 2021',
                description: ['Mobile Engineer'],
                skills: [
                  'React Native',
                  'Swift',
                  'Objective-C',
                  'XCode',
                  'Git',
                ],
              },
            ]}
          />
          <ExperienceCard
            title='Leadership'
            experiences={[
              {
                title: 'Founder and Co-Lead of GDSC UPM',
                period: 'September 2022 - Present',
                description: ['Founder', 'Leader', 'Advocate'],
                skills: [],
              },
              {
                title: 'Founder of UPM Hackers',
                period: 'Mar 2021 - September 2022',
                description: ['Founder', 'Leader', 'Advocate'],
                skills: [],
              },
            ]}
          />
          <ExperienceCard
            title='Competition'
            experiences={[
              {
                title:
                  'Finalist @ APEC App Challenge 2021 by The Asia Foundation',
                period: 'May 2022 - June 2022',
                description: ['Leader', 'Coder', 'Story-Teller'],
                skills: ['Next.js', 'TailwindCSS', 'Pitching'],
              },
              {
                title: 'MaGIC University Startup Challenge 2021',
                period: 'May 2021 - Oct 2021',
                description: ['Leader', 'Hustler', 'Story-Teller'],
                skills: ['Figma', 'Pitching'],
              },
              {
                title:
                  'Top 6 Finalist of Star`t Pitching Sunway Business Competition 2021',
                period: 'June 2021',
                description: ['Leader', 'Story-Teller'],
                skills: ['Pitching'],
              },
              {
                title: '1st Runner Up @ CIPTA UK 2021 by ICUBE International',
                period: 'March 2021',
                description: ['Coder', 'Designer'],
                skills: ['Figma'],
              },
            ]}
          />
        </div>
      </section>
      <section className='container px-4 mx-auto' id='skills'>
        <h1 className='text-3xl font-bold mt-8 mb-4'>My Skills</h1>
        <div className='sm-space-y-8'>
          <SkillsSection
            skills={[
              {
                title: 'React.js',
                image:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/862px-React-icon.svg.png',
              },
              {
                title: 'React Native',
                image:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/862px-React-icon.svg.png',
              },
              {
                title: 'JavaScript',
                image:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
              },
              {
                title: 'TypeScript',
                image:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png',
              },
            ]}
          />
          <SkillsSection
            skills={[
              {
                title: 'Git',
                image:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png',
              },
              {
                title: 'TailwindCSS',
                image:
                  'https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg',
              },
              {
                title: 'Next.js',
                image:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png',
              },
              {
                title: 'Figma',
                image:
                  'https://i.pinimg.com/originals/17/06/c9/1706c9f16bd08eb5e03f1df3e0a94a1c.png',
              },
            ]}
          />
        </div>
      </section>
      <section id='projects' className='container px-4 mx-auto'>
        <h1 className='text-3xl font-bold mt-8 mb-4'>Projects</h1>
        <ProjectCard
          projectImage=''
          projectTitle='CoinGecko Mobile App Clone'
        />
      </section>
      <h1 className='font-medium text-3xl'>This is the Homepage</h1>
    </div>
  )
}

export default Homepage
