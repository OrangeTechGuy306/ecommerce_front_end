import React from 'react'
import {Link} from "react-router-dom"
import "./Nav.css"
import * as Unicons from "@iconscout/react-unicons"
// import HamburgerDrawer from "react-hamburger-drawer"

const Nav = () => {
  return (
    <section>
            <div className='navContainer'>
              
                <nav className='navItemContainer'>
                    <ul>
                        <li><Link to="/" className='logoLink'>O-COMMERCE</Link></li>
                        <li><Link to="/"  className='navLinks'>Home</Link></li>
                        <li><Link to="/" className='navLinks'>Brands</Link></li>
                        <li><Link to="/" className='navLinks'>Special</Link></li>
                        <li><Link to="/"  className='navLinks'>About us</Link></li>
                        <li><Link to="/"  className='navLinks'>Contact Us</Link></li>
                        <li><Link to="/"  className='navLinks'>Blogs</Link></li>
                    </ul>
                </nav>

                <div className='cartContainer'>

                    <div className='cart'>
                        <h2><Unicons.UilShoppingCart color="white" size={35} /></h2>
                        <h4 className='cartItemNum'>40</h4>
                    </div>

                    <div className='clientContainer'>
                        <h3>Orange Tech Guy</h3>
                    </div>
                </div>

            </div>
    </section>
  )
}

export default Nav