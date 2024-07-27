import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';

const styles = {
	logo: {
	  height: '50px', 
	  marginLeft: '20px', 
	},
  };

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/" className="navbar-brand">
				<img src="https://img.odcdn.com.br/wp-content/uploads/2019/05/20190514014329.jpg" 
				alt="Star Wars Logo"
				style={styles.logo}
				/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
