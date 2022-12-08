import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
										setPokemonByURL(
											(pokemonByURL = pokemonEinzeln)
										);
										setIsLoading(false);
									});
							});
						});
				});
			});
	}, []);

	if (isLoading) {
		return <p>is Loading</p>;
	}

	// pokemonDetails2.sort(function (a, b) {
	// 	if (a > b) return 1; // b is sorted before a
	// 	if (a < b) return -1; // a is sorted before b
	// 	return 0; // no change needed
	// });

	// ===================== SORT-Function-Strings ======================
	function dynamicSort(property) {
		let sortOrder = 1;

		if (property[0] === "-") {
			sortOrder = -1;
			property = property.substr(1);
		}

		return function (a, b) {
			if (sortOrder == -1) {
				return b[property].localeCompare(a[property]);
			} else {
				return a[property].localeCompare(b[property]);
			}
		};
	}
	//=============================================================

	// ===================== SORT-Function-Numbers ======================
	function dynamicSortNumbers(property) {
		let sortOrder = 1;

		if (property[0] === "-") {
			sortOrder = -1;
			property = property.substr(1);
		}

		return function (a, b) {
			if (sortOrder == -1) {
				return b[property] - a[property];
			} else {
				return a[property] - b[property];
			}
		};
	}
	//=============================================================

	console.log("Pokemon: ", pokemon);
	console.log("PokemonDetailsURL : ", pokemonDetails);

	// console.log("PokemonDetails2 : ", pokemonDetails2);
	pokemonByURL.sort(dynamicSortNumbers("id"));
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
							id={elt.id}
							pokeid={elt.id}
						/>
					);
				})}
			</section>
		</main>
	);
};

export default Home;

// return (
// 	<main>
// 		<section className="pokemon-container">
// 			{pokemonByURL.map((elt, index) => {
// 				return (
// 					<Link to="../components/PokemonDetail.js">
// 						<PokemonItem
// 							key={index + elt}
// 							pokename={elt.name}
// 							index={index + 1}
// 							img={elt.sprites.front_default}
// 							id={elt.id}
// 						/>
// 					</Link>
// 				);
// 			})}
// 		</section>
// 	</main>
// );
