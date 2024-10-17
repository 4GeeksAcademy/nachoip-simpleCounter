import React from "react";
import Digit from "./Digit";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ counter }) => {
	const unidadMil = Math.floor(counter / 1000) % 10;
	const centena = Math.floor(counter / 100) % 10;
	const decena = Math.floor(counter / 10) % 10;
	const unidad = Math.floor(counter / 1) % 10;
	console.log(unidadMil, centena, decena, unidad);

	const startStop = () => setInterval(counter => counter = !counter)
	const resetTimer = () => setInterval(counter => counter = 0)
	return (
		<div className="text-center">
			<div className="counter-holder">


				<Digit digit={<span className="fa fa-clock"></span>} />
				<Digit digit={unidadMil} />
				<Digit digit={centena} />
				<Digit digit={decena} />
				<Digit digit={unidad} />

			</div>
			<div className="container text center">
				<button onClick={startStop} className="btn btn-success mt-2 mx-1">Iniciar</button>
				<button onClick={startStop} className="btn btn-danger mt-2 mx-1">Parar</button>
				<button onClick={resetTimer} className="btn btn-primary mt-2 mx-1">Resumen</button>
			</div>

		</div>
	);
};

export default Home;
