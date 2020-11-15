import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './routes/Hero'
import Projects from './routes/Projects';
import Services from './routes/Services';

function App() {
	const loc = useLocation();

	return (
		<>
			<Header />
			<AnimatePresence exitBeforeEnter>
				<Switch location={loc} key={loc.key}>
					{/* <Route path="/About" component={About} /> */}
					<Route path="/Projects" component={Projects} />
					<Route path="/Services" component={Services} />
					<Route path="/" component={Hero} />
				</Switch>
			</AnimatePresence>
		</>
	);
}

export default App;

// An undergraduate of Computer Science and Engineering, seeking to
// effectively utilize my key skills in your organization thereby
// contributing to the growth of the company in any capacity.
