import React, { useState, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../styles/header.css';
import hamburger from '../images/menu.svg';
import Email from '../images/email.svg';
import Github from '../images/github.svg';
import LinkedIn from '../images/linkedin.svg';
import Whatsapp from '../images/whatsapp.svg';
import Cancel from '../images/cancel.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { spinVariant, delayVariant } from '../variants';

export default function Header() {
	const history = useHistory();
	const location = useLocation();
	const number = useRef(0);
	const [display, setDisplay] = useState(false);
	const [showNo, setShowNo] = useState(false);

	const homePage = () => {
		setDisplay(false);
		history.push('/');
	};

	const servicesPage = () => {
		setDisplay(false);
		history.push('/services');
	};

	const projectsPage = () => {
		setDisplay(false);
		history.push('/projects');
	};

	const goToGithub = () => {
		window.open('https://github.com/Okoli-Ryan', '_blank')
	};

	const goToLinkedin = () => {
		window.open('https://linkedin.com/in/okoliugo', '_blank');
	};

	const copyNumber = () => {
		setShowNo(true);
		number.current.select();
		document.execCommand('copy');
		alert('number copied to clipboard');
	};

	return (
		<>
			<div className="header">
				<div className="logo">
					<div className="logocover cursor" onClick={homePage}>
						OU
					</div>
				</div>
				<div className="menu">
					<img src={hamburger} alt="" onClick={() => setDisplay(true)} className="cursor"/>
					<button
						style={{ color: location.pathname.includes('project') ? '#4f99b2' : null }}
						className="menu-item-desktop"
						onClick={projectsPage}
						// onClick={projectsPage}
					>
						Projects
					</button>
					<button
						style={{ color: location.pathname.includes('service') ? '#4f99b2' : null }}
						className="menu-item-desktop"
						onClick={servicesPage}
						// onClick={servicesPage}
					>
						Services
					</button>
				</div>
			</div>
			<AnimatePresence exitBeforeEnter>
				{display && (
					<motion.div
						className="menubar-container"
						variants={delayVariant}
						initial="initial"
						exit="initial"
						animate="enter"
						transition="transition"
					>
						<div className="cancel" onClick={() => setDisplay(false)}>
							<motion.img src={Cancel} alt="" animate="rotate" exit="out" variants={spinVariant}/>
						</div>
						<div className="menu-item cursor" onClick={homePage}>
							Home
						</div>
						<div className="menu-item cursor" onClick={servicesPage}>
							Services
						</div>
						<div className="menu-item cursor" onClick={projectsPage}>
							Projects
						</div>
						<div className="contact-container">
							<div
								tabIndex={0}
								onFocus={copyNumber}
								onBlur={() => setShowNo(false)}
								className="contact-option whatsapp cursor"
							>
								<img src={Whatsapp} onClick={copyNumber} alt=""/>
								<input
									style={{ display: showNo ? 'block' : 'none' }}
									width="30"
									readOnly
									ref={number}
									className="whatsapp-no"
									value="+2349082231742"
								/>
							</div>
							<div className="contact-option cursor" onClick={goToGithub}>
								<img src={Github} alt="" />
							</div>
							<div className="contact-option cursor">
								<img src={Email} alt="" />
							</div>
							<div className="contact-option cursor" onClick={goToLinkedin}>
								<img src={LinkedIn} alt="" />
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
