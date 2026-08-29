import About from "./components/About";
import Conctact from "./components/Conctact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";

function App() {
  const baseBg = "#f8f5ed";

  return (
    <div className="min-h-screen" style={{ backgroundColor: baseBg }}>
      <div className="min-h-screen w-full top-0" style={{ backgroundColor: baseBg }}>
        <Navbar></Navbar>
        <About></About>
        <Timeline></Timeline>
        <div style={{ backgroundColor: baseBg }}>
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
