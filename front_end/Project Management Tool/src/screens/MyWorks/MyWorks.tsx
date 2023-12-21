
import ProjectCard from '../../components/ProjectCard'

export default function MyWorks() {
  return (
    <>
    <div className='min-sceen-h bg-gray-50 w-screen'>
      <div>
        <ProjectCard/>
      </div>
    </div>
    </>
  )
}

// {props.title?.length > 45
//   ? props.title?.substring(0, 45) + "..."
//   : props.title}