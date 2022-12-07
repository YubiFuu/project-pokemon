import "./Nav.css";
import { Link } from "react-router-dom";
import pokemon from "../img/pokemon.png";
import Burger from "../img/Burger.png";
import DarkMode from "../img/DarkMode.png";
const Nav = () => {
    console.log(pokemon);
    return (
        <header>
            <Link to={"/"}>
                <img src={pokemon} alt="pokemon" />
            </Link>
            <div>
                <Link to={"/type"}>
                    <img src={Burger} alt="Burger icon" />
                </Link>
                <input type="text" placeholder="Search Pokemon" />
                <img src={DarkMode} alt="Darkmode icon" />
            </div>
        </header>
    );
};

export default Nav;
