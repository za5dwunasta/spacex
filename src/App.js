import React from 'react';

import Header from './layouts/Header';
import Home from './layouts/Home';
import { LaunchesProvider } from './context/launches-context';

function App() {
	return (
		<LaunchesProvider>
			<div className="App">
				<Header />
				<Home />
			</div>
		</LaunchesProvider>
	);
}

export default App;
