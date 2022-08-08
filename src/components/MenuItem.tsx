import { Item } from "../types";

interface MenuItemProps {
	item: Item;
}

export function MenuItem({ item }: MenuItemProps) {
	return (
		<div>
			<li>Name: {item.name}</li>
			<p>Description: {item.description}</p>
			<p>Calories: {item.calories}</p>
			<p>Price: {item.price}</p>
			<p>{item.vegetarian}</p>
		</div>
	);
}
