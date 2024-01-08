//@ts-nocheck
import Dashboard from "./src/screens/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Landing from "./src/screens/LandingPage/Landing";
import { useUser } from "@clerk/clerk-react";
import SignUp from "./src/screens/SignUp/SignUp";
import {isMobile} from 'react-device-detect';
import NoAcessMobile from "./src/components/NoAcessMobile";
import AboutUs from "./src/screens/AboutUs/AboutUs";
import Faqs from "./src/screens/FAQs/Faqs";
import { Spin } from 'antd';
import { useEffect, useState } from "react";
import axios from "axios";

export default function MainRouter() {

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



  return (
    <>
      <Routes>
        {deciedRoot()}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/FAQs" element={<Faqs />} />
      </Routes>

   
      
    

    </>
  );
}

function deciedRoot() {
  const { isSignedIn } = useUser();

  if (isSignedIn && !isMobile) {
    return <Route path="/*" element={<Dashboard />} />;
  } else if (isSignedIn && isMobile) {

    return <Route path="/*" element={<NoAcessMobile />} />;
    
    
  }
  else {

    return <Route path="/" element={<Landing />} />;
    
  }
}

