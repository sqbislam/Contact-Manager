import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = props => {
	const { branding } = props;
	return (
		<div className="container">
			<nav className="navbar navbar-expand-sm bg-white navbar-light">
				<div className="div container">
					<a href="/" className="navbar-brand text-danger font-weight-bold">
						{branding}
					</a>

					<ul className="navbar-nav ml-auto">
						<li className="nav-item text-dark font-weight-bold">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item text-dark font-weight-bold">
							<Link to="/contacts/add" className="nav-link">
								Add
							</Link>
						</li>
						<li className="nav-item text-dark font-weight-bold">
							<Link to="/about" className="nav-link">
								About
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<hr style={{ color: "red", height: 0.15, backgroundColor: "red" }} />
		</div>
	);
};

Header.defaultProps = {
	branding: "My App"
};

Header.propTypes = {
	branding: PropTypes.string.isRequired
};

export default Header;
