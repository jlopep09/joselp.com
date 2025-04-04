import React from 'react'
import Navbar from './components/Navbar'
import ProjectCard from './components/ProjectCard'

  function LineaTiempo() {
    return (
<section id="Estudios" className="flex flex-col items-center justify-center pt-30 pb-30 bg-white">
  <h2 className="text-3xl font-bold mb-8 text-stone-800 text-center">Mi trayectoria</h2>
  <div className="w-full max-w-3xl space-y-6">
    <div className="flex flex-col space-y-8">
      <div className="flex items-center gap-6">
        <div className="text-stone-500 font-semibold w-32">2021</div>
        <div className="p-6 bg-white shadow-xl rounded-lg w-full">
          <div className="text-stone-800">
            Comienzo mis estudios en Ingeniería Informática en la <strong>Universidad de León</strong>, donde inicio mi camino en el mundo del desarrollo y las tecnologías.
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-stone-500 font-semibold w-32">2023</div>
        <div className="p-6 bg-white shadow-xl rounded-lg w-full">
          <div className="text-stone-800">
            Obtengo el título de la <strong>Microcredencial Universitaria en C++</strong> ofrecida por la Universidad de León, fortaleciendo mis habilidades en programación de bajo nivel.
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-stone-500 font-semibold w-32">Oct - Dic 2024</div>
        <div className="p-6 bg-white shadow-xl rounded-lg w-full">
          <div className="text-stone-800">
            Realizo prácticas profesionales en <strong>Hewlett Packard Enterprise (CDS)</strong>, creando de cero un proyecto completo llamado GreenhouseIOT y aplicando mis conocimientos en un entorno empresarial.
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-stone-500 font-semibold w-32">2025</div>
        <div className="p-6 bg-white shadow-xl rounded-lg w-full">
          <div className="text-stone-800">
            Finalizaré el grado en <strong>Ingeniería Informática</strong> por la Universidad de León en Julio, consolidando mi formación y experiencia en desarrollo de software.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    )
  }
export default function Home() {
  return (
    <>
      <header className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section
        className="w-full h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/herobg.jpg')" }}
      >
        {/* Capa oscura encima de la imagen */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

        {/* Texto centrado encima del fondo */}
        <p className="text-white text-5xl md:text-5xl font-sans z-10 text-center">
        Powered by caffeine and infinite loops...
        </p>
      </section>

      {/* About Section */}
      <section id="Sobre_mi" className="flex flex-col md:flex-row items-center justify-center gap-10 p-10 bg-white  pt-30">
        <img
          src="https://avatars.githubusercontent.com/u/91264665?v=4"
          alt="Perfil"
          className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover border-4 border-stone-800 shadow-lg"
        />
        <div className="max-w-xl text-center md:text-left">
          <h2  className="text-2xl font-semibold mb-4 text-stone-800">¡Hola! Soy José</h2>
          <p className="text-stone-600 text-lg">
            Soy un estudiante de ingeniería informática con muchas ganas de desarrollar proyectos interesantes que me permitan seguir aprendiendo cada día. Aquí encontarás información sobre mí y los proyectos que he desarrollado hasta la fecha.
          </p>
        </div>
      </section>

      <section id="Proyectos" className="flex flex-col items-center justify-center gap-7 p-10 bg-white  pt-30">
      <h2 className="text-3xl font-bold mb-8 text-stone-800 text-center">Mis proyectos</h2>
        <div className='flex flex-row gap-10 items-center justify-center'>
          <ProjectCard img_src={"greenhouseiot.jpg"} title={"GreenhouseIOT"}>
            Sistema de gestión de módulos de invernadero impresos en 3D. Este proyecto combina tecnologías de diseño 3D, programación de microcontroladores, backend, bases de datos, un frontend web y diseño de circuitos.
          </ProjectCard>
          <ProjectCard img_src={"https://miposicionamientoweb.es/wp-content/uploads/2022/06/que-es-un-blog-y-para-que-sirve-todo-sobre-el-blogging_.png.webp"} title={"Fororates"}>
            Foro desarrollado de forma conjunta con 3 amigos para ofrecer una plataforma donde los usuarios podrán participar en hilos de debate sobre productos y servicios. Además implementa sistemas de reputación y tienda de puntos virtuales.
          </ProjectCard>
          <ProjectCard img_src={"yggdrasil.jpeg"} title={"Yggdradil's Chosen"}>
            Juego desarrollado en Unity junto a 2 amigos basado en mitología vikinga. Ofrece una experiencia similar a títulos como Isaac y Enter the dungeon pero aportando una vista 3D y muchas nuevas mecánicas.
          </ProjectCard>
        </div>
      </section>

      <LineaTiempo/>




      <footer className="text-center py-6 text-stone-500 bg-stone-100">
        © {new Date().getFullYear()} - Portfolio de José Antonio López Pérez
      </footer>
    </>
  )
}



