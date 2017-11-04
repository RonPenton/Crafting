import { Item } from "./Item";
import { Quantity } from "./utls";

export interface Recipe {
    name: string;
    level: number;
    inputs: Quantity<Item>[];
    outputs: Quantity<Item>[];
}