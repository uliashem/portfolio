import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">

					<NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
						<strong>Developer</strong> portfolio
					</NavLink>

					<ul className="nav-list">
						<li>
							<NavLink
								to="/"
								className={({ isActive }) => (isActive ? activeLink : normalLink)}
							>
								Home
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/about"
								className={({ isActive }) => (isActive ? activeLink : normalLink)}
							>
								About me
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/projects"
								className={({ isActive }) => (isActive ? activeLink : normalLink)}
							>
								Projects
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/contacts"
								className={({ isActive }) => (isActive ? activeLink : normalLink)}
							>
								Contacts
							</NavLink>
						</li>
					</ul>

					<div
						className={`burger ${menuOpen ? 'burger--active' : ''}`}
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>

					<div className={`mobile-overlay ${menuOpen ? "open" : ""}`}>
            <ul className="mobile-menu">
							<li>
                <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
                onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
                onClick={() => setMenuOpen(false)}
                >
                  About me
                </NavLink>
              </li>

              <li>
                <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
                onClick={() => setMenuOpen(false)}
                >
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink
                to="/contacts"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
                onClick={() => setMenuOpen(false)}
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
					
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
