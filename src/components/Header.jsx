import React from 'react';
import { Link } from 'react-router-dom';
import scrollToSection from './ScrollToSection'

//deixar aluguel e montagem de vestido visiveis em mobile

class Header extends React.Component{
    render() {
        return (
            <header class="w-full flex flex-col justify-center space-y-4 lg:flex-row lg:justify-between lg:space-y-0 px-10 text-dourado sticky top-0 overflow-x-hidden bg-slate-100 items-center py-5 z-10">
                <Link class="text-5xl cursor-pointer" to="/">SERAFINI</Link>
                <div class="align-middle space-x-8 hidden md:block">
                    <a class="cursor-pointer border-b border-transparent transition ease-in-out duration-300 delay-75 hover:border-dourado" href='#history' onClick={(e) => scrollToSection(e, 'history')}>QUEM SOMOS</a>
                    <Link class="cursor-pointer border-b border-transparent transition ease-in-out duration-500 delay-75 hover:border-dourado" to="/montagem">MONTE SEU VESTIDO</Link>
                    <a class="cursor-pointer border-b border-transparent transition ease-in-out duration-500 delay-75 hover:border-dourado" href='#caroulsel' onClick={(e) => scrollToSection(e, 'caroulsel')}>VISUALIZAÇÃO 3D</a>
                    <a class="cursor-pointer border-b border-transparent transition ease-in-out duration-500 delay-75 hover:border-dourado" href='#teste4' onClick={(e) => scrollToSection(e, 'teste4')}>CONTATOS</a>
                </div>
                <Link class="hidden md:block cursor-pointer border-b border-transparent transition ease-in-out duration-500 delay-75 hover:border-dourado" to='/aluguel'>ALUGUEL DE SALÃO</Link>
            </header>
                
        );
    } 
}

export default Header;