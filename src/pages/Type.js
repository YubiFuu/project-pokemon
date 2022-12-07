import { useEffect } from "react";
import "./Type.css";
import { Link } from "react-router-dom";
const Type = (searchType) => {
  function onClickFunction(elt) {
    // console.log(elt.target.innerText.toLowerCase());
    searchType = elt.target.innerText.toLowerCase();
    console.log(searchType);
  }

  return (
    <main>
      <h2 className="type-h1">Type</h2>
      <section className="type-grid-container">
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color1">
            Bug
          </button>
        </Link>
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color2">
            Dark
          </button>
        </Link>
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color3">
            Dragon
          </button>
        </Link>
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color4">
            Electric
          </button>
        </Link>
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color5">
            Fairy
          </button>
        </Link>
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color6">
            Fighting
          </button>
        </Link>
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color7">
            Fire
          </button>
        </Link>
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color8">
            Flying
          </button>
        </Link>
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color9">
            Ghost
          </button>
        </Link>
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color10">
            Grass
          </button>
        </Link>
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color11">
            Ground
          </button>
        </Link>
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color12">
            Ice
          </button>
        </Link>
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color13">
            Normal
          </button>
        </Link>
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color14">
            Plant
          </button>
        </Link>
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color15">
            Poison
          </button>
        </Link>
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color16">
            Psychic
          </button>
        </Link>
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color17">
            Rock
          </button>
        </Link>
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color18">
            Steel
          </button>
        </Link>
        <Link to="/">
          <button onClick={onClickFunction} className="type-grid-item color19">
            Water
          </button>
        </Link>
        {/* <div className="type-grid-item"> </div> */}
        <button className="type-search-button">Search</button>
      </section>
    </main>
  );
};

export default Type;
