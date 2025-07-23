import Marquee from "react-fast-marquee"
import Javascript from "../assets/javascript.svg"
import Typescipt from "../assets/typescript.svg"
import NodeJs from "../assets/nodejs.svg"
import Supabase from "../assets/supabase.svg"
import Express from "../assets/express.svg"
import Postgresql from "../assets/postgresql.svg"
import Prisma from "../assets/prisma.svg"
import React from "../assets/react.svg"
import Tailwind from "../assets/tailwindcss.svg"
import ShadcnUI from "../assets/shadcn-UI.svg"
import Docker from "../assets/docker.svg"
import Postman from "../assets/postman.svg"

export function TechStack (){
  return (
    <div className="w-[35vw] space-y-3">
      <h1 className="font-semibold text-xl text-[#0A2A3A]">Development Stack</h1>
      <Marquee >
        <img src={Javascript} className="size-13 mx-2" />
        <img src={Typescipt} className="size-13 mx-2" />
        <img src={NodeJs} className="size-13 mx-2"/>
        <img src={Express} className="size-13 mx-2" />
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
 