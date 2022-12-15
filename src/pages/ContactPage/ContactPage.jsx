// Libraries
import React from "react";

// CSS
import "./layout.module.css";

// Components

/**
 * This is the default contact page.
 */
const ContactPage = () => {
	return (
		<main>
			<div className="content">
				<div className="flexbox" id="formText">
					<form action="" id="contactForm">
						<label for="firstName">Navn</label>
						<br />
						<input type="text" name="firstName" placeholder="Ola" size="40" required />
						<br />
						<br />

						<label for="lastName">Etternavn</label>
						<br />
						<input type="text" name="lastName" placeholder="Nordmann" size="40" />
						<br />
						<br />

						<label for="email">E-post</label>
						<br />
						<input type="email" name="email" placeholder="olanordmann@gpost.no" size="40" required />
						<br />
						<br />

						<label for="message">Melding</label>
						<br />
						<textarea name="message" id="message" cols="36" rows="10"></textarea>
						<br />
						<br />

						<div className="flexButton">
							<button type="submit" id="submitButton" className="submitButton">
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

export default ContactPage;
