import { Item } from "./Item";
import { Levelable, Named, Quantity, Valuable } from './utils';

export type Recipe = Named & Levelable & Valuable & {
    inputs: Quantity<Item>[];
    outputs: Quantity<Item>[];
}