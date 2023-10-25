/** @format */

import React from "react";
import "./Navbar.css";
import { BrowserRouter, Link, Outlet } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<BrowserRouter>
				<div className="navbar__logo">RKG</div>
				<div className="navbar__links">
					<div className="links">
						<Link
							to="/"
							style={{ textDecoration: "none", color: "black" }}>
							Home
						</Link>
					</div>
					<div className="links">
						<Link
							to="/Projects"
							style={{ textDecoration: "none", color: "black" }}>
							Projects
						</Link>
					</div>
					<div className="links">
						<Link
							to="/Contact"
							style={{ textDecoration: "none", color: "black" }}>
							Contact Me
						</Link>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default Navbar;
