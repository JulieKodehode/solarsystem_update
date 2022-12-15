// Libraries
import React from "react";
import { Outlet } from "react-router-dom";

// Styles
import "../styles/basic.css";

// CSS
import "./layout.module.css";

// Components
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

/**
 * This is the default landing page.
 */
const LandingPage = () => {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
};

export default LandingPage;
