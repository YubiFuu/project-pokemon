import "./PokemonItem.css";
const PokemonItem = (props) => {
	return (
		<article>
			<img src="" alt={props.pokename} />
			<div>
				<p>{props.pokename}</p>
				<p>TEST</p>
				<h1>This is PokemonItem</h1>
			</div>
		</article>
	);
};

export default PokemonItem;
