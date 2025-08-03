import gabsi from "../../assets/gabsisubang.png"

export function WorkExperience(){
  return(
    <div id="Work Experience" className="bg-[#F9FAFB] px-[10vw] pt-[3vw] space-y-3">
      <h1 className="font-semibold text-2xl text-[#0A2A3A]">Work Experience</h1>
      <AtletBridge/>
      </div>
  )
}

export function AtletBridge(){
  return(
    <div className="flex gap-10">
      <div className="w-35 h-35 flex items-center justify-center">
        <img src={gabsi} className="h-30"/>
        </div>
      <div className="w-2xl">
        <h1 className="flex justify-between items-center">
          <div>
            <span className="text-xl font-semibold flex justify-between items-center text-[#0A2A3A]">Atlet Bridge </span> 
            <span className="text-[#0A2A3A]"> GABSI Subang </span>
            </div>
          <span className="text-base font-normal italic">2021 - 2022</span></h1>
        <ul className="w-[48vw] text-[#4A5A6A] list-disc list-inside">
        <li className="">
          Competed professionally in regional and national bridge tournaments.
          </li>
        <li>
          Enhanced strategic thinking and collaboration under the pressures of competitive bridge.
          </li>
        <li>
          Maintained discipline and commitment to growth and team success.
          </li>
        </ul>       
        </div>
    </div>
  )
}