import { Home } from "./components/main/Homes";
import { Summary } from "./components/main/Summarys";
import { Project } from "./components/main/Projects";
import { WorkExperience } from "./components/main/WorkExpriences";
import { EducationTraining } from "./components/main/EducationTraining";
import { Footer } from "./components/main/Footer";


function App() {
  return (
    <>
      <Home/>
      <Summary/>
      <Project/>
      <WorkExperience/>
      <EducationTraining/>
      <Footer/>
    </>
  )
}

export default App
