import { createContext } from "vm";
import { Item } from "../types";

interface OrderContextModel {
	orders: Item[];
	addItem: (item: Item) => void;
	removeItem: (id: string) => void;
}

const defaultValue: OrderContextModel = {
	orders: [],
	addItem: () => {},
	removeItem: () => {},
};

const OrderContext = createContext(defaultValue);

export default OrderContext;
