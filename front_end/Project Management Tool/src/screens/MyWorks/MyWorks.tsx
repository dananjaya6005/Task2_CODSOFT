import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import axios from "axios";
import bgimg1 from "../../images/bgimg.jpg";
import commmonBg from "../../images/commonBg.png";

export default function MyWorks() {
  const [project, setProjects] = useState([]);

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
            {project?.map((item: any, index: number) => {
              let completedTasks = calculateCompletedTasksByfilerMethod(
                item.task
              );

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
          </div>
        </div>
      </div>
    </>
  );
}
