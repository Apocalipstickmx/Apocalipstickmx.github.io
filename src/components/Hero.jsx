import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import '../styles/Hero.css';


const Hero = () => {
    const comp = useRef()
    
    useGSAP(() => {
        gsap.from('#title1', {
            opacity: 0,
            y: -400 ,
            delay: 1,
            stagger: 1,
            ease: 'slow'
        })

        gsap.from('.logo1', {
          x: -300,
          delay: 1,
          ease: 'slow'
        })

        gsap.from('.logo2', {
          x: +300,
          delay: 1,
          ease: 'slow'
        })
        gsap.from(['#slogan-top-1', '#slogan-top-2'], {
          y: -300,
          delay: 1.5,
          stagger: 0.5,
          ease: 'slow'
        })
        gsap.from(['#slogan-bottom-1', '#slogan-bottom-2'], {
          y: 300,
          delay: 1.5,
          stagger: 0.5,
          ease: 'slow'
        })

    }, { scope: comp})

    
    return (
      <div ref={comp} className='container-hero' id='hero'>
        <div className='dichos top'>
          <h2 id='slogan-top-2'>voguear es punk</h2>
          <h2 id='slogan-top-1'>voguear es matria</h2>
        </div>
        <div id='#title' className='title'>
          <img id='logo-blanco' className='logo1'src="/logo-apocalipstick-blanco.png" alt="logo apocalisptick" />
          <h1 id='title1'>Nuestra venganza es ser felices y somos felices bailando</h1>
          <img id='logo-blanco' className='logo2' src="/logo-apocalipstick-blanco.png" alt="logo apocalisptick" />
        </div>
        <div className='dichos bottom'>
          <h2 id='slogan-bottom-1'>voguear es ternura radical</h2>
          <h2 id='slogan-bottom-2'>voguear es gozar</h2>
        </div>
      </ div>

    )
}

export default Hero