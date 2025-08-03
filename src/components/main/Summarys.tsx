import Marquee from "react-fast-marquee"
import Javascript from "../../assets/javascript.svg"
import Typescipt from "../../assets/typescript.svg"
import Go from "../../assets/Go-Logo.svg"
import NodeJs from "../../assets/nodejs.svg"
import Express from "../../assets/express.svg"
import Fiber from "../../assets/Fiber.svg"
import Prisma from "../../assets/prisma.svg"
import React from "../../assets/react.svg"
import Supabase from "../../assets/supabase.svg"
import Postgresql from "../../assets/postgresql.svg"
import Tailwind from "../../assets/tailwindcss.svg"
import ShadcnUI from "../../assets/shadcn-UI.svg"
import Docker from "../../assets/docker.svg"
import Postman from "../../assets/postman.svg"

export function Summary(){
  return(
    <div id="Summary" className="bg-[#F9FAFB] px-[10vw] pt-[5vh] flex gap-3 items-end">
      <div className="space-y-3">
        <h1 className="font-semibold text-2xl text-[#0A2A3A] ">Summary</h1>
        <p className="w-[45vw] text-lg text-[#4A5A6A]">
          Full-Stack Web Developer specializing in developing scalable, high-performance web applications. With expertise in both front-end and back-end technologies, I focus on writing clean, maintainable, and efficient code to create user-focused solutions. I am passionate about building reliable systems, optimizing performance, and continuously learning new tools, frameworks, and best practices to achieve optimal results.</p>
        </div>
      <TechStack/>
      </div>
  )
}

export function TechStack (){
  return (
    <div className="w-[35vw] space-y-3">
      <h1 className="font-semibold text-xl text-[#0A2A3A]">Development Stack</h1>
      <Marquee  pauseOnHover>
        <img src={Javascript} className="size-13 mx-2" />
        <img src={Typescipt} className="size-13 mx-2" />
        <img src={Go} className="size-13 mx-2" />
        <img src={NodeJs} className="size-13 mx-2"/>
        <img src={Express} className="size-13 mx-2" />
        <img src={Fiber} className="size-13 mx-2" />
        <img src={Prisma} className="size-13 mx-2"/>
        <img src={Postgresql} className="size-13 mx-2" />
        <img src={Supabase} className="size-13 mx-2"/>
        <img src={React} className="size-13 mx-2"/>
        <img src={Tailwind} className="size-13 mx-2" />
        <img src={ShadcnUI} className="size-13 mx-2" />
        <img src={Docker} className="size-13 mx-2" />
        <img src={Postman} className="size-13 mx-2" />
        </Marquee>
    </div>
  )
}
 