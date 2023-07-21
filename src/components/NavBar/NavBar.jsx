import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <header>
            <nav>
                <Link to={"/"} className='titulo'>
                    <h1 >SanixSwatch</h1>
                </Link>
                
                <ul>
                    <li>
                        <NavLink to={`/categoria/Hombre`} className="enlace">Hombre</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/categoria/Mujer`} className="enlace">Mujer</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/categoria/Smart`} className="enlace">SmartWatch</NavLink>
                    </li>
                </ul>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar