import React from "react";
import "../../styles/home.css";
import Characters from "../component/Characters.jsx";
import Planets from "../component/Planets.jsx";
import People from "../component/People.jsx";
import Vehicles from "../component/Vehicles.jsx";

export const Home = () => {
	return (
		<>
			<Characters/>
			<Planets/>
			<People/>
			<Vehicles/>
		</>
	)
}
