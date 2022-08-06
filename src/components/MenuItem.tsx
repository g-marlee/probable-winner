import { useContext, useState } from "react";
import OrderContext from "../context/OrderContext";
import { Item } from "../types";

interface MenuItemProps {
	item: Item;
}

export function MenuItem({ item }: MenuItemProps) {
	const { addItem } = useContext(OrderContext);

	return (
		<div>
			<li>Name: {item.name}</li>
			<p>Description: {item.description}</p>
			<p>Calories: {item.calories}</p>
			<p>Price: {item.price}</p>
			<p>{item.vegetarian}</p>
			<button onClick={() => addItem(item)}>Add to Order</button>
		</div>
	);
}
