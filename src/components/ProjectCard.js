export const ProjectCard = ({ projectImage, projectTitle }) => {
  return (
    <div>
      <img src={projectImage} />
      <h1>{projectTitle}</h1>
    </div>
  )
}
