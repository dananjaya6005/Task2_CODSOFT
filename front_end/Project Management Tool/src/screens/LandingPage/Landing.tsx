import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import { useNavigate } from 'react-router';
import bgfhd from '../../images/bg_1920.png';
import ProcessGuide from '../../images/processGude.png';
import landingPageLogo from '../../images/Innovation-amico.png';



export default function Landing() {
  const navigate = useNavigate();


  return (

    <>
    
    
    <div style={{
      backgroundImage: `url(${bgfhd})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }} className='min-h-screen' >
      <NavBar />

     

      <div   className=" w-1/2 max-[1280px]:w-3/5 max-[500px]:w-full ">
      
        <div className="m-20 flex flex-row justify-around  max-[500px]:m-9 ">

          <div className="  flex flex-col ">
          <h1 className="2xl:text-7xl min-[1800px]:text-8xl text-6xl py-4 font-bold from-white via-slate-400 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent max-[500px]:text-5xl ">
            TaskEzy
          </h1>
          <h1 className="2xl:text-6xl min-[1800px]:text-7xl text-5xl py-4  font-bold from-white via-slate-300 to-gray-300 bg-gradient-to-r bg-clip-text text-transparent max-[500px]:text-4xl  ">
            Project Management
          </h1>
          <p className="text-gray-100 my-5 font-medium text-lg  min-[1800px]:text-2xl max-[500px]:text-sm  ">
            Welcome to <b>TaskEzy</b> ! We’re revolutionizing the way teams
            collaborate and manage projects. Our platform allows you to create
            projects, assign tasks, set deadlines, and track progress with ease.
            With TaskSphere, you can bring your team together, no matter where
            they are, and ensure everyone is aligned towards your project goals.
            Experience seamless project management like never before. Start your
            journey with TaskSphere today!
          </p>

          <button onClick={()=>{navigate('/signup')}} className="bg-rose-600 w-fit 
          min-[1800px]:text-2xl px-8 my-5 py-3 text-xl rounded-3xl font-medium  min-[1800px]:px-10
          min-[1800px]:py-4  min-[1800px]:rounded-full
           text-white  hover:bg-red-500 duration-500 " >Get Started</button>

          </div>
          
        </div>  
        
      </div>

      </div>





      <div className='flex flex-row max-[500px]:flex-col '>

        <div className='m-20 max-[500px]:m-9 ' >
          <h3 className='text-4xl font-semibold text-gray-700 ' >Why 'TaskEzy' ? </h3>

          <p className='py-5 text-gray-600 leading-10 2xl:text-lg 2xl:leading-loose
                        min-[1800px]:text-2xl min-[1800px]:leading-loose max-[500px]:leading-relaxed	
          
          ' >TaskEzy is your ultimate project management solution. It’s designed to simplify the complex process of managing projects. With TaskEzy, you can easily plan your projects, assign tasks, and track progress, all in one place. It fosters effective team collaboration, ensuring everyone is on the same page. TaskEzy also offers unique features like a task calendar for better scheduling and deadline management. But what truly sets TaskEzy apart is its user-friendly interface and intuitive design, making project management a breeze. Whether you’re a project management veteran or a beginner, TaskEzy is the tool for you. Experience the ease of project management with TaskEzy!</p>

        </div>
        <img src={ProcessGuide} alt="processGuide" className='w-1/2 2xl:w-[40%] max-[500px]:w-full ' />
      </div>




      <div className='my-10 mx-40 flex justify-around flex-row bg-white shadow-md p-5 px-8 rounded-xl
      max-[500px]:flex-col max-[500px]:mx-4 max-[500px]:p-2 max-[500px]:px-4 max-[500px]:rounded-lg
      
      '>
        <div>
          <h2 className='text-3xl mb-5 font-semibold text-gray-600 ' >Ask from Us ! </h2>
          <p className='leading-10 2xl:text-lg 2xl:leading-loose
                        min-[1800px]:text-2xl min-[1800px]:leading-loose mr-8'>We’re here to help! If you have any questions about our system or need assistance, don’t hesitate to reach out. You can contact us directly at <b>+94 718843104</b> or via email at <b>dananjaya6005@gmail.com</b> . We’re committed to providing you with the support you need to make the most of TaskEzy. Your success is our priority!</p>
        </div>

        <img src={landingPageLogo} alt="landingPageLogo" className='w-1/4 max-[500px]:w-full ' />

      </div>




      <Footer />


   
      </>
      
    
  );
}
