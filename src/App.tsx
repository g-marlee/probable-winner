import "./App.css";
import { Header } from "./components/Header";
import { MenuList } from "./components/MenuList";
import { Sidebar } from "./components/Sidebar";

function App() {
	return (
		<div className="App">
			<Header />
			<div
				style={{
					display: "flex",
					flexDirection: "row",
				}}
			>
				<MenuList />

				<Sidebar />
			</div>
		</div>
	);
}

export default App;
