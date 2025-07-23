import gabsi from "../assets/gabsisubang.png"

export function AtletBridge(){
  return(
    <div className="flex gap-10">
      <div>
        <img src={gabsi} className="size-30"/>
        </div>
      <div>
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