/** @format */

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
	return (
		<div className="App">
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/projects"
						element={<Projects />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
				</Routes>
			</BrowserRouter>
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
