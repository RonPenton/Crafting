import { Item } from "./Item";
import { Levelable, Named, Quantity, Valuable } from './utils';

export interface Recipe extends Named, Levelable, Valuable {
    inputs: Quantity<Item>[];
    outputs: Quantity<Item>[];
}