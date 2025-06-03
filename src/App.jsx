import About from "./components/About";
import Conctact from "./components/Conctact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";

function App() {
  const bgClass = "bg-black bg-linear-to-t/oklab from-neutral-950 to-cyan-700/40 from-60% to-6=90%"
  return (
    <div className="min-h-screen ">
      <div className={" min-h-screen w-full top-0 "+bgClass}>
        <Navbar></Navbar>
        <About></About>
        <Projects></Projects>
        <Timeline></Timeline>
        
        {/**
         * 
        
        <Conctact></Conctact>
         */}
      </div>

    </div>
  );
}

export default App;
