import Dashboard from "./src/screens/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Landing from "./src/screens/LandingPage/Landing";
import { useUser } from "@clerk/clerk-react";
import SignUp from "./src/screens/SignUp/SignUp";
import {isMobile} from 'react-device-detect';
import NoAcessMobile from "./src/components/NoAcessMobile";

export default function MainRouter() {
  return (
    <>
      <Routes>
        {deciedRoot()}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landing" element={<Landing />} />
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

