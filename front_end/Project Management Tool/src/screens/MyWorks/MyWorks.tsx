
import { useState, useEffect} from 'react';
import ProjectCard from '../../components/ProjectCard'
import axios from 'axios';

export default function MyWorks() {

  const [project, setProjects] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:3000/dashboard/getProjects")
      .then((response) => {
        setProjects(response.data.data);
        console.log(project)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <>
    <div className='min-sceen-h bg-gray-50 w-screen'>
      <div className='m-10 bg-white rounded-md shadow-md ' >



        <div className='p-5 m-1  flex-wrap flex  ' >

          {
            project?.map((item:any) => {
              return(
                <div className='w-[40%] m-5' >
                  <ProjectCard
                  project_name={item.name}
                  description={item.description}
                  id={item.id}
                /> 
                </div>

                
             
              );
            })
          }


         
        </div>
      </div>
    </div>
    </>
  )
}

// {props.title?.length > 45
//   ? props.title?.substring(0, 45) + "..."
//   : props.title}