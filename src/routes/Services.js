import React from 'react';
import Card from '../components/Card';
import '../styles/services.css';
import '../styles/hero.css';
import AdobeI from '../images/adobe-illustrator-vector-logo-AE8A1A4860-seeklogo.com/adobe-illustrator-seeklogo.com.svg';
import AdobeXD from '../images/adobe-xd-vector-logo-968EB5CF38-seeklogo.com/adobe-xd-seeklogo.com.svg';
import Bootstrap from '../images/bootstrap-vector-logo-29EB3BE67A-seeklogo.com/bootstrap-seeklogo.com.svg';
import MaterialUI from '../images/material-ui-vector-logo-F3917B6B98-seeklogo.com/material-ui-seeklogo.com.svg';
import Firebase from '../images/firebase-vector-logo-025F043574-seeklogo.com/firebase-seeklogo.com.svg';
import ReactLogo from '../images/react-vector-logo-C1B79914E9-seeklogo.com/react-seeklogo.com.svg';
import ReduxLogo from '../images/redux-vector-logo-677C048347-seeklogo.com/redux-seeklogo.com.svg';
import Git from '../images/git-vector-logo-B46831874B-seeklogo.com/git-seeklogo.com.svg';

export default function Services() {
	return (
		<>
			<div className="cont" style={{ height: '10%' }}></div>
			<div className="services-container">
				<div className="topic">App Development</div>
				<div className="card-container">
					<Card title="React-Native" body={ReactLogo} disabled={true}/>
				</div>
				<div className="topic">Graphics Design</div>
				<div className="card-container">
					<Card title="Adobe Illustrator" body={AdobeI} disabled={true}/>
					<Card title="Adobe XD" body={AdobeXD} disabled={true}/>
				</div>
				<div className="topic">Web Development</div>
				<div className="card-container">
					<Card title="Bootstrap" body={Bootstrap} disabled={true}/>

					<Card title="Firebase" body={Firebase} disabled={true}/>
					<Card title="Material UI" body={MaterialUI} disabled={true}/>
					<Card title="React" body={ReactLogo} disabled={true}/>
					<Card title="Redux" body={ReduxLogo} disabled={true}/>
				</div>
				<div className="topic">Version Control</div>
				<div className="card-container">
					<Card title="Git" body={Git} disabled={true}/>
				</div>
			</div>
		</>
	);
}
