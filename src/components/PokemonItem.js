import "./PokemonItem.css";
const PokemonItem = (props) => {
	return (
		<article>
			<img
				className="pokemon-sprite"
				src={props.img}
				alt={props.pokename}
			/>
			<div className="index-und-name">
				<p>#0{props.index}</p>
				<p>{props.pokename}</p>
			</div>
		</article>
	);
};

export default PokemonItem;
