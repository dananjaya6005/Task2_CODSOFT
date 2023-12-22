import Dashboard from "./src/screens/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Landing from "./src/screens/LandingPage/Landing";
import { useUser } from "@clerk/clerk-react";
import SignUp from "./src/screens/SignUp/SignUp";


export default function MainRouter() {
  return (
    <>
      <Routes>
        {deciedRoot()}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

function deciedRoot() {
  const { isSignedIn } = useUser();

  if (isSignedIn) {
    return <Route path="/*" element={<Dashboard />} />;
  } else {
    return <Route path="/" element={<Landing />} />;
  }
}
