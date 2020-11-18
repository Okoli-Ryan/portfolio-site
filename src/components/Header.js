import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../styles/header.css';
import hamburger from '../images/menu.svg';
import Cancel from '../images/cancel.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { spinVariant, delayVariant } from '../variants';

export default function Header() {
	const history = useHistory();
	const location = useLocation();
	const [display, setDisplay] = useState(false);

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

	const contactPage = () => {
		setDisplay(false);
		history.push('/contact');
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
					<button
						style={{ color: location.pathname.includes('contact') ? '#4f99b2' : null }}
						className="menu-item-desktop"
						onClick={contactPage}
						// onClick={servicesPage}
					>
						Contact
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
						<div className="menu-item cursor" onClick={contactPage}>
							Contact
						</div>
						
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
