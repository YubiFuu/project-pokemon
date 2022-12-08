import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetail.css";
const PokemonDetail = () => {
	const [pokeDetails, setPokeDetails] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	let { id } = useParams();
	console.log("ID: ", id);

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
			.then((res) => res.json())
			.then((json) => {
				setPokeDetails(json);
				setIsLoading(false);
			});
	}, []);
	if (isLoading) {
		return <p>is Loading</p>;
	}
	console.log("pokeDetails: ", pokeDetails);

	return (
		<div className="poke-details-flex-container">
			<div className="details-poke-img">
				<img
					src={pokeDetails.sprites.other.home.front_shiny}
					alt={pokeDetails.name}
				/>
			</div>
			<div className="details-index-pokename">
				<h2 className="index">#0{pokeDetails.id}</h2>
				<h2 className="pokename">{pokeDetails.name}</h2>
			</div>
			<div className="types-container">
				{pokeDetails.types.map((elt, index) => {
					return <button key={index + elt}>{elt.type.name}</button>;
				})}
			</div>
			<div className="attacks-moves">
				<h2>Attacks and Moves</h2>
				{pokeDetails.abilities.map((element, ind) => {
					return <h2 key={element + ind}>{element.ability.name}</h2>;
				})}
			</div>
		</div>
	);
};

export default PokemonDetail;
