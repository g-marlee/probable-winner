import { useContext, useState } from "react";
import OrderContext from "../context/OrderContext";

export function Sidebar() {
	const { orders, total } = useContext(OrderContext);

	return (
		<div>
			<ul>
				{orders.map((item) => (
					<li key={item.id}>
						{item.name} - {item.price}
					</li>
				))}
			</ul>

			<p>Total: {total}</p>
		</div>
	);
}
