export function Footer(){
  return (
    <footer className="px-[10vw] py-[3vw] bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="text-sm max-w-xs">
             Thanks for stopping by! I'm open to job opportunities, freelance work, and meaningful collaborations. Don't hesitate to get in touch!</p>
          </div>
        <div>
          <h1 className="text-xl font-semibold mb-2">Navigation</h1>
          <ul className="text-sm space-y-1">
            <li><a href="#Home" className="hover:underline">Home</a></li>
            <li><a href="#Summary" className="hover:underline">Summary</a></li>
            <li><a href="#Projects" className="hover:underline">Projects</a></li>
            </ul>
          </div>
        <div>
          <h1 className="text-xl font-semibold mb-2">Found Me</h1>
          <ul className="text-sm space-y-1">
            <li>
              <a 
              href="https://www.linkedin.com/in/yudha-dwi-lesmana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline">
                LinkedIn</a></li>
            <li>
              <a 
              href="https://github.com/yudha-Dlesmana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline">
                GitHub</a></li>
            <li>
              <a 
              href="mailto:yudha.dlesmana@gmail.com" 
              className="hover:underline">
                Email</a></li>
            </ul>
          </div>
        </div>
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Yudha Dwi Lesmana. Dibuat menggunakan React & Tailwind CSS.
        </div>
      </footer>
  )
}