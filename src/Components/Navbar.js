import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from "./Button";
import ExploreIcon from '@material-ui/icons/Explore';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)


    const handleClick = () => setClick(!click);
    function closeMobileMenu() {
        setClick(false);
    }

    function showButton() {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" >
                    <ExploreIcon style={{ fontSize: 40 }}/> &ensp;The Tourist
                    </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/OurGallery' className='nav-links' onClick={closeMobileMenu}>Gallery</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/SignUp' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                        </li>

                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}

                </div>
            </nav>
        </>
    );
}

export default Navbar;
