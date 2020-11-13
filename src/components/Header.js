import React, { useState, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../styles/header.css';
import hamburger from '../images/menu.svg';
import Email from '../images/email.svg';
import Github from '../images/github.svg';
import LinkedIn from '../images/linkedin.svg';
import Whatsapp from '../images/whatsapp.svg';
import Cancel from '../images/cancel.svg';

export default function Header() {
	const history = useHistory();
	const location = useLocation()
	const number = useRef(0)
	const [display, setDisplay] = useState(false);
	const [showNo, setShowNo] = useState(false)

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
		window.location.href = 'github.com/Okoli-Ryan'
	}

	
	const goToLinkedin = () => {
		window.location.href = 'www.linkedin.com/in/okoliugo'
	}

	const copyNumber = () => {
		setShowNo(true)
		number.current.select();
		document.execCommand('copy')
		alert('number copied to clipboard')
	}

	return (
		<>
			<div className="header">
				<div className="logo">
					<div className="logocover" onClick={homePage}>OU</div>
				</div>
				<div className="menu">
					<img src={hamburger} alt="" onClick={() => setDisplay(true)}/>
					<button style={{ color: location.pathname.includes('project') ? '#4f99b2' : null}} className="menu-item-desktop" onClick={projectsPage}>Projects</button>
					<button style={{ color: location.pathname.includes('service') ? '#4f99b2' : null}} className="menu-item-desktop" onClick={servicesPage}>Services</button>
				</div>
			</div>
			<div className="menubar-container" style={{ left: display ? '0' : '100vw' }}>
				<div className="cancel" onClick={() => setDisplay(false)}>
					<img src={Cancel} alt="" />
				</div>
				<div className="menu-item" onClick={homePage}>
					Home
				</div>
				<div className="menu-item" onClick={servicesPage}>
					Services
				</div>
				<div className="menu-item" onClick={projectsPage}>
					Projects
				</div>
				<div className="contact-container">
					<div tabIndex={0} onFocus={copyNumber} onBlur={() => setShowNo(false)} className="contact-option whatsapp">
						<img src={Whatsapp} onClick={copyNumber} alt="" />
						<input style={{ display: showNo ? 'block' : 'none'}} width="30" readOnly ref={number} className="whatsapp-no" value="+2349082231742"/>
					</div>
					<div className="contact-option" onClick={goToGithub}>
						<img src={Github} alt="" />
					</div>
					<div className="contact-option">
						<img src={Email} alt="" />
					</div>
					<div className="contact-option" onClick={goToLinkedin}>
						<img src={LinkedIn} alt="" />
					</div>
				</div>
			</div>
		</>
	);
}
