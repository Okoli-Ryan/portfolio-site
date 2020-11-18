import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import '../styles/hero.css'
import Github from '../images/github-blue.svg'
import Whatsapp from '../images/whatsapp-blue.svg'
import LinkedIn from '../images/linkedin-blue.svg'
import Email from '../images/email-blue.svg'
import { delayVariant } from '../variants'

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
        <motion.div initial="initial" animate="enter" exit="exit" variants={delayVariant} className="hero-image">
			<div className="cont" style={{height: '4.5rem'}}></div>
            <div className="hero-container">
                <h1>Okoli Ugochukwu</h1>
                <h3>Frontend Engineer and UI/UX Designer</h3>
            </div>
            <button className="see-more">
                See more
            </button>
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
        </motion.div>
    )
}
