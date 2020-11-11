import React from 'react';
import '../styles/card.css'

export default function Card({ title }) {
	return (
		<div className="card">
			<div className="card-body"></div>
            <div className="card-title">{title}</div>
		</div>
	);
}
