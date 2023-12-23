import { SignOutButton} from "@clerk/clerk-react";
import SlideMenuBar from "../../components/SlideMenu";
import { Routes,Route} from "react-router";
import GetTaskbyID from "../Projects/getTaskByID/GetTaskbyID";
import GetDeadlineByID from "../Projects/getDeadlineByID/GetDeadlineByID";
import GetTrackByID from "../Projects/TrackByID/GetTrackByID";
import MyWorks from "../MyWorks/MyWorks";
import NewProject from "../NewProject/NewProject";
import CreateOrg from "../Organizations/CreateOrg";
import ManageOrg from "../Organizations/ManageOrg";
// import { useOrganization } from "@clerk/clerk-react";

export default function Dashboard() {
  // const { isSignedIn, user } = useUser();

  // const { 
  //   isLoaded,
  //   organization,
  //   membership,
  //   invitations,
  //   memberships,
  //   membershipRequests,
  //   domains,
    
  // } = useOrganization();

//  console.log(memberships?.data)





  return (
    <>
      <div className="flex flex-row min-h-screen">
        <SlideMenuBar />
        <Routes>
          <Route path="/myworks" element={<MyWorks />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/getTaskbyid/:id" element={<GetTaskbyID />} />
          <Route path="/getdeadlinebyid/:id" element={<GetDeadlineByID />} />
          <Route path="/getTrackById/:id" element={<GetTrackByID />} />
          <Route path="/createorg" element={<CreateOrg />} />
          <Route path="/manageOrg" element={<ManageOrg />} />
          <Route path ="/myworks" element={<MyWorks/>} />
        </Routes>
        
       
       {/* {user?.firstName}
       {membership?.role}
      
 
      <MemberList/> */}
      </div>
      
    </>
  );
}
