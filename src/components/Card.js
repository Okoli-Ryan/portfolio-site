import React, { useState, useRef } from 'react';
import '../styles/card.css';

export default function Card({ title, body, gitLink, siteLink, disabled }) {
	
	const [display, setDisplay] = useState(false)
	const options = useRef(0)

	const goToCode = () => {
		window.open(gitLink, '_blank')
	}

	const goToSite = () => {
		window.open(siteLink, '_blank')
	}

	return (
		<>
			<div className="card cursor" tabIndex={0} onFocus={() => setDisplay(true)} onBlur={() => setDisplay(false)}>
				<div className="card-body">
					<img src={body} alt="" />
				</div>
				<div className="card-title">{title}</div>
				{!disabled && <div className="card-options-container" style={{display: display ? 'flex' : 'none'}} ref={options}>
					<div className="card-options" onClick={goToCode}>Go to Code</div>
					<div className="card-options" onClick={goToSite}>Go to Site</div>
				</div>}
			</div>
		</>
	);
}
