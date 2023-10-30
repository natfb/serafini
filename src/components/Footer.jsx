import React from "react"
import Whatsapp from "../assets/whatsapp-icon.svg"
import Facebook from "../assets/facebook-icon.svg"
import Instagram from "../assets/instagram-icon.svg"
import '../index.css'
import { Link } from 'react-router-dom'
import scrollToSection from "./ScrollToSection"

function AnoAtual() {
    return new Date().getFullYear();
}

function Footer() {
    return (
        <footer class="w-full justify-around center bg-slate-100 grid-cols-2">

            {/*---redes socias--------*/}
            <div>
                {/* se tiver redes sociais */}
                <div className="flex pt-4 my-2 justify-center gap-1 text-[var(--text-color)] fill-[var(--text-color-footer)]">
                <a href="" target="_blank"><img src={Facebook} alt="logo" className="w-[1.45em] mx-4 my-2"/></a>    
                <a href="" target="_blank"><img src={Instagram} alt="logo" className="w-[1.5em] mx-4 my-2"/></a>    
                    <a href="" target="_blank"><img src={Whatsapp} alt="logo" className="w-[1.5em] mx-4 my-2"/></a>    
                </div>
            </div>

            {/*---Menu--------------------*/}  
            <nav class="w-full flex flex-col justify-center space-y-5 lg:flex-row lg:justify-between lg:space-y-0 px-10 text-dourado overflow-x-hidden bg-slate-100 items-center py-5 z-10">
                <div class="align-middle space-x-8 md:block w-full">
                    <a class="cursor-pointer border-b border-transparent transition ease-in-out duration-300 delay-75 hover:border-dourado" href='#history' onClick={(e) => scrollToSection(e, 'history')}>QUEM SOMOS</a>
                    <Link class="cursor-pointer border-b border-transparent transition ease-in-out duration-500 delay-75 hover:border-dourado" to="/montagem">MONTE SEU VESTIDO</Link>
                    <a class="cursor-pointer border-b border-transparent transition ease-in-out duration-500 delay-75 hover:border-dourado" href='#caroulsel' onClick={(e) => scrollToSection(e, 'caroulsel')}>VISUALIZAÇÃO 3D</a>
                    <a class="cursor-pointer border-b border-transparent transition ease-in-out duration-500 delay-75 hover:border-dourado" href='#teste4' onClick={(e) => scrollToSection(e, 'teste4')}>CONTATOS</a>
                    <Link class="hidden md:block cursor-pointer border-b border-transparent transition ease-in-out duration-500 delay-75 hover:border-dourado" to='/aluguel'>ALUGUEL DE SALÃO</Link>
                </div>   
            </nav>
            {/*---direitos autorais--------*/} 
            <p className="py-4 mx-0 text-md lg:text-md text-[var(--text-color-footer)]">&copy; { AnoAtual() }  SERAFINI - Todos os direitos reservados. Made by <a href="">EJEC.</a></p>
            
        </footer>
    )
}

export default Footer