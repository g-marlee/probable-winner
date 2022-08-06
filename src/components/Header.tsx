import { useContext } from "react";
import OrderContext from "../context/OrderContext";

export function Header() {
	const { orders } = useContext(OrderContext);

	return (
		<header
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-around",
			}}
		>
			<h1>A Restaurant Name</h1>
			<p>Order Count: {orders.length}</p>
		</header>
	);
}
