import React from 'react';
import Card from '../components/Card';
import Message from '../images/message.svg'
import Todo from '../images/todoList.svg'
import Music from '../images/music.svg'
import Weather from '../images/weather.svg'
import Clock from '../images/clock.svg'
import Airplane from '../images/airplane.svg'
import Result from '../images/result.svg'

export default function Projects() {
	return (
		<>
			<div className="cont" style={{ height: '4.5rem' }}></div>
			<div className="services-container">
				<div className="topic">React Projects</div>
				<div className="card-container">
					<Card title="Mailman" body={Message} gitLink="https://github.com/Okoli-Ryan/Mailman" siteLink="https://mailman.herokuapp.com" disabled={false}/>
					<Card title="Todo app + firebase" body={Todo} gitLink="https://github.com/Okoli-Ryan/Timing" siteLink="https://todo-app-with-firebase.herokuapp.com" disabled={false}/>
					<Card title="Music player" body={Music} gitLink="https://github.com/Okoli-Ryan/Music-Player" siteLink="https://music-player-concept.herokuapp.com" disabled={false}/>
					<Card title="Weather App" body={Weather} gitLink="https://github.com/Okoli-Ryan/ReactWeather" siteLink="https://react-weather-temp-application.herokuapp.com" disabled={false}/>
					<Card title="World Clock" body={Clock} gitLink="https://github.com/Okoli-Ryan/Timing" siteLink="https://world-clock-application.herokuapp.com" disabled={false}/>
				</div>
                <div className="topic">Web Designs</div>
                <div className="card-container">
                    <Card title="Travel Wise" body={Airplane} gitLink="https://github.com/Okoli-Ryan/Travel-Wise" siteLink="https://travel-wise.netlify.app" disabled={false}/>
                    <Card title="Waec Result Checker" body={Result} gitLink="https://github.com/Okoli-Ryan/Waec-Demo" siteLink="https://waec-result-checker.netlify.app" disabled={false}/>
                </div>
			</div>
		</>
	);
}
