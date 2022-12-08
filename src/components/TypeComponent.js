import "./TypeComponent.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const TypeComponent = ({ searchType }) => {
    // const [searchType, setSearchType] = useState()

    function onClickFunction(elt) {
        // console.log(elt.target.innerText.toLowerCase());
        searchType = elt.target.innerText.toLowerCase();
        console.log(searchType);
    }

    return (
        <main>
            <h2 className="type-h1">Type</h2>
            <section className="type-grid-container">
                <button
                    onClick={onClickFunction}
                    className="type-grid-item bug"
                >
                    Bug
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item dark"
                >
                    Dark
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item dragon"
                >
                    Dragon
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item electric"
                >
                    Electric
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item fairy"
                >
                    Fairy
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item fighting"
                >
                    Fighting
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item fire"
                >
                    Fire
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item flying"
                >
                    Flying
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item ghost"
                >
                    Ghost
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item grass"
                >
                    Grass
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item ground"
                >
                    Ground
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item ice"
                >
                    Ice
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item normal"
                >
                    Normal
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item plant"
                >
                    Plant
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item poison"
                >
                    Poison
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item psychic"
                >
                    Psychic
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item rock"
                >
                    Rock
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item steel"
                >
                    Steel
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item water"
                >
                    Water
                </button>
                <button className="type-search-button">Search</button>
            </section>
        </main>
    );
};

export default TypeComponent;
