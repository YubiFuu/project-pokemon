import { useState, useEffect } from "react";
import PokemonItem from "../components/PokemonItem";
import "./Home.css";
const Home = () => {
	const [pokemon, setPokemon] = useState([]);
	let [pokemonDetails, setPokemonDetails] = useState([]);
	let [pokemonDetails2, setPokemonDetails2] = useState([]);
	let [pokemonByURL, setPokemonByURL] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=50")
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

							setPokemonDetails2((pokemonDetails2 = pokeUrl2));

							// if (isLoading) {
							// 	return <div>Daten noch nicht bereit...</div>;
							// }
							let pokemonEinzeln = [];
							pokemonDetails2.map((elt) => {
								fetch(elt)
									.then((res2) => res2.json())
									.then((json) => {
										pokemonEinzeln.push(json);
										// console.log("JSON: ", json);
									});
							});
							setPokemonByURL((pokemonByURL = pokemonEinzeln));
							setIsLoading(false);
						});
				});
			});
	}, []);

	if (isLoading) {
		return <p>is Loading</p>;
	}

	pokemonDetails2.sort(function (a, b) {
		if (a > b) return 1; // b is sorted before a
		if (a < b) return -1; // a is sorted before b
		return 0; // no change needed
	});

	console.log("Pokemon: ", pokemon);
	console.log("PokemonDetailsURL : ", pokemonDetails);

	// console.log("PokemonDetails2 : ", pokemonDetails2);

	console.table("pokemonByURL: ", pokemonByURL);
	// console.log("PokeImgURL= ", pokemonByURL[0].sprites.front_default);

	return (
		<main>
			<section className="pokemon-container">
				{pokemonByURL.map((elt, index) => {
					return (
						<PokemonItem
							key={index + elt}
							pokename={elt.name}
							index={index + 1}
							img={elt.sprites.front_default}
						/>
					);
				})}
				<h1>This is HOME2</h1>
			</section>
		</main>
	);
};

export default Home;
