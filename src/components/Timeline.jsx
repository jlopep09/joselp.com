import React from 'react'

function Timeline() {
  return (
    <section id="timeline" className="flex flex-col items-center justify-center px-4 pt-30 pb-0 ">
  
  <h2 className="text-2xl font-bold mb-2 text-slate-800 text-center">Experiencia</h2>
  <Experiencia></Experiencia>
  <h2 className="text-2xl font-bold mb-2 text-slate-800 text-center mt-8">Formación</h2>
  <Estudios></Estudios>
  
  
</section>
  )
}
function Experiencia() {
  const cardClasses = "p-6 hover:shadow-xl rounded-lg w-full bg-white/75 border border-slate-200 shadow-sm shadow-slate-300/50 min-h-20 hover:scale-103 transition-all duration-300"
  return (<div className="w-full max-w-3xl space-y-6 border-t-1 border-slate-300 pt-5">
    <div className="flex flex-col space-y-8">

      <div className="flex flex-col sm:flex-row items-center sm:gap-6">

        <div className="text-slate-600 font-semibold w-32 text-center">Nov 2025 - Actualidad</div>
        <div className={cardClasses}>
          <div className="text-slate-700">
            Desarrollador software junior fullstack en <strong>Xeridia</strong>, participando en el desarrollo y mantenimiento de aplicaciones web.
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:gap-6">

        <div className="text-slate-600 font-semibold w-32 text-center">Oct - Dic 2024</div>
        <div className={cardClasses}>
          <div className="text-slate-700">
            Realizo prácticas profesionales en <strong>Hewlett Packard Enterprise (CDS)</strong>, creando de cero un proyecto completo llamado GreenhouseIOT y aplicando mis conocimientos en un entorno empresarial.
          </div>
        </div>

      </div>
      
    </div>
   </div>)
}
    
function Estudios() {
  const cardClasses = "p-6 hover:shadow-xl rounded-lg w-full bg-white/75 border border-slate-200 shadow-sm shadow-slate-300/50 min-h-20 hover:scale-103 transition-all duration-300"
  
  return (
    
  <div className="w-full max-w-3xl space-y-6 border-t-1 border-slate-300 pt-5">
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col sm:flex-row items-center sm:gap-6">

      <div className="text-slate-600 font-semibold w-32 text-center">Marzo 2026 - Actualidad</div>
        <div className={cardClasses}>
          <div className="text-slate-700">
            <strong>Master en DevOps</strong> por la <strong>Universidad de La Rioja</strong>, especializando en la implementación y mantenimiento de infraestructuras de software. Enfoque en tecnologías cloud.
          </div>
        </div>

      </div>

      <div className="flex flex-col sm:flex-row items-center sm:gap-6">
        <div className="text-slate-600 font-semibold w-32 text-center">2021 - 2025</div>
        <div className={cardClasses}>
          <div className="text-slate-700">
            <strong>Grado en Ingeniería Informática</strong> en la <strong>Universidad de León</strong>, iniciando mi formación en desarrollo de software y adquiriendo conocimientos fundamentales en programación, algoritmos y estructuras de datos.
          </div>
        </div>

      </div>
      <div className="flex flex-col sm:flex-row items-center sm:gap-6">

        <div className="text-slate-600 font-semibold w-32 text-center ">2023</div>
        <div className={cardClasses}>
          <div className="text-slate-700">
            Obtengo el título de la <strong>Microcredencial Universitaria en C++</strong> ofrecida por la Universidad de León, fortaleciendo mis habilidades en programación de bajo nivel.
          </div>
        </div>

      </div>


    </div>
   </div>
    
  )
}


export default Timeline