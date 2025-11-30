import "./App.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";

import ScrollToTop from "./utils/scrollToTop"


function App() {
  return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<AboutMe />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/project/:id" element={<Project />} />
					<Route path="/contacts" element={<Contacts />} />
				</Routes>
				<Footer />
			</Router>
		</div>
  );
}

export default App;
