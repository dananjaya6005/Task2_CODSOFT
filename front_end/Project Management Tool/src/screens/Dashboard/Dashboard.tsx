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
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useLocation } from "react-router";
import dashboaadMainImg from '../../images/Innovation-amico.png';
import guideIntro from '../../images/9730438-ai.png';
// import { useOrganization } from "@clerk/clerk-react";

export default function Dashboard() {
  const { isSignedIn, user } = useUser();
  const location = useLocation();

  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [time, setTime] = useState(dayjs().format("HH:mm:ss"));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format("HH:mm:ss"));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
          <Route path="/myworks" element={<MyWorks />} />
          <Route path="/getpostbyid/:id" element={<Getpostbyid />} />
        </Routes>

        {location.pathname === "/" ? (
          <div className=" flex-1     ">
            <div className=" p-2 flex  justify-between shadow-sm flex-1  ">
              <p className=" w-fit justify-start text-lg font-medium text-gray-700 ml-2 ">
                DASHBOARD
              </p>
              <button className="bg-indigo-600 self-end text-white px-5   py-1 rounded-2xl">
                <SignOutButton>Sign out </SignOutButton>
              </button>
            </div>


            

            {/* <div className="bg-repeat w-full h-full text-primary-100 " >

            <div className="flex flex-row justify-between ml-10 p-7 ">
              <p className=" text-4xl font-semibold text-cyan-700 ">
                Welcome back to TaskEzy
              </p>

              <div className="mr-20" >
                <p className="text-xl font-semibold text-gray-600 ">{date}</p>
                <p className="text-3xl font-semibold text-gray-600">{time}</p>
              </div>
            </div>

            <div className="mx-7">
              <p className="text-2xl font-semibold text-fuchsia-800">
                Hello,👋 {user?.firstName} !{" "}
              </p>
            </div>

            <div className="mx-7 my-10 flex justify-center items-center   ">
              <img src={dashboaadMainImg} className="size-1/3 duration-700 hover:drop-shadow-[0_35px_35px_rgba(75,0,130,0.35)] " />
              <p className="my-5 mx-5 text leading-8 " >
                Welcome back to <b>TaskEzy</b>! Your one-stop solution for seamless
                project management. Dive into your projects, tick off those
                tasks, and watch as your ideas transform into accomplishments.
                Remember, every task completed is a step closer to your goal.
                Let’s make progress happen! Today is another opportunity to move
                closer to your project milestones. Let’s seize the day and make
                the most of it with TaskEzy !
              </p>
            </div>


            </div>
         */}
          <div className="m-4 text-3xl font-semibold text-gray-800 ">Hello {user?.firstName} , </div>
         <div className="m-4" ><h3 className=" text-2xl font-semibold text-gray-800 " >Welcome to <span className="text-rose-600" >TaskEzy</span> Dashbaord !</h3></div>


         <div className=" flex justify-center" >

         <div className="w-10/12 max-[1280px]:w-full " >
          <img src={guideIntro} className="w-full h-full" />
         </div>

         </div>


    <div className="">
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
    </>
  );
}

// TaskEzy is a project management tool that helps you to manage your
// projects and tasks. You can create your own organization and invite
// your team members to work together. You can also create your own
// personal projects and tasks.
