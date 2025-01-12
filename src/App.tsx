import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';

import { HomePage } from "./HomePage.tsx";
import { Cards } from "./components/Cards/Cards.tsx";
import { Decomposition } from "./components/Decomposition/Decomposition.tsx";

function App() {

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/cards" element={<Cards />} />
					<Route path="/decomposition" element={<Decomposition />} />
				</Routes>
			</BrowserRouter>

		</div>
	)
}

export default App
