import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { delayVariant } from '../variants';
import emailJs from 'emailjs-com'
import '../styles/contact.css';

export default function Contact() {
	const [sending, setSending] = useState('init');

	const sendButton = (
		<button type="submit" className="send-button" style={{ backgroundColor: '#4f99b2' }}>
			Send Email
		</button>
	);

	const sendingButton = (
		<button type="submit" className="send-button" style={{ backgroundColor: 'orange' }}>
			...Sending
		</button>
	);

	const failedButton = (
		<button type="submit" className="send-button" style={{ backgroundColor: 'red' }}>
			Sending failed
		</button>
	);

	const sentButton = (
		<button type="submit" className="send-button" style={{ backgroundColor: 'yellowgreen' }}>
			Email Sent!
		</button>
	);

	function sendEmail(e) {
		e.preventDefault();
const send = e.target
		setSending('sending');
		emailJs.sendForm('service_kgyfz8d', 'template_ncszlrh', e.target, 'user_K5YKGYxD9VbGM70Z2HXgN').then(
			(result) => {
				setSending('sent');
                send.reset();
                console.log(result)
                setTimeout(() => {
                    setSending('init')}, 4000
                );
			},
			(error) => {
				console.log(error);
                setSending('failed');
                setTimeout(() => {
                    setSending('init')}, 4000
                );
			}
		);
		
	}

	let Button = sendButton;
	if (sending === 'sending') Button = sendingButton;
	else if (sending === 'sent') Button = sentButton;
    else if (sending === 'failed') Button = failedButton;
    else if (sending === 'init') Button = sendButton;

	return (
		<motion.div
			className="contactpage"
			variants={delayVariant}
			exit="exit"
			initial="initial"
			animate="enter"
			transition="transition"
		>
			<div className="cont" style={{ height: '4.5rem' }}></div>
			<div className="contactpage-container">
				<div className="contactpage-left">
					<h1>Let's Talk!</h1>
					<h2>I'd love to know what you have to say</h2>
				</div>
				<div className="contactpage-right">
					<form onSubmit={sendEmail}>
						<h2>Contact Me</h2>
						<div className="form-container">
							<section>
								<label htmlFor="name">What can I call you?</label>
								<input type="text" id="name" placeholder="John Doe" name="name" required />
							</section>
							<section>
								<label htmlFor="email">What Email do I reply to?</label>
								<input
									type="text"
									id="email"
                                    placeholder="JohnDoe@email.com"
                                    name="email"
									required
								/>
							</section>
							<section>
								<label htmlFor="message">Message</label>
								<textarea
									name="message"
									id="message"
									cols="30"
									rows="5"
									placeholder="I like your website :)"
									required
								></textarea>
							</section>
							<section>{Button}</section>
						</div>
					</form>
				</div>
			</div>
		</motion.div>
	);
}
