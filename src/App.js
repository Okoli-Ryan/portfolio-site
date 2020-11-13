import React from 'react';
// import { motion } from 'framer-motion';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

import Landing from './routes/Landing';
import About from './routes/About';
import Projects from './routes/Projects';
import Services from './routes/Services';

function App() {
	return (
		<>
			<Header />
			
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/About" component={About} />
					<Route exact path="/Projects" component={Projects} />
					<Route exact path="/Services" component={Services} />
				</Switch>
		</>
	);
}

export default App;

// An undergraduate of Computer Science and Engineering, seeking to
// effectively utilize my key skills in your organization thereby
// contributing to the growth of the company in any capacity.
