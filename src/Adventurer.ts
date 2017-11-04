import { Item } from "./Item";
import { Experienceable, Named, Quantity } from './utils';

export type Adventurer = Named & Experienceable & {
    class: string;
    personality: string[];
    inventory: Quantity<Item>[];    
    encumbrance: number;
}