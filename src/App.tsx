import React from 'react';
import './App.css';
import { HeaderMenu } from './features/headerMenu/HeaderMenu.comp';
import { TopRoom } from './features/room/TopRoom.comp';
import { PlayerComp } from './features/player/PlayerComp.comp';

import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";
import { InitRoom } from './features/room/room';
import { UserLogin } from './features/room/UserLogin';
import { roomState } from './features/room/roomState';

function App() {
	return (
		<Router>
			<div className="App">
				<HeaderMenu />
				<Switch>
					<Route path="/" exact >
						<InitRoom />
					</Route>
					<Route path="/room/:id" exact >
						<UserLogin />
						<TopRoom roomState={roomState} />
					</Route>
				</Switch>
				<PlayerComp />
			</div>
		</Router>
	);
}

export default App;
