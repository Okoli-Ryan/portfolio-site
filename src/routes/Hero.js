import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/hero.css';

import { delayVariant } from '../variants';
import myPic2 from '../images/my Pic.jpg';

export default function Hero() {
	const about = useRef(0);

	const cont = useRef(0);

	useEffect(() => {
		cont.current.scrollIntoView();
	}, []);

	const gotoAbout = () => {
		about.current.scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<>
			<div className="cont" ref={cont} style={{ height: '4.5rem' }}></div>
			<motion.div
				initial="initial"
				animate="enter"
				exit="exit"
				variants={delayVariant}
				className="hero-image"
			>
				<div className="hero-container">
					<h1>Okoli Ugochukwu</h1>
					<h3>Frontend Engineer and UI/UX Designer</h3>
				</div>
				<button className="see-more" onClick={gotoAbout}>
					See more
				</button>
			</motion.div>
			<motion.div
				initial="initial"
				animate="enter"
				exit="exit"
				variants={delayVariant}
				className="about-container"
				ref={about}
			>
				<div className="about-left">
					<img src={myPic2} alt="" />
				</div>
				<div className="about-right">
					Hi. The name's Ugo, <span>Front-end Engineer</span>, prospecting{' '}
					<span>UI/UX designer</span>, lover of basketball and memes, and the guy in the picture
					close to this caption ( just ignore how funny I look :D). I've been coding for close to a
					decade, moving from language to language before getting into web and app development in
					2019. If you're interested and want to discuss about my work, please head over to the{' '}
					<Link to="/contact">Contact Page</Link> or check out <a
						href="https://github.com/Okoli-Ryan/My-Resume-/blob/master/Ugo's%20Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						my Resume
					</a>
				</div>
			</motion.div>
		</>
	);
}
