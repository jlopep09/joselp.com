import React from 'react'

function Timeline() {
   const cardClasses = "p-6 hover:shadow-xl rounded-lg w-full bg-gradient-to-l from-cyan-950/50 to-cyan-500/30 min-h-20 from-5% to-95% hover:scale-103 transition-all duration-300"
  return (
    <section id="timeline" className="flex flex-col items-center justify-center px-4 pt-30 pb-0 bg-black bg-linear-to-b/oklab from-neutral-950 to-cyan-700/40 from-60% to-6=90%">

  <h2 className="text-2xl font-bold mb-2 text-neutral-100 text-center">Mi trayectoria</h2>

  <div className="w-full max-w-3xl space-y-6 border-t-1 border-amber-50/30 pt-5">
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col sm:flex-row items-center sm:gap-6">

        <div className="text-neutral-300 font-semibold w-32 text-center">2021</div>
        <div className={cardClasses}>
          <div className="text-white">
            Comienzo mis estudios en Ingeniería Informática en la <strong>Universidad de León</strong>, donde inicio mi camino en el mundo del desarrollo y las tecnologías.
          </div>
        </div>

      </div>
      <div className="flex flex-col sm:flex-row items-center sm:gap-6">

        <div className="text-neutral-300 font-semibold w-32 text-center ">2023</div>
        <div className={cardClasses}>
          <div className="text-white">
            Obtengo el título de la <strong>Microcredencial Universitaria en C++</strong> ofrecida por la Universidad de León, fortaleciendo mis habilidades en programación de bajo nivel.
          </div>
        </div>

      </div>
      <div className="flex flex-col sm:flex-row items-center sm:gap-6">

        <div className="text-neutral-300 font-semibold w-32 text-center">Oct - Dic 2024</div>
        <div className={cardClasses}>
          <div className="text-white">
            Realizo prácticas profesionales en <strong>Hewlett Packard Enterprise (CDS)</strong>, creando de cero un proyecto completo llamado GreenhouseIOT y aplicando mis conocimientos en un entorno empresarial.
          </div>
        </div>

      </div>
      <div className="flex flex-col sm:flex-row items-center sm:gap-6">

        <div className="text-neutral-300 font-semibold w-32 text-center">2025</div>
        <div className={cardClasses}>
          <div className="text-white">
            Finalizaré el grado en <strong>Ingeniería Informática</strong> por la Universidad de León en Julio, consolidando mi formación y experiencia en desarrollo de software.
          </div>
        </div>

      </div>
    </div>
  </div>
  <footer className="text-center py-6 text-stone-500 pt-10">
    © {new Date().getFullYear()} - Portfolio de José Antonio López Pérez
    </footer>
</section>
  )
}

export default Timeline