//@ts-nocheck
import { useState, useEffect, useMemo } from "react";
import ProjectCard from "../../components/ProjectCard";
import axios from "axios";
import bgimg1 from "../../images/bgimg.jpg";
import commmonBg from "../../images/commonBg.png";
import { useUser } from "@clerk/clerk-react";
import ProjetcEmpty from '../../images/Empty-rafiki.png';


export default function MyWorks() {
  const [project, setProjects] = useState([]);
  const [projectHasAuth, setProjectHasAuth] = useState([]);
  const { user } = useUser();
  

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    await axios
      .get("http://localhost:3000/dashboard/getProjects")
      .then((response) => {
        setProjects(response.data.data);
        console.log(response.data.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
     
  }

  const calculateCompletedTasksByfilerMethod = (task) => {
    if (task.length > 0) {
      const completedtasks = task?.filter((item) => {
        return item.status === "🔵 completed";
      });

      return ((completedtasks.length / task.length) * 100).toFixed(1);
    }

    return 0;
  };


  useEffect(() => {
    const newProjects = project.filter(item => item.manager === user?.emailAddresses[0].emailAddress);
    setProjectHasAuth(newProjects);
  }, [project, user]);
  


  console.warn(project)
  console.warn(projectHasAuth)



  return (
    <>
      <div
        className="min-sceen-h bg-gray-50 w-screen "
        style={{
          backgroundImage: `url(${commmonBg})`,

          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="m-10 bg-white rounded-md shadow-md  ">
          <div className="p-5 m-1  flex-wrap flex  ">
            { projectHasAuth?.map((item: any, index: number) => {

              let completedTasks = calculateCompletedTasksByfilerMethod(item.task);

        

              return (
                <div className="w-[40%] m-5" key={index}>
                  <ProjectCard
                    _id={item._id}
                    project_name={item.name}
                    description={item.description}
                    completedTask={completedTasks}
                    members={item.members}
                    manager={item.manager}
                  />
                </div>
              );

            })}

            { projectHasAuth?.length === 0 && (

              <div className=" " >
                <div className="flex  justify-center " >
                  <img src={ProjetcEmpty} className="w-1/2" alt="empty" />
                  
                </div>
                <p className="text-center text-4xl font-semibold text-gray-300 my-5 " > Please create a new Project </p>
                <p className="text-center text-xl font-semibold text-gray-300 " >you have not created any project yet !</p>

              </div>

            ) 
            }




          </div>
        </div>
      </div>
    </>
  );
}
