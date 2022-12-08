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
                    className="type-grid-item color2"
                >
                    Dark
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item color3"
                >
                    Dragon
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item color4"
                >
                    Electric
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item color5"
                >
                    Fairy
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item color6"
                >
                    Fighting
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item color7"
                >
                    Fire
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item color8"
                >
                    Flying
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item color9"
                >
                    Ghost
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item color10"
                >
                    Grass
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item color11"
                >
                    Ground
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item color12"
                >
                    Ice
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item color13"
                >
                    Normal
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item color14"
                >
                    Plant
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item color15"
                >
                    Poison
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item color16"
                >
                    Psychic
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item color17"
                >
                    Rock
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item color18"
                >
                    Steel
                </button>

                <button
                    onClick={onClickFunction}
                    className="type-grid-item color19"
                >
                    Water
                </button>

                {/* <div className="type-grid-item"> </div> */}
                <button className="type-search-button">Search</button>
            </section>
        </main>
    );
};

export default TypeComponent;
