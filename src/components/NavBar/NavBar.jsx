// Libraries
import React from "react";
import { NavLink } from "react-router-dom";

// Styles
import "../../styles/basic.css";
import "./layout.module.css";

// Components

/**
 * This is the main navbar
 */
const NavBar = () => {
	return (
		<header>
			<ul>
				<li>
					<NavLink title="home" to="/">
						Hjem
					</NavLink>
				</li>
				<li>
					<NavLink title="mars" to="/MarsPage">
						Mars
					</NavLink>
				</li>
				<li>
					<NavLink title="venus" to="/VenusPage">
						Venus
					</NavLink>
				</li>
				<li>
					<NavLink title="contact" to="/ContactPage">
						Kontakt
					</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default NavBar;
