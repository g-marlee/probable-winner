import { ReactNode, useState } from "react";
import { Item } from "../types";
import OrderContext from "./OrderContext";

interface Props {
	children: ReactNode;
}

export default function OrderContextProvider({ children }: Props) {
	const [orders, setOrders] = useState<Item[]>([]);
	const [total, setTotal] = useState<number>(0);

	function addItem(item: Item): void {
		setOrders((prev) => [...prev, item]);
		setTotal((prev) => (prev += item.price));
		console.log(orders);
	}

	function removeItem(id: string): void {
		const itemIndex = orders.findIndex((item) => item.id === id);
		setOrders((prev) => [
			...prev.slice(0, itemIndex),
			...prev.slice(itemIndex + 1),
		]);
		console.log(orders);
	}

	return (
		<OrderContext.Provider value={{ orders, total, addItem, removeItem }}>
			{children}
		</OrderContext.Provider>
	);
}
