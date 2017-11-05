import { Named, Dict, nameify } from "./utils";
import { Adventurer } from "./Adventurer";

export interface AreaDefinition extends Named {
    minLevel: number;
    maxLevel: number;
    maxAdventurers: number;
}

export interface Area extends AreaDefinition {
    adventurers: Adventurer[];
}

export const Areas: Dict<AreaDefinition> = nameify(require("./data/Areas.json"));

export function newArea(name: string): Area {
    const area = Areas[name];
    if (!area)
        throw new Error(`Area not found: ${name}`);

    return { ...area, adventurers: [] };
}