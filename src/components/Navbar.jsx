import { ul } from 'motion/react-client';
import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi';

export default function Navbar() {
  return (
    <header className='fixed w-full top-0 bg-[#f6f7f5]/90 backdrop-blur-md border-b border-slate-300/60 z-50 '>
        <nav className='max-w-7xl mx-auto p-6 lg:px-32 flex items-center justify-between text-slate-800'>
            <a href="#about" className='inline-block text-xl md:text-2xl font-semibold hover:scale-110 transition-all duration-300'>
                <span className='bg-gradient-to-r from-teal-700 to-amber-600 text-transparent bg-clip-text'>
                    Joselp
                </span>
            </a>
            <NavbarMenu></NavbarMenu>


        </nav>
    </header>

  )
}

export const NavbarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <ul className='hidden md:flex gap-10'>
                <li className='opacity-70 hover:opacity-90  transition-opacity duration-300 hover:underline'>
                    <a href="#about">Sobre mí</a>
                </li>
                                <li className='opacity-70 hover:opacity-90  transition-opacity duration-300 hover:underline'>
                    <a href="#projects">Proyectos</a>
                </li>
                                <li className='opacity-70 hover:opacity-90  transition-opacity duration-300 hover:underline'>
                    <a href="#timeline">Trayectoria</a>
                </li>
            </ul>
            <button className='md:hidden'>
                <BiMenu className='text-3xl' onClick={()=>setIsOpen(!isOpen)}></BiMenu>
            </button>
            {isOpen &&(
                <ul className='gap-4 py-4 md:hidden absolute top-19 right-0 left-0 flex flex-col align-middle justify-center items-center bg-[#f6f7f5]/95 border-b border-slate-300/60'>
                    <li className='opacity-70 hover:opacity-90  transition-opacity duration-300 hover:underline'>
                        <a href="#about">About</a>
                    </li>
                    <li className='opacity-70 hover:opacity-90  transition-opacity duration-300 hover:underline'>
                        <a href="#projects">Projects</a>
                    </li>
                    <li className='opacity-70 hover:opacity-90  transition-opacity duration-300 hover:underline'>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            )}
        </>
    )
}
