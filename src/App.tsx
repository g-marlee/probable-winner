import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { MenuList } from "./components/MenuList";

function App() {
	return (
		<div className="App">
			<Header />
			<MenuList />
		</div>
	);
}

export default App;
