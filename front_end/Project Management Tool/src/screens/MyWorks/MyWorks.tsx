import { useState, useEffect} from 'react';
import ProjectCard from '../../components/ProjectCard'
import axios from 'axios';
import Dropdown from 'antd/es/dropdown/dropdown';

export default function MyWorks() {

  const [project, setProjects] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:3000/dashboard/getProjects")
      .then((response) => {
        setProjects(response.data.data);
        console.log(response.data.data);
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
            project?.map((item:any , index: number) => {
              return(
                <div className='w-[40%] m-5' key={index} >
                  <ProjectCard
                  _id={item._id}
                  project_name={item.name}
                  description={item.description}
                  
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