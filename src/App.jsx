import About from "./components/About";
import Conctact from "./components/Conctact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";

function App() {
  const bgClass = "bg-[#f6f7f5] bg-linear-to-t/oklab from-[#f6f7f5] via-[#edf5f2] to-[#f8f5ed] from-60% to-90%"
  return (
    <div className="min-h-screen ">
      <div className={" min-h-screen w-full top-0 "+bgClass}>
        <Navbar></Navbar>
        <About></About>
        <Timeline></Timeline>
        <div className="bg-linear-to-b/oklab from-[#f6f7f5] via-[#eef5f2] to-[#f8f5ed] from-60% to-90%">
        
        <Projects></Projects>
        <footer className="text-center py-6 text-slate-500 pt-10">
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
