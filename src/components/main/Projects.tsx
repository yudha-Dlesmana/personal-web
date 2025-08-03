import Circle from "../../assets/circle.svg"
import CepatInvoice from "../../assets/CepatInvoice.png"
import Apifaker from "../../assets/apifaker.png"
import { RxOpenInNewWindow } from "react-icons/rx"
import { FaGithub } from "react-icons/fa6"

export function Project(){
  return(
    <div id="Projects" className="bg-[#F9FAFB] px-[10vw] pt-[5vh] space-y-3">
      <h1 className="font-semibold text-2xl text-[#0A2A3A]">Projects</h1>
      <div className="grid grid-cols-3 gap-5">
        <ProjectsApifaker />
        <ProjectsCepatInvoice />
        <ProjectsCircle/>
        </div>
      </div>
  )
}

export function ProjectsCircle(){
  return(
  <div id="Circle" className="rounded-2xl shadow-xl max-w-[40vw]  space-y-2">
    <div className="flex justify-center items-center h-[25vh] bg-[#D7E4EF] rounded-t-2xl">
      <img src={Circle} className="w-[15vw]"/>
      </div>
    <div className="px-5 space-y-2">
      <h1 className="text-xl font-semibold flex justify-between items-center text-[#0A2A3A] h-[9vh]">
        <span>Circle</span> 
        <span className="text-base italic font-normal">Mei-July 2025</span>
        </h1>
      <div className="space-y-2">
        <p className="text-[#4A5A6A] h-[20vh]">
          A social media platform enabling users to share text and image-based content, engage with others via following, commenting, and liking posts, as well as create and manage personal profiles.
          </p>
        <div className="flex gap-2" >
          <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
            Express</button>
          <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
            React</button>
          <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
            TypeScript</button>
          <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
            Supabase</button>
          </div>
        <div className="flex gap-6">
          <a href="https://github.com/yudha-Dlesmana/circel-UI" target="_blank" rel="noopener noreferrer"
          className="text-[#60A5FA] hover:text-[#3B82F6] transition-colors duration-200 flex items-center gap-2">
            <FaGithub />
            View on GitHub</a>
          <a href="https://circle-share.vercel.app" target="_blank" rel="noopener noreferrer"
          className="text-[#60A5FA] hover:text-[#3B82F6] transition-colors duration-200 flex items-center gap-2"> 
            <RxOpenInNewWindow />
            Live Demo</a>
          </div>
        </div>
    </div>
    
    
    </div>
  )
}
export function ProjectsCepatInvoice(){
  return (
    <div id="CepatInvoice" className="rounded-2xl shadow-xl max-w-[40vw] space-y-2">
      <div className="flex justify-center items-center h-[25vh] bg-[#D7E4EF] rounded-t-2xl">
        <img src={CepatInvoice} className="w-[15vw]"/>
        </div>
      <div className="px-5 pb-3 space-y-2">
        <h1 className="text-xl font-semibold flex justify-between items-center text-[#0A2A3A]  h-[9vh]">
          <span>Cepat Invoice</span> 
          <span className="text-base font-normal italic">June-July 2025</span>
          </h1>
        <div className="space-y-2">
          <p className="text-[#4A5A6A] h-[20vh]">A web-based invoicing application that allows users to generate professional PDF invoices, manage a list of generated invoices, and view invoices in full detail.</p>
          <div className="flex gap-2" >
              <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
                Express</button>
              <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
                React</button>
              <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
                TypeScript</button>
              <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
                Supabase</button>
            </div>
          <div className="flex gap-6">
            <a href="https://github.com/shofiyatunnisa9/Cepat-Invoice" target="_blank" rel="noopener noreferrer"
            className="text-[#60A5FA] hover:text-[#3B82F6] transition-colors duration-200 flex items-center gap-2">
              <FaGithub />
              View on GitHub</a>
            <a href="https://cepat-invoice.vercel.app" target="_blank" rel="noopener noreferrer"
            className="text-[#60A5FA] hover:text-[#3B82F6] transition-colors duration-200 flex items-center gap-2"> 
              <RxOpenInNewWindow />
              Live Demo</a>
            </div>
          </div>
        </div>
    </div>
  )
}
export function ProjectsApifaker(){
  return (
    <div id="CepatInvoice" className="rounded-2xl shadow-xl max-w-[40vw] space-y-2">
      <div className="flex justify-center items-center h-[25vh] bg-[#D7E4EF] rounded-t-2xl">
        <img src={Apifaker} className="h-[6vh]"/>
        </div>
      <div className="px-5 pb-3 space-y-2 ">
        <h1 className="text-xl font-semibold flex justify-between text-[#0A2A3A]">
          <div className="flex flex-col">
            <span>Apifaker + </span>
            <span>Landing Page</span>
            </div> 
          <span className="text-base font-normal italic">July 2025</span></h1>
        <div className="space-y-2">
          <p className="text-[#4A5A6A] h-[20vh]">A mock API tool that lets frontend developers define custom schemas and instantly generate real-time JSON responses with zero setup.</p>
          <div className="flex gap-2" >
              <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
                Fiber</button>
              <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
                Go</button>
              <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
                React</button>
              <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
                TypeScript</button>
            </div>
          <div className="flex gap-6">
            <a href="https://github.com/yudha-Dlesmana/FakeAPI" target="_blank" rel="noopener noreferrer" className="text-[#60A5FA] hover:text-[#3B82F6] transition-colors duration-200 flex items-center gap-2">
              <FaGithub />
              View on GitHub</a>
            <a href="https://apifaker.vercel.app/" target="_blank" rel="noopener noreferrer"
            className="text-[#60A5FA] hover:text-[#3B82F6] transition-colors duration-200 flex items-center gap-2"> 
              <RxOpenInNewWindow />
              Live Demo</a>
            </div>
          </div>
        </div>
    </div>
  )
}