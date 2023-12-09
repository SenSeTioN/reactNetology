import { FC } from 'react'
import './ProjectList.css'

type TProps = {
  projects: {
    img: string
    category: string
  }[]
}

const ProjectList: FC<TProps> = ({ projects }) => {
  return (
    <main className='project-list'>
      {projects.map((project, i) => (
        <img key={i} src={project.img} className='project-list__img' />
      ))}
    </main>
  )
}

export default ProjectList
