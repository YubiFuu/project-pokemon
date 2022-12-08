import { Link } from "react-router-dom";
import "./PokemonItem.css";
const PokemonItem = (props) => {
	return (
		<Link to={`/pokemondetail/${props.pokeid}`}>
			<article className="pokemon-item-container">
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
		</Link>
	);
};

export default PokemonItem;
