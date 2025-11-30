import "../App.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__inner">
				<p>© 2025 Shemiakina Uliana</p>

				<ul className="footer__links">
					<li>
						<a href="https://github.com/uliashem" target="_blank" rel="noreferrer">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.37-3.87-1.37-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.1-.76.41-1.26.74-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.44-2.29 1.17-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.8 10.8 0 0 1 5.73 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.73.81 1.16 1.84 1.16 3.1 0 4.43-2.69 5.41-5.25 5.69.42.35.8 1.05.8 2.12v3.15c0 .31.2.67.79.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
							</svg>
						</a>
					</li>

					<li>
						<a href="https://www.linkedin.com/in/uliana-shemiakina/" target="_blank" rel="noreferrer">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
								<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.71h.05c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.63 4.74 6.05V21h-4v-5.2c0-1.24-.02-2.83-1.73-2.83-1.73 0-2 1.35-2 2.74V21H9z"/>
							</svg>
						</a>
					</li>
				</ul>

			</div>
		</footer>
	);
};

export default Footer;