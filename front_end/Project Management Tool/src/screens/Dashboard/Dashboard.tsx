import { SignOutButton, useUser } from "@clerk/clerk-react";
import SlideMenuBar from "../../components/SlideMenu";
import { Routes, Route } from "react-router";
import GetTaskbyID from "../Projects/getTaskByID/GetTaskbyID";
import GetDeadlineByID from "../Projects/getDeadlineByID/GetDeadlineByID";
import GetTrackByID from "../Projects/TrackByID/GetTrackByID";
import MyWorks from "../MyWorks/MyWorks";
import NewProject from "../NewProject/NewProject";
import CreateOrg from "../Organizations/CreateOrg";
import ManageOrg from "../Organizations/ManageOrg";
import Getpostbyid from "../GetPostById/Getpostbyid";
import { useLocation } from "react-router";
import { Spin } from 'antd';
import guideIntro from '../../images/9730438-ai.png';
import { useEffect, useState } from "react";
import axios from "axios";
import serverLogo from '../../images/Server-amico.png';
import { FloatButton } from 'antd';
import { HomeOutlined  } from '@ant-design/icons';
import { useNavigate } from "react-router";
// import { useOrganization } from "@clerk/clerk-react";

export default function Dashboard() {
  const { user } = useUser();
  const location = useLocation();

  const [project, setProjects] = useState([]);
  const navigate = useNavigate();


  
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






  console.log("dashboard");

  return (
    <>
      <div className="flex flex-row min-h-screen  ">
        <SlideMenuBar />
        <Routes>
          
          <Route path="/myworks" element={<MyWorks />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/getTaskbyid/:id" element={<GetTaskbyID />} />
          <Route path="/getdeadlinebyid/:id" element={<GetDeadlineByID />} />
          <Route path="/getTrackById/:id" element={<GetTrackByID />} />
          <Route path="/createorg" element={<CreateOrg />} />
          <Route path="/manageOrg" element={<ManageOrg />} />
          
          <Route path="/getpostbyid/:id" element={<Getpostbyid />} />
        </Routes>

        {location.pathname === "/" ? (
          <div className=" flex-1    bg-gradient-to-t from-indigo-300 to-white ">
            <div className=" p-2 flex  justify-between shadow-sm flex-1  ">
              <p className=" w-fit justify-start text-lg font-medium text-gray-700 ml-2 ">
                DASHBOARD
              </p>
              <button className="bg-indigo-600 self-end text-white px-5   py-1 rounded-2xl">
                <SignOutButton>Sign out </SignOutButton>
              </button>
            </div>


            
          <div className="m-4 text-3xl font-semibold text-gray-800 ">Hello {user?.firstName} , </div>
         <div className="m-4" ><h3 className=" text-2xl font-semibold text-gray-800 " >Welcome to <span className="text-rose-600" >TaskEzy</span> Dashbaord !</h3></div>


         <div className=" flex justify-center bg-gradient-to-t from-indigo-50 to-slate-50 rounded-2xl m-5 " >

         <div className="w-10/12 max-[1280px]:w-full " >
          <img src={guideIntro} className="w-full h-full" />
         </div>

         </div>


    <div className="bg-white m-5 rounded-3xl bg-opacity-80">
    <div className="p-4 m-4 text-gray-700">
      <div className="font-bold text-xl mb-2">Here’s a list of features for your project from , "TaskEzy"</div>
      <ul className="list-disc pl-5">
        <li className="py-1"><strong>Project Creation:</strong> Ability to create new projects.</li>
        <li className="py-1"><strong>Organization Creation:</strong> Ability to create new organizations.</li>
        <li className="py-1"><strong>Organization Management:</strong> Tools to manage the created organizations.</li>
        <li className="py-1"><strong>Team Assignment:</strong> Functionality to assign team members to specific projects.</li>
        <li className="py-1"><strong>Project Deletion:</strong> Option to delete existing projects.</li>
        <li className="py-1"><strong>Task Assignment:</strong> Ability to assign tasks to specific projects.</li>
        <li className="py-1"><strong>Task Editing:</strong> Capability to edit any field in a task after it has been created.</li>
        <li className="py-1"><strong>Project Viewing:</strong> Functionality to view details of a project.</li>
        <li className="py-1"><strong>Task Tracking:</strong> Tools to track the progress of tasks.</li>
        <li className="py-1"><strong>Task Calendar:</strong> A calendar view for tasks to help with scheduling and deadlines.</li>
      </ul>
    </div>
  </div>





          </div>
        ) : null}

        
      </div>

      {
        project.length === 0 && (

          <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            
          }}
          className="bg-white w-1/2 flex  justify-center items-center flex-col p-5 rounded-xl bg-opacity-90 shadow-md"
          >  
           <img src={serverLogo} className="w-1/4 my-5" />
            <Spin size="large" />
            <h1 className="text-xl font-semibold text-indigo-600 m-5">Still Loading Data ...</h1>
             <p className="text-rose-500 font-medium text-lg " >Our server is runnng slowly. Please wait 100 seconds !</p>
             <p className="my-3 text-lg ">After the server wakes up you can run faster 😋</p>
          </div>

        )

      }


<FloatButton
      shape="circle"
      type="primary"
      style={{ right: 20, bottom: 20 }}
      icon={<HomeOutlined />}
      onClick={() => {navigate('/')}}
    />



    </>
  );
}


