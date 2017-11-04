import { Item } from "./Item";
import { Named, Experienceable } from "./utils";

export type Adventurer = Named & Experienceable & {
    class: string;
    personality: string[];
    inventory: Item[];
    encumbrance: number;
}