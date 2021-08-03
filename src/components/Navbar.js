import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    }

    useEffect (() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick = {closeMobileMenu}>
                        LOGO <i className='fas fa-film' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>

                        {/* <i className={click ? 'fa-solid fa-bars' : 'fa-solid fa-bars-filter'} /> */}
                        <i className={click ? 'fa fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul
                        className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li
                            className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>

                        </li>
                        <li
                            className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>

                        </li>
                        <li
                            className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>

                        </li>
                        <li
                            className='nav-item'>
                            <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>

                        </li>
                    </ul>
                    {button && <Link  to='/signup' buttonStyle='btn--outline'>SIGN UP</Link>}
                </div>
            </nav>
        </>
    )
}

export default Navbar