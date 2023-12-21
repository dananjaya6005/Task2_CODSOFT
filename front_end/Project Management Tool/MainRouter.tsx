import Dashboard from './src/screens/Dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Landing from './src/screens/LandingPage/Landing';
import { useUser } from '@clerk/clerk-react';
import SignUp from './src/screens/SignUp/SignUp';
import { useLocation } from 'react-router-dom';

export default function MainRouter() {

  const {isSignedIn} = useUser();


  return (
    <> 
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      </>
  )
}

