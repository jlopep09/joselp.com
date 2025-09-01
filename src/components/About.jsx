import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'

export default function About() {
  const [isOpenEmail, setIsOpenEmail] = useState(false)

  return (
    <>
      
      <section className='mx-auto max-w-6xl w-full min-h-screen flex flex-col md:flex-row items-center justify-center' id='about'>
        <AboutTextSection isOpenEmail={isOpenEmail} setIsOpenEmail={setIsOpenEmail} SpecificClasses={"hidden md:flex"}></AboutTextSection>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex flex-col items-center justify-center'
          
        >
          <img
            src='https://avatars.githubusercontent.com/u/91264665?v=4'
            alt='profile photo'
            className='cursor-pointer max-w-xs rounded-full hover:shadow-blue-500/40  hover:shadow-2xl hover:shadow-p transition-all duration-300'
          />
        </motion.div>
        <AboutTextSection isOpenEmail={isOpenEmail} setIsOpenEmail={setIsOpenEmail} SpecificClasses={"md:hidden flex pt-5"}></AboutTextSection>
        
      </section>

    </>
  )
}

 const AboutTextSection = ({SpecificClasses, isOpenEmail, setIsOpenEmail}) => {
  const aboutClasses = SpecificClasses+' flex-col items-center justify-center text-white/90'
  return (
    <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={aboutClasses}
        >
          <div className='cursor-default flex flex-col justify-center align-middle items-left max-w-2xs gap-1 mr-10'>
            <span className='flex w-fit text-xs bg-neutral-800 p-2 rounded-md py-1'>Open to hire</span>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-500 to-green-300 text-transparent bg-clip-text'>
              José Antonio López
            </h1>
            <p className='text-lg bg-gradient-to-r font-light from-blue-700 to-blue-750 via-blue-400 text-transparent bg-clip-text from-5% to-95%'>
              Ingeniero informático
            </p>
            <p className='text-xs text-neutral-400'>
              Soy graduado en Ingeniería Informática y me apasiona desarrollar proyectos innovadores que me permitan aprender y crecer cada día.
            </p>
            <p className='text-xs text-neutral-400'>
              Aquí encontrarás información sobre mí y los proyectos que he desarrollado hasta la fecha.
            </p>

            <div className='text-xl pt-2 flex gap-2 items-center'>
              <a
                href='https://github.com/jlopep09'
                target='_blank'
                className='flex w-fit hover:scale-105 hover:rotate-6 transition-all duration-200 opacity-80 hover:opacity-100'
              >
                <FaGithub />
              </a>
              <a
                href='https://www.linkedin.com/in/jose-l%C3%B3pez-perez-485006296/'
                target='_blank'
                className='flex w-fit hover:scale-105 hover:rotate-6 transition-all duration-200 opacity-80 hover:opacity-100'
              >
                <FaLinkedin />
              </a>

              <button
                onClick={() => setIsOpenEmail((prev) => !prev)}
                className='flex items-center gap-2 w-fit hover:scale-105 hover:rotate-6 transition-all duration-200 opacity-80 hover:opacity-100 text-2xl'
              >
                <CgMail />
              </button>

              {isOpenEmail && (
                <motion.p
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className='text-sm text-neutral-300'
                >
                  <a href='mailto:jose.lppz03@gmail.com'>jose.lppz03@gmail.com</a>
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>
  )
}

