import React from 'react';
import './App.css';
import Todos from './Todos.js';
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>To Do App Using Hooks</p>
				<Todos/>
			</header>
		</div>
	);
}

export default App;
