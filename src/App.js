// Libraries
import { Route, Routes } from "react-router-dom";
// Styles

// Components
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage";
import MarsPage from "./pages/MarsPage/MarsPage";
import VenusPage from "./pages/VenusPage/VenusPage";

/**
 * This is the main App where everything will be exported to
 */
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />}>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="MarsPage" element={<MarsPage />}></Route>
				<Route path="VenusPage" element={<VenusPage />}></Route>
				<Route path="ContactPage" element={<ContactPage />}></Route>
			</Route>
		</Routes>
	);
};

export default App;
