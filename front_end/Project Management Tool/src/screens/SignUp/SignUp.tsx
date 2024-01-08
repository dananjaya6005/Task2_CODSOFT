
import { SignIn } from "@clerk/clerk-react";

export default function SignUp() {
  return (
    <div className=' absolute bg-gray-100 bg-opacity-70 w-screen min-h-screen flex justify-center items-center ' >
        <SignIn />
    </div>
  )
}
