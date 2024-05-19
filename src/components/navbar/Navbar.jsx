import React, {useState} from 'react'
import "./navbar.css"
import { IoIosCloseCircle } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = () => {

    const [active, setActive] = useState('navbar')

    const showNavbar = () =>{
        setActive('navbar activeNavbar')
    }
    const removeNavbar = () =>{
        setActive('navbar')
    }

    return (
        <section className='navbarSection'>
            <header className="header flex">
                <div className='logoDiv'>
                    <a href="#" className="logo flex">
                        <h1>Travlinggggg!</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className='navList flex'>
                        <li className='navItem'>
                            <a href='#' className='navLink'>Home</a>
                            <a href='#' className='navLink'>Packages</a>
                            <a href='#' className='navLink'>About Us</a>
                            <a href='#' className='navLink'>Contact Us</a>
                            <button className='btn'>
                                <a href='#'>SIGN UP</a>
                            </button>
                        </li>
                    </ul>
                    <div onClick={removeNavbar} className='closeNavbar'>
                        <IoIosCloseCircle  className='icon'/>
                    </div>
                </div>

                <div onClick={showNavbar} className="toggleNavbar">
                    <BsThreeDotsVertical className='icon'/>
                </div>

            </header>
        </section>
    )
}

export default Navbar