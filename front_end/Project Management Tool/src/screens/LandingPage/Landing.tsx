
import NavBar from '../../components/NavBar';
import landingPageLogo from '../../images/Organizing projects-bro.png';
import { useNavigate } from 'react-router';

export default function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />

      <div className=" flexitems-center">
        <div className="m-20 flex flex-row 2xl:m-40  justify-around ">

          <div className=" 2xl:w-1/2 flex flex-col ">
          <h1 className="2xl:text-7xl text-6xl py-4 font-bold from-red-900 via-rose-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent ">
            TaskEzy
          </h1>
          <h1 className="2xl:text-6xl text-5xl py-4  font-bold from-red-800 via-rose-600 to-gray-600 bg-gradient-to-r bg-clip-text text-transparent ">
            Project Management
          </h1>
          <p className="text-gray-700 my-5 font-medium text-lg 2xl:text-xl ">
            Welcome to <b>TaskEzy</b> ! We’re revolutionizing the way teams
            collaborate and manage projects. Our platform allows you to create
            projects, assign tasks, set deadlines, and track progress with ease.
            With TaskSphere, you can bring your team together, no matter where
            they are, and ensure everyone is aligned towards your project goals.
            Experience seamless project management like never before. Start your
            journey with TaskSphere today!
          </p>

          <button onClick={()=>{navigate('/signup')}} className="bg-red-700 w-fit px-8 my-5 py-3 text-xl rounded-3xl font-medium text-white  hover:bg-red-500 duration-500 " >Get Started</button>

          </div>
          
          <img src={landingPageLogo} alt="" className="w-[40%] h-[40%] 2xl:w-[30%] 2xl:h-[30%]  " />
          
          
        </div>


      
            
        
      </div>
    </>
  );
}
