import { createContext } from "react";
import { Item } from "../types";

interface OrderContextModel {
	orders: Item[];
	total: number;
	addItem: (item: Item) => void;
	removeItem: (id: string) => void;
}

const defaultValue: OrderContextModel = {
	orders: [],
	total: 0,
	addItem: () => {},
	removeItem: () => {},
};

const OrderContext = createContext(defaultValue);

export default OrderContext;
