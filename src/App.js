import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import PokemonDetail from "./components/PokemonDetail";
import Type from "./pages/Type";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/type" element={<Type />} />
					<Route
						path="/pokemondetail/:id"
						element={<PokemonDetail />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
