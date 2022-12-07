import { useState, useEffect } from "react";
import PokemonItem from "../components/PokemonItem";
import "./Home.css";
const Home = () => {
	const [pokemon, setPokemon] = useState([]);
	let [pokemonDetails, setPokemonDetails] = useState([]);
	let [pokemonDetails2, setPokemonDetails2] = useState([]);
	let [pokemonByURL, setPokemonByURL] = useState([]);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
			.then((res) => res.json())
			.then((json) => {
				setPokemon(json.results);

				let pokeUrl = [];

				json.results.map((elt) => {
					pokeUrl.push(`${elt.url}`);
				});
				setPokemonDetails((pokemonDetails = pokeUrl));
				let pokeUrl2 = [];
				pokemonDetails.map((elt) => {
					fetch(elt)
						.then((response) => response.json())
						.then((json) => {
							pokeUrl2.push(json.forms[0]?.url);
						});
					setPokemonDetails2((pokemonDetails2 = pokeUrl2));
				});
			});
	}, []);

	useEffect(() => {
		let pokemonEinzeln = [];
		pokemonDetails2.map((elt) => {
			console.log(elt);
			fetch(elt)
				.then((res) => res.json())
				.then((json) => {
					pokemonEinzeln.push(json);
					console.log("JSON: ", json);
				});
		});
		setPokemonByURL((pokemonByURL = pokemonEinzeln));
	}, []);

	// function compareNumbers(a, b) {
	// 	return a - b;
	// }

	// pokemonDetails2.map((elt, index) => {
	// 	elt.slice();
	// });

	// var reA = /[^a-zA-Z]/g;
	// var reN = /[^0-9]/g;

	// function sortAlphaNum(a, b) {
	// 	var aA = a.replace(reA, "");
	// 	var bA = b.replace(reA, "");
	// 	if (aA === bA) {
	// 		var aN = parseInt(a.replace(reN, ""), 10);
	// 		var bN = parseInt(b.replace(reN, ""), 10);
	// 		return aN === bN ? 0 : aN > bN ? 1 : -1;
	// 	} else {
	// 		return aA > bA ? 1 : -1;
	// 	}
	// }

	console.log("Pokemon: ", pokemon);
	console.log("PokemonDetailsURL : ", pokemonDetails);
	// pokemonDetails2.sort(sortAlphaNum);
	console.log("PokemonDetails2 : ", pokemonDetails2);
	console.log("pokemonByURL: ", pokemonByURL);

	return (
		<main>
			<section className="pokemon-container">
				{pokemon.map((elt, index) => {
					return (
						<PokemonItem key={index + elt} pokename={elt.name} />
					);
				})}
				<h1>This is HOME2</h1>
			</section>
			<PokemonItem />
		</main>
	);
};

export default Home;
