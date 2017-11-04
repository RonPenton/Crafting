import { Item } from "./Item";
import { Levelable, Named, Quantity, Timed, Valuable } from './utils';

export interface Recipe extends Named, Levelable, Valuable, Timed {
    inputs: Quantity<Item>[];
    outputs: Quantity<Item>[];
}