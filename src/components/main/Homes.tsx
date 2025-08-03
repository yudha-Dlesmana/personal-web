import { FaLinkedin, FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import CVATS from "../../assets/CVATS.pdf";


export function Home(){
  return(
    <section id="Home" className="min-h-screen bg-hero text-[#FFFFFF]">
      <nav className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-[6vw] py-[4vh] gap-4">
        <div className="flex items-center gap-2">
          <GoDotFill className="text-[#4ADE80] text-xl" />
          <h1 className="font-semibold tracking-wide">open to work</h1>
          </div>
        <a 
        href={CVATS}
        download
        className="group relative px-4 py-2 font-bold rounded-full cursor-pointer text-[#FFFFFF] transition duration-200">
          Download CV
          <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-current group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>
      <div className="px-[6vw] py-[10vh] flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#D7E4EF]">WEB DEVELOPER</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Yudha Dwi <br /> Lesmana
          </h1>
        <div className="mt-[15vh] grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 text-base sm:text-lg text-[#D7E4EF]">
          <a 
          href="mailto:yudha.dlesmana@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group relative">
            <HiOutlineMail className="text-xl group-hover:text-[#93C5FD] transition-colors duration-200" />
            <span
              className="text-[#D7E4EF] group-hover:text-[#93C5FD] transition-colors duration-200">
              yudha.dlesmana@gmail.com
              <span className="block h-0.5 w-0 bg-current group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
          <a 
          href="https://wa.me/6281320569832"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group relative">
          <FaWhatsapp className="text-xl group-hover:text-[#93C5FD] transition-colors duration-200" />
          <span className="text-[#D7E4EF] group-hover:text-[#93C5FD] transition-colors duration-200">
            +62 813-2056-9832
            <span className="block h-0.5 w-0 bg-current group-hover:w-full transition-all duration-300"></span>
            </span>
            </a>
          <a
          href="https://www.linkedin.com/in/yudha-dwi-lesmana"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group relative">
            <FaLinkedin className="text-xl group-hover:text-[#93C5FD] transition-colors duration-200" />
            <span className="text-[#D7E4EF] group-hover:text-[#93C5FD] transition-colors duration-200">
              www.linkedin.com/in/yudha-dwi-lesmana
              <span className="block h-0.5 w-0 bg-current group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>

        <h1 className="flex items-center gap-2 group relative">
          <FaLocationDot className="text-xl group-hover:text-[#93C5FD] transition-colors duration-200" /> 
          <div
            className="text-[#D7E4EF] group-hover:text-[#93C5FD] transition-colors duration-200"
          >
            <span className="cursor-default"> South Tangerang, Indonesia</span>
            <span className="block h-0.5 w-0 bg-current group-hover:w-full transition-all duration-300"></span>
          </div>
        </h1>

        <h1 className="flex items-center gap-1">
          
        </h1>
      </div>
    </div>
  </div>
    </section>

  )
}