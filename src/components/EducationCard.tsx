import unpad from "../assets/unpad.webp"
import sman11 from "../assets/sman11.png"
import dw from "../assets/logodw.svg"
import di from "../assets/DI.png"

export function CampusCard(){
  return (
    <div className="flex">
      <img src={unpad} className="w-30"/>
      <div>
      <h1><span className="font-bold">Padjadjaran University</span> <span className="italic">August 2017 - November 2023</span> </h1>
      <h1 className="italic">Bachelor of Science in Information Science</h1>
      <h1 className="italic">GPA: 3.59/4.00</h1>
        </div>
      </div>
          
  )
}

export function HighschoolCard(){
  return(
    <div className="flex">
      <img src={sman11} className="w-25"/>
      <div>
            <h1><span className="font-bold">SMAN 11 Bandung</span> <span className="italic">Juli 2014 - Mei 2017</span></h1>
            <h1 className="italic">Social Science</h1>
          </div>
    </div>
  )
}

export function DumbwaysCard(){
  return(
    <div>
      <img src={dw} />
      <div>
        <h1>Bootcamp Dumbways Indonesia</h1>
        <h1>Fullstack developer</h1>
        <ul>
          <li>Built full-stack web applications using React and TypeScript on the frontend, and  Express and TypeScript on the backend, connected to Supabase databases and file storage management.</li>
          <li>Applied RESTful API principles to ensure seamless frontend-backend integration.</li>
          <li>Practiced collaborative software development using Git, GitHub.</li>
          <li>Gained familiarity with modern development practices, including modular architecture, clean code, and debugging techniques.</li>
          </ul>
      </div>
    </div>
  )
}

export function DicodingCard(){
  return (
    <div>
      <img src={di} />
      <div>
        <h1><span>Dicoding Indonesia</span><span>September 2024 - October 2024</span></h1>
        <h1>Back End Path</h1>
        <ul>
          <li>Studied the fundamentals of programming and designed basic algorithms using JavaScript.</li>
          <li>Developed RESTful APIs on the back end and performed testing using Postman.</li>
        </ul>
        </div>

    </div>
  )
}