
import NavBar from '../../components/NavBar';
import bgAboutus from './bgAboutus.png';
import dp from './Untitled-1-INfEMnIQ.jpg';
import Footer from '../../components/Footer';

export default function AboutUs() {
  return (
     <>
     <div style={{

        backgroundImage: `url(${bgAboutus})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
    
     }} >

     <NavBar/>

     <div className='mx-20 mt-20 mb-5 flex flex-row-reverse bg-white p-5 bg-opacity-80 rounded-3xl justify-center item-center max-[500px]:mx-2 max-[500px]:flex-col-reverse ' >
       <div className='mx-10 max-[500px]:mx-3' >
         <h2 className='text-4xl text-slate-800 font-semibold my-5 max-[500px]:text-3xl ' >About the Developer</h2>
         <h3 className='text-2xl text-slate-800 font-semibold my-5' >Hello, I'm Dhananjaya Chathuranga</h3>

         <p className=' text-slate-800  font-normal	 ' >The owner and developer of TaskEzy. I'm currently a third-year Software Engineering student at the Open University of Sri Lanka.  With a passion for developing real-world full-stack applications using the latest web technologies.</p>

         <p className='text-slate-800 my-2' >My interest extends beyond web development to desktop application development as well. TaskEzy is a testament to my commitment to leverage technology to create efficient and user-friendly solutions. </p>
       </div>

      <div className=' size-1/2  flex item-center self-center ' >

      <img src={dp} alt="dp" className='rounded-full border-2 border-slate-200' />

      </div>
      
     </div>

     <div className=' mx-20 mt-5   bg-white p-10 bg-opacity-80 rounded-3xl max-[500px]:mx-2 ' >
      <h3 className='text-2xl text-slate-800 font-semibold mb-5 ' >Connect With Me 🚀</h3>
      <p className='text-slate-800' >If you have any questions, suggestions, or just want to chat about TaskEzy, I’m here for you. You can reach me, Dhananjaya Chathuranga, directly at +94 718843104 or via email at dananjaya6005@gmail.com. I look forward to hearing from you and will do my best to respond promptly. Let’s make project management easier together with TaskEzy!</p>


      <div className='flex '>
         <a href="https://www.linkedin.com/in/dananjaya6005/" target="_blank" rel="noreferrer" >
         <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" className='mx-2 my-5' />
         </a>
         <a href="https://wa.me/+94718843104" target="_blank" rel="noreferrer" >
         <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="whatsapp" className='mx-2 my-5' />
         </a>
         <a href="https://www.youtube.com/@dananjaya4314" target="_blank" rel="noreferrer" >
         <img src="https://img.icons8.com/color/48/000000/youtube.png" alt="youtube" className='mx-2 my-5' />
         </a>
         

      </div>

      <div className=" bg-slate-100 p-4 rounded-lg shadow-md w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12 ">
                <div className="align-start flex max-[500px]:flex-col ">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke=" #1a75ff" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold text-gray-600 ">Bug report</p>
                    <p className="text-neutral-500 ">
                      dananjaya6005@gmail.com
                    </p>
                    <p className="text-neutral-500 ">
                    +94 718843104
                    </p>
                  </div>
                </div>
              </div>

      

     </div>

      <div className='mt-5' >
      <Footer/>
      </div>
       
     </div>
     
     
     </>
  )
}
