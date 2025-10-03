import Navbar from "./Components/Navbar"
import About from "./MainLayoutComponents/About"
import Introduction from "./MainLayoutComponents/Introduction"
import Projects from "./MainLayoutComponents/Projects"


function App() {

  return (
    <div className="w-full max-h-full overflow-y-auto">
      <Navbar/>
      <Introduction />
      <About />
      <Projects/>
    </div>
  )
}

export default App
