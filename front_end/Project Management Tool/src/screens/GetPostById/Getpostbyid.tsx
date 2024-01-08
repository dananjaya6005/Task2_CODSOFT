//@ts-nocheck
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import agileLogo from "../../images/agile method-bro.png";
import EmptyLogo from "../../images/Empty-bro.png";
import softwareLogo from "../../images/Code typing-bro.png";
import busnessLogo from "../../images/Business growth-bro.png";
import { useOrganization, useUser } from "@clerk/clerk-react";
import { UserOutlined } from "@ant-design/icons";
import mangericon from "../../icons/icons8-manager-96.png";
import membericon from "../../icons/icons8-team-96.png";
import dayjs from "dayjs";
import { DatePicker } from "antd";

let projectTypeLogo;

export default function Getpostbyid() {
  const { isSignedIn, user } = useUser();

  const {
    isLoaded,
    organization,
    membership,
    invitations,
    memberships,
    membershipRequests,
    domains,
  } = useOrganization();

  const { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/dashboard/getProjectbyid/${id}`)
      .then((response) => {
        setProject(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (project?.type === "blank_project") {
    projectTypeLogo = EmptyLogo;
  } else if (project?.type === "agile") {
    projectTypeLogo = agileLogo;
  } else if (project?.type === "software_development") {
    projectTypeLogo = softwareLogo;
  } else if (project?.type === "busniess") {
    projectTypeLogo = busnessLogo;
  }


  const calculateCompletedTasks = () => {
    let completedTasks = 0;
    project?.task?.map((task : any) => {
      if (task?.status === "🔵 completed") {
        completedTasks++;
      }
    });
    return completedTasks;
    
  };





  return (
    <>
      <div className="bg-gray-50 w-screen ">
        <div className=" flex justify-center item-center">
          <div className="bg-white shadow-md m-10 rounded-xl  w-full   ">
            <p className="text-2xl font-semibold text-gray-700 p-5">
              {project?.name}
            </p>

            <div className="flex m-5 flex-wrap">
              <div className=" size-1/4 max-[1280px]:size-1/3 min-[1700px]:size-1/5	">
                <img
                  src={projectTypeLogo}
                  alt=""
                  className="size-full shadow-lg px-5 rounded-lg "
                />
              </div>

              <div className="bg-white shadow-lg rounded-lg mx-8 px-14">
                <p className="my-2 text-lg font-medium text-gray-800 ">
                  Project Manager
                </p>
                <div className="flex items-center">
                  <img src={mangericon} alt="" className="w-10 h-10 mr-5" />
                  <p className="  text-gray-600">
                    <a className="text-blue-400 font-medium" href="">
                      {project?.manager}
                    </a>
                  </p>
                </div>

                <p className="my-2 text-lg font-medium text-gray-800 mt-5 ">
                  Project Team
                </p>
                <div className="flex items-center">
                  <img src={membericon} alt="" className="w-10 h-10 mr-5" />

                  <div>
                    {project.members?.map((member) => {
                      return (
                        <p className="  text-gray-600">
                          <a className="text-blue-400 font-medium" href="">
                            {member}
                          </a>
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>


            <div className="flex">

              <div className=" w-fit  mx-5 my-5 bg-white shadow-lg rounded-lg ">
                <div className="p-5 px-8">
                  <div>
                    <p className="text-sm my-2 font-medium ">Start Date</p>
                    <DatePicker
                      value={dayjs(project?.startDate, "YYYY-MM-DD")}
                      disabled={true}
                    />
                  </div>

                  <div>
                    <p className="text-sm my-2 font-medium ">End Date</p>
                    <DatePicker
                      value={dayjs(project?.endDate, "YYYY-MM-DD")}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>

              <div className="w-fit  mx-5 my-5 bg-white shadow-lg rounded-lg px-2">
                <div className="p-5">
                <p className="text-lg font-medium text-gray-800 " >Tasks</p>
                  <div>
                    <p className="text-sm my-2 font-medium ">Completed</p>
                    <p className="text-gray-600 text-3xl font-semibold"></p>
                    <p className="text-gray-600 text-3xl font-semibold flex"> <p className="text-green-400" >{calculateCompletedTasks()}</p>/{project?.task?.length}</p>
                    
                    </div>
                
                </div>
                
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg mx-5 px-7 p-5 mb-10">
              <p className="my-2 text-lg font-medium text-gray-600 ">
                Project Description
              </p>
              <p className="my-2  text-gray-600 mt-5 ">
                {project?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
