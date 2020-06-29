import React from 'react';
import './App.css';
import { HeaderMenu } from './features/headerMenu/HeaderMenu.comp';
import { TopRoom } from './features/room/TopRoom.comp';
import { PlayerComp } from './features/player/PlayerComp.comp';

function App() {
	return (
		<div className="App">
			<HeaderMenu />
			<TopRoom />
			<PlayerComp />
		</div>
	);
}

export default App;
