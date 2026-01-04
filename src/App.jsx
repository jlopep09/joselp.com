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
        <Timeline></Timeline>
        <div className="bg-black bg-linear-to-b/oklab from-neutral-950 to-cyan-700/40 from-60% to-6=90%">
        
        <Projects></Projects>
        <footer className="text-center py-6 text-stone-500 pt-10">
        © {new Date().getFullYear()} - Portfolio de José Antonio López Pérez
        </footer>
        </div>
        {/**
         * 
        
        <Conctact></Conctact>
         */}
      </div>

    </div>
  );
}

export default App;
