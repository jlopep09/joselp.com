import React from 'react'

export default function Projects() {
  return (
    <>
    <h2 className='text-white text-2xl font-bold text-center'>Mis proyectos</h2>
    <div className='flex flex-col justify-center align-middle items-center w-full py-10'>
        <div className='grid grid-cols-2 max-w-6xl items-center justify-between align-middle gap-5'>
            <div className='flex flex-col bg-gradient-to-t from-cyan-950/50 to-cyan-500/30 min-h-20 from-5% to-95% w-xs rounded-md hover:scale-103 transition-all duration-300 cursor-pointer'>
                <h3 className='text-xl font-bold text-white text-center py-2'>GreenhouseIOT</h3>
                <img src="greenhouseiot.jpg" alt="GreenhouseIOT project" className='object-cover h-50'/>
                <p className='py-5 text-sm text-white text-center h-35'>Sistema de gestión de módulos de invernadero impresos en 3D. Este proyecto combina tecnologías de diseño 3D, programación de microcontroladores, backend, bases de datos, un frontend web y diseño de circuitos.</p>
                <p className='flex w-full justify-center gap-2 pb-3'>
                    <span className='bg-cyan-200 text-neutral-700 rounded-md p-1 py-0 text-sm font-bold'>Arduino</span>
                    <span className='bg-cyan-200 text-neutral-700 rounded-md p-1 py-0 text-sm font-bold'>FastAPI</span>
                    <span className='bg-cyan-200 text-neutral-700 rounded-md p-1 py-0 text-sm font-bold'>React</span>
                    <span className='bg-cyan-200 text-neutral-700 rounded-md p-1 py-0 text-sm font-bold'>Ansible</span>
                </p>
            </div>

            <div className='flex flex-col bg-gradient-to-t from-cyan-950/50 to-cyan-500/30 min-h-20 from-5% to-95% w-xs rounded-md hover:scale-103 transition-all duration-300 cursor-pointer'>
                <h3 className='text-xl font-bold text-white text-center py-2'>Fororates</h3>
                <img src="projectimg.jpg" alt="GreenhouseIOT project" className='object-cover h-50'/>
                <p className='py-5 text-sm text-white text-center h-35'>Sistema de gestión de módulos de invernadero impresos en 3D. Este proyecto combina tecnologías de diseño 3D, programación de microcontroladores, backend, bases de datos, un frontend web y diseño de circuitos.</p>
                <p className='flex w-full justify-center gap-2 pb-3'>
                    <span className='bg-cyan-200 text-neutral-700 rounded-md p-1 py-0 text-sm font-bold'>React</span>
                    <span className='bg-cyan-200 text-neutral-700 rounded-md p-1 py-0 text-sm font-bold'>PostgreSQL</span>
                    <span className='bg-cyan-200 text-neutral-700 rounded-md p-1 py-0 text-sm font-bold'>Auth0</span>
                </p>
            </div>
            
        </div>
    </div>
    </>
  )
}




