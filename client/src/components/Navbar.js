import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<div className="navbar__row">
					<div className="navbar__left">
						<Link to="/">
							<img src="/images/logo.png" alt="" />
						</Link>
					</div>
					<div className="navbar__right">
						<li>
							<Link to="/signin">Login</Link>
						</li>
						<li>
							<Link to="/signup">Register</Link>
						</li>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
