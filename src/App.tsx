
import { GoDotFill } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaLocationDot, FaWhatsapp } from "react-icons/fa6"
import { TechStack } from "./components/TechStacks";
import { ProjectsCepatInvoice, ProjectsCircle } from "./components/ProjectsCard";
import { AtletBridge } from "./components/WorkExperienceCard";
import { CampusCard, DicodingCard, DumbwaysCard, HighschoolCard } from "./components/EducationCard";


function App() {
  return (
    <>
    <section className="h-screen bg-hero text-[#FFFFFF]">
    <nav className="flex justify-between px-[10vw] py-[5vh] items-center">
      <div className="flex items-center gap-2">
        <GoDotFill className="text-[#4ADE80] text-xl"/>
        <h1 className="font-semibold tracking-wide">open to work</h1>
        </div>
      <button className="
        group relative px-4 py-2 font-bold rounded-full cursor-pointer text-[#FFFFFF] transition duration-200">
        Download CV
        <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-current group-hover:w-full transition-all duration-300"></span>
        </button>
      </nav>
    <div className="px-[10vw] py-[15vh] space-y-4 flex">
      <div>
      <h1 className="text-3xl font-semibold text-[#D7E4EF]">WEB DEVELOPER</h1>
      <h1 className="text-6xl font-bold text-white leading-tight">Yudha Dwi <br />Lesmana</h1>
      <div className="mt-6 grid grid-cols-2 gap-x-4 text-lg text-[#D7E4EF]">
        
        <h1 className="flex items-center gap-2 group relative">
          <HiOutlineMail className="text-xl group-hover:text-[#93C5FD] transition-colors duration-200" />
          <a
            href="mailto:yudha.dlesmana@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E4EF] group-hover:text-[#93C5FD] transition-colors duration-200"
          >
            yudha.dlesmana@gmail.com
            <span className="block h-0.5 w-0 bg-current group-hover:w-full transition-all duration-300"></span>
          </a>
        </h1>
        
        <h1 className="flex items-center gap-2 group relative"> 
          <FaWhatsapp className="text-xl group-hover:text-[#93C5FD] transition-colors duration-200"/> 
          <a 
          href="https://wa.me/6281320569832"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D7E4EF] group-hover:text-[#93C5FD] transition-colors duration-200"
          >
            +62 813-2056-9832
            <span className="block h-0.5 w-0 bg-current group-hover:w-full transition-all duration-300"></span>
            </a>
          </h1>
        
        <h1 className="flex items-center gap-2 group relative">
          <FaLinkedin className="text-xl group-hover:text-[#93C5FD] transition-colors duration-200" />
          <a
          href="https://www.linkedin.com/in/yudha-dwi-lesmana"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D7E4EF] group-hover:text-[#93C5FD] transition-colors duration-200"
        >
        www.linkedin.com/in/yudha-dwi-lesmana
          <span className="block h-0.5 w-0 bg-current group-hover:w-full transition-all duration-300"></span>
          </a>
          </h1>

        <h1 className="flex items-center gap-1"> <FaLocationDot className="text-xl" /> South Tangerang, Indonesia</h1>
        </div>
      </div>
                
      </div>
    </section>
    <div id="Profile" className="bg-[#F9FAFB] px-[10vw] pt-[5vh] flex gap-3 items-end">
      <div className="space-y-3">
        <h1 className="font-semibold text-3xl text-[#0A2A3A] ">Summary</h1>
        <p className="w-[45vw] text-lg text-[#4A5A6A]">
          Full-Stack Web Developer with experience in building scalable applications using React and Express with TypeScript. Skilled in RESTful API development, Prisma ORM, and integrating Supabase for data and file storage. Proficient with Docker environments and committed to writing clean, modular, and maintainable code. Quick to learn and adapt to new technologies.</p>
        </div>
      <TechStack/>
      </div>
    <div id="Projects" className="bg-[#F9FAFB] px-[10vw] pt-[5vh] space-y-3">
      <h1 className="font-semibold text-3xl text-[#0A2A3A]">Projects</h1>
      <div className="grid grid-cols-2 gap-5">
        <ProjectsCircle/>
        <ProjectsCepatInvoice />
        </div>
      </div>
    <div id="Work Experience" className="bg-[#F9FAFB] px-[10vw] pt-[5vw] space-y-3">
      <h1 className="font-semibold text-3xl text-[#0A2A3A]">Work Experience</h1>
      <AtletBridge/>
      </div>
    <div id="Education" className="px-[10vw] pt-[5vw]">
        <div id="Formal">
          <h1>Formal Education</h1>
          <CampusCard/>
          <HighschoolCard />

        </div>
        <div id="Non-Formal">
          <h1>Non-Formal Education</h1>
          <DumbwaysCard />
          <DicodingCard />

        </div>

      </div>
    <footer className="px-[10vw] py-[5vw]">
      <h1>Links</h1>
      </footer>
    
      
    </>
  )
}

export default App
