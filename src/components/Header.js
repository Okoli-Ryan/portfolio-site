import React from 'react';
import '../styles/header.css';
import hamburger from '../svg/SVG/SVG/menu bar.svg';

export default function Header() {
	return (
		<div className="header">
			<div className="logo">
				<div className="logocover">OU</div>
			</div>
			<div className="menu">
				<img src={hamburger} alt="" />
			</div>
		</div>
	);
}
