import "./Nav.css";
import { Link } from "react-router-dom";
import pokemon from "../img/pokemon.png";
import Burger from "../img/Burger.png";
import DarkMode from "../img/DarkMode.png";
import React from "react";

const Nav = ({ searchPokemon, setSearchPokemon }) => {
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
                <input
                    type="text"
                    value={searchPokemon}
                    onChange={(e) => setSearchPokemon(e.target.value)}
                    placeholder="Search Pokemon"
                />
                <p>{searchPokemon}</p>
                <img
                    onClick={() =>
                        document.body.children[1].children[0].classList.toggle(
                            "dark-layout"
                        )
                    }
                    src={DarkMode}
                    alt="Darkmode icon"
                />
            </div>
        </header>
    );
};

export default Nav;
