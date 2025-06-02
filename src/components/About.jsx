import React from 'react'
import {motion} from "framer-motion"
import { FaGithub } from "react-icons/fa";
export default function About() {
  return (
    <>
        <section className=' mx-auto max-w-6xl w-full min-h-screen flex items-center justify-center' id='about'>
            <motion.div 
                initial={{opacity: 0, x:-50}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true}}
                transition={{duration:0.8, delay:0.4}}
                className='flex flex-col items-center justify-center text-white/90'
            >
                <div className='cursor-default flex flex-col justify-center align-middle items-left max-w-2xs gap-1 mr-10'>
                    <span className='flex w-fit text-xs bg-neutral-800 p-2 rounded-md py-1 '>Open to hire</span>
                    <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-500 to-green-300  text-transparent bg-clip-text'>José Antonio López</h1>
                    <p className='text-lg bg-gradient-to-r font-light from-blue-700 to-blue-750 via-blue-400 text-transparent bg-clip-text from-5% to-95%'>Ingeniero informático</p>
                    <p className='text-xs text-neutral-400'>Soy un estudiante de ingeniería informática con muchas ganas de desarrollar proyectos interesantes que me permitan seguir aprendiendo cada día. </p> 
                    <p className='text-xs text-neutral-400'>Aquí encontarás información sobre mí y los proyectos que he desarrollado hasta la fecha.</p>
                    <div className='text-xl pt-2'>
                        <a href="https://github.com/jlopep09" target="_blank" className='flex w-fit hover:scale-105 hover:rotate-6 transition-all duration-200 opacity-80 hover:opacity-100'><FaGithub></FaGithub></a>
                    </div>
                </div>
                
            </motion.div>
            <motion.div 
                initial={{opacity: 0, y:50}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:0.8, delay:0.2}}
                className='flex flex-col items-center justify-center '
            >
                <img src="https://avatars.githubusercontent.com/u/91264665?v=4" alt="profile photo" className='cursor-pointer max-w-xs rounded-full hover:shadow-blue-500/40  hover:shadow-2xl hover:shadow-p transition-all duration-300'/>
            </motion.div>
            
        </section>
    </>
  )
}
