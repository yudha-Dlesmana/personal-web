import Circle from "../assets/circle.svg"
import CepatInvoice from "../assets/CepatInvoice.png"
import { RxOpenInNewWindow } from "react-icons/rx"
import { FaGithub } from "react-icons/fa6"

export function ProjectsCircle(){
  return(
  <div id="Circle" className="rounded-2xl shadow-xl max-w-[40vw]  space-y-2">
    <div className="flex justify-center items-center h-[25vh] bg-[#D7E4EF] rounded-t-2xl">
      <img src={Circle} className="w-[15vw]"/>
      </div>
    <div className="px-5 space-y-2">
      <h1 className="text-xl font-semibold flex justify-between items-center text-[#0A2A3A]">Circle 
        <span className="text-base italic font-normal">Mei-July 2025</span></h1>
      <div className="space-y-2">
        <p className="text-[#4A5A6A]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora enim, fuga impedit quasi, autem natus cumque aspernatur voluptas corrupti similique aliquam quod quidem, ut atque qui doloribus quisquam? Et, ipsa?</p>
        <div className="flex gap-2" >
          <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
            Express</button>
          <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
            React</button>
          <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
            Supabase</button>
          <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
            Typescript</button>
          </div>
        <div className="flex gap-6">
          <a href="https://github.com/yudha-Dlesmana/circel-UI" 
          className="text-[#60A5FA] hover:text-[#3B82F6] transition-colors duration-200 flex items-center gap-2">
            <FaGithub />
            View on GitHub</a>
          <a href="https://circle-share.vercel.app" 
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
        <h1 className="text-xl font-semibold flex justify-between items-center text-[#0A2A3A]">Cepat Invoice  <span className="text-base font-normal italic">June-July 2025</span></h1>
        <div className="space-y-2">
          <p className="text-[#4A5A6A]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempore ad aperiam voluptatibus dicta obcaecati tenetur suscipit minus sint? Vitae deleniti minus reprehenderit explicabo assumenda praesentium.</p>
          <div className="flex gap-2" >
              <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
                Express</button>
              <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
                React</button>
              <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
                Supabase</button>
              <button disabled className="bg-[#D7E4EF] text-[#4A5A6A] text-sm font-bold px-2 rounded-full">
                Typescript</button>
            </div>
          <div className="flex gap-6">
            <a href="https://github.com/shofiyatunnisa9/Cepat-Invoice" 
            className="text-[#60A5FA] hover:text-[#3B82F6] transition-colors duration-200 flex items-center gap-2">
              <FaGithub />
              View on GitHub</a>
            <a href="https://cepat-invoice.vercel.app" 
            className="text-[#60A5FA] hover:text-[#3B82F6] transition-colors duration-200 flex items-center gap-2"> 
              <RxOpenInNewWindow />
              Live Demo</a>
            </div>
          </div>
        </div>
    </div>
  )
}