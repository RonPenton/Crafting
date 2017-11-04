import { Item } from "./Item";
import { Experienceable, Named, Quantity } from './utils';

export interface Adventurer extends Named, Experienceable {
    class: string;
    personality: string[];
    inventory: Quantity<Item>[];
    encumbrance: number;
}