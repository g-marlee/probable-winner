import { ReactNode, useState } from "react";
import { Item } from "../types";
import OrderContext from "./OrderContext";

interface Props {
	children: ReactNode;
}

export default function OrderContextProvider({ children }: Props) {
	const [menuItems, setMenuItems] = useState<Item[]>([]);

	function addItem(item: Item): void {
		setMenuItems((prev) => [...prev, item]);
	}

	function deleteItem(id: string): void {
		setMenuItems(menuItems.filter((item) => item.id !== id));
	}

	return (
		<OrderContext.Provider value={{ menuItems, addItem, deleteItem }}>
			{children}
		</OrderContext.Provider>
	);
}
