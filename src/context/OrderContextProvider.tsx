import { ReactNode, useState } from "react";
import { Item } from "../types";
import OrderContext from "./OrderContext";

interface Props {
	children: ReactNode;
}

export default function OrderContextProvider({ children }: Props) {
	const [orders, setOrders] = useState<Item[]>([]);

	function addItem(item: Item): void {
		setOrders((prev) => [...prev, item]);
	}

	function removeItem(id: string): void {
		setOrders(orders.filter((item) => item.id !== id));
	}

	return (
		<OrderContext.Provider value={{ orders, addItem, removeItem }}>
			{children}
		</OrderContext.Provider>
	);
}
