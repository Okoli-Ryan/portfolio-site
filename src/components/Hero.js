import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import '../styles/hero.css'
import Github from '../images/github-blue.svg'
import Whatsapp from '../images/whatsapp-blue.svg'
import LinkedIn from '../images/linkedin-blue.svg'
import Email from '../images/email-blue.svg'
import { LandingVariants, opacityVariant } from '../variants'

export default function Hero() {
	const [showNo, setShowNo] = useState(false)
	const number = useRef(0)

    
	const goToGithub = () => {
		window.location.href = 'https://github.com/Okoli-Ryan'
	}

	
	const goToLinkedin = () => {
		window.location.href = 'https://linkedin.com/in/okoliugo'
	}

	const copyNumber = () => {
		setShowNo(true)
		number.current.select();
        document.execCommand('copy')
		// alert('number copied to clipboard')
	}

    return (
        <div className="hero-image">
            <div className="hero-container">
                <motion.h1 initial="initial" animate="in" exit="out" variants={LandingVariants} transition={{ duration: .8}} >Okoli Ugochukwu</motion.h1>
                <motion.h3 initial="out" animate="in" exit="initial" variants={LandingVariants}>Frontend Engineer and UI/UX Designer</motion.h3>
            </div>
            <motion.button initial="initial" animate="in" variants={opacityVariant} className="see-more">
                See more
            </motion.button>
            <div className="contact-container">
					<button tabIndex={0} onFocus={copyNumber} onBlur={() => setShowNo(false)} className="contact-option whatsapp">
						<img src={Whatsapp} onClick={copyNumber} alt="" />
						<input style={{ display: showNo ? 'block' : 'none'}} width="30" readOnly ref={number} className="whatsapp-no" value="+2349082231742"/>
					</button>
					<button className="contact-option" onClick={goToGithub}>
						<img src={Github} alt="" />
					</button>
					<button className="contact-option">
						<img src={Email} alt="" />
					</button>
					<button className="contact-option" onClick={goToLinkedin}>
						<img src={LinkedIn} alt="" />
					</button>
				</div>
        </div>
    )
}
