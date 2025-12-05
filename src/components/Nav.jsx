import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return(
     <nav>
        <div className="menuIcon">
             <ul className="navbar-list
             flex gap-[2.5rem] ">
                <li>
                    <NavLink to='/' 
                    className='hover:text-blue-400'>Página Inicial</NavLink>
                 </li>
                <li>
                    <NavLink to='/projects' 
                    className='hover:text-blue-400'>Projectos</NavLink>
                 </li>
                <li>
                    <NavLink to='/contact'
                     className='hover:text-blue-400'>Entrar em Contacto</NavLink>
                 </li>
             </ul>
         </div>
    </nav>
    )
}
export default Nav;