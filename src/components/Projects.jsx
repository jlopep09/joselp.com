import React from 'react'

export default function Projects() {
  const projectList = [
    {
      projectTitle: 'GreenhouseIOT',
      imgSrc: 'greenhouseiot.jpg',
      imgAlt: 'GreenhouseIOT project',
      projectDesc: 'Sistema de gestión de módulos de invernadero impresos en 3D. Este proyecto combina tecnologías de diseño 3D, programación de microcontroladores, backend, bases de datos, un frontend web y diseño de circuitos.',
      projectTags: ['Arduino', 'FastAPI', 'React', 'Ansible', 'MariaDB'],
      projectLink: 'https://joselp-2.gitbook.io/joselp.com/proyectos/greenhouseiot',
      imgRenderFormat: "object-cover"
    },
    {
      projectTitle: 'Fororates',
      imgSrc: 'fororates/logo.png',
      imgAlt: 'Fororates project',
      projectDesc: 'ForoRates es una red social web donde los usuarios pueden compartir sus opiniones sobre diversos productos y servicios mediante hilos de comentarios organizados. Además se incluyen compras de ventajas en una tienda.',
      projectTags: ['React', 'PostgreSQL', 'Auth0'],
      projectLink: 'https://joselp-2.gitbook.io/joselp.com/proyectos/fororates',
      imgRenderFormat: "object-contain"
    }
    ,
    {
      projectTitle: 'Tarkov PouchGuesser',
      imgSrc: 'icons/questionMark.svg',
      imgAlt: 'Fororates project',
      projectDesc: 'Juego web basado en Escape from Tarkov. Actualmente en desarrollo, proximamente se darán mas detalles. Puedes visitar el repositorio haciendo click para ver su estado.',
      projectTags: ['React', 'MongoDB', 'Java Spring', 'Docker compose'],
      projectLink: 'https://github.com/jlopep09/TarkovGuessr',
      imgRenderFormat: "object-contain"
    }
  ];

  return (
    <>
      <h2 className='text-white text-2xl font-bold text-center pt-30' id='projects'>Mis proyectos</h2>
      <div className='flex flex-col justify-center items-center w-full py-10'>
        <div className='grid md:grid-cols-2 max-w-6xl items-center justify-between gap-5'>
          {projectList.map((project, index) => (
            <Project
              key={index}
              projectTitle={project.projectTitle}
              imgSrc={project.imgSrc}
              imgAlt={project.imgAlt}
              projectDesc={project.projectDesc}
              projectTags={project.projectTags}
              projectLink={project.projectLink}
              imgRenderFormat={project.imgRenderFormat}
            />
          ))}
        </div>
      </div>
    </>
  )
}

function Project({ projectTitle, imgSrc, imgAlt, projectDesc, projectTags, projectLink, imgRenderFormat }) {

  const imgClassNames = imgRenderFormat + " h-50 bg-neutral-700"
  return (
    <a href={projectLink} target='_blank' className='flex flex-col bg-gradient-to-t from-cyan-950/50 to-cyan-500/30 min-h-20 w-xs rounded-md hover:scale-103 transition-all duration-300 cursor-pointer'>
      <h3 className='text-xl font-bold text-white text-center py-2'>{projectTitle}</h3>
      <img src={imgSrc} alt={imgAlt} className={imgClassNames} />
      <p className='py-5 text-sm text-white text-center h-35'>{projectDesc}</p>
      <p className='flex w-full justify-center gap-2 pb-3'>
        {projectTags.map((tag, idx) => (
          <span key={idx} className='bg-cyan-200 text-neutral-700 rounded-md p-1 py-0 text-xs font-bold'>
            {tag}
          </span>
        ))}
      </p>
    </a>
  )
}
