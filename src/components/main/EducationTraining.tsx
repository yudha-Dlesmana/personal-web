import unpad from "../../assets/unpad.webp"
import dw from "../../assets/logodw.svg"
import di from "../../assets/DI.jpeg"

export function EducationTraining(){
  return (
    <div id="Education & Training" className="bg-[#F9FAFB] px-[10vw] py-[3vw] space-y-3">
      <h1 className="font-semibold text-2xl text-[#0A2A3A]">Education & Training</h1>
      <div className="space-y-2">
        <DumbwaysCard />
        <DicodingCard />  
        <CampusCard/>
        </div>
      </div>
  )
}


function CampusCard(){
  return (
    <div className="flex gap-10">
      <div className="w-35 h-35 flex items-center justify-center">
        <img src={unpad} className="h-30"/>
        </div>
      <div className="w-2xl">
        <h1 className="flex justify-between">
          <div>
            <span className="text-xl font-semibold flex justify-between items-center text-[#0A2A3A]">Padjadjaran University</span> 
            <span className="text-[#0A2A3A]"> Bachelor of Science in Information Science</span>
            </div>
          <span className="text-base font-normal italic">August 2017 - November 2023</span></h1>
      <h1><span className="font-bold"></span> <span className="italic"></span> </h1>
      <h1 className="italic"></h1>
      <h1 className="italic text-[#4A5A6A]">GPA: 3.59/4.00</h1>
        </div>
      </div>
  )
}
function DumbwaysCard(){
  return(
     <div className="flex gap-10">
      <div className="w-35 h-35 flex items-center justify-center ">
        <img src={dw} className="w-30"/>
        </div>
      <div className="w-2xl">
        <h1 className="flex justify-between items-center">
          <div>
            <span className="text-xl font-semibold flex justify-between items-center text-[#0A2A3A]">Bootcamp Dumbways Indonesia</span> 
            <span className="text-[#0A2A3A]">Fullstack developer</span>
            </div>
          <span className="text-base font-normal italic">January - July 2025</span></h1>
        <ul className="w-[48vw] text-[#4A5A6A] list-disc list-inside">
          <li>Built full-stack web applications using React and TypeScript on the frontend, and  Express and TypeScript on the backend, connected to Supabase databases and file storage management.</li>
          <li>Applied RESTful API principles to ensure seamless frontend-backend integration.</li>
          <li>Practiced collaborative software development using Git, GitHub.</li>
          
          </ul>       
        </div>
    </div>
  )
}
function DicodingCard(){
  return (
    <div className="flex gap-10">
      <div className="w-35 h-35 flex items-center justify-center ">
        <img src={di} className="w-30 rounded-full"/>
        </div>
      <div className="w-2xl">
        <h1 className="flex justify-between items-center">
          <div>
            <span className="text-xl font-semibold flex justify-between items-center text-[#0A2A3A]">Dicoding Indonesia</span> 
            <span className="text-[#0A2A3A]">Back End Path</span>
            </div>
          <span className="text-base font-normal italic">September 2024 - October 2024</span></h1>
        <ul className="w-[48vw] text-[#4A5A6A] list-disc list-inside">
          <li>Studied the fundamentals of programming and designed basic algorithms using JavaScript.</li>
          <li>Developed RESTful APIs on the back end and performed testing using Postman.</li>
          <li>Gained familiarity with modern development practices, including modular architecture, clean code, and debugging techniques.</li>
          </ul>       
        </div>
    </div>
  )
}