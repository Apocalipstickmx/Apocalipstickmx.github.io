import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import '../styles/Navbar.css'


const Navbar = () => {
    const comp = useRef()

    useGSAP(() => {
        gsap.from('.nav', {
            y: -100,
            delay: 0.4
        })
        gsap.from(['#home', '#quienes', '#work', '#contact'], {
            y: -50,
            stagger: 0.3
        }) 
    }, { scope: comp})

    return(
        <div ref={comp} className="navbar">
            <div className='nav'>
                <div className='logo'>
                    <p id='logo'>x House of Apocalipstick x</p>
                </div>
                <ul>
                    <li id='home' ><a href="#hero">Home</a></li>
                    <span className='vr'></span>
                    <li id='quienes'> <a href="#about">Quienes somos</a></li>
                    <li id='work'><a href="#our-work">Nuestro Trabajo</a></li>
                    <li id='contact'><a href="#contact-me">Contacto</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar