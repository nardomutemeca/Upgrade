import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
    return(
        <header className="bg-white shadow-sm p-8 text-gray-500
         items-center flex justify-between">
            <NavLink to='/'>
               <h2 className='font-bold letterSize'>Ber<span className='text-blue-400'>Nardo_v.1.2</span></h2>
            </NavLink>
            <Nav />
        </header>
    )
};


export default Header;