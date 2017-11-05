import { Class } from './Class';
import { Item } from "./Item";
import { Experienceable, Named, Quantity } from './utils';
import { randomElement } from './Random';

export type Gender = "male" | "female";
const Females: string[] = require("./data/names/Females.json");
const Males: string[] = require("./data/names/Males.json");
const Surnames: string[] = require("./data/names/Surnames.json");
const FirstNames: { [gender: string]: string[] } = { "male": Males, "female": Females };

export interface Adventurer extends Named, Experienceable {
    class: Class;
    personality: string[];
    inventory: Quantity<Item>[];
    encumbrance: number;
}

/**
 * Generates a random name from the name database.
 * @param gender the gender of the name.
 */
export function generateName(gender?: Gender) {
    if (!gender)
        gender = randomElement(["male", "female"]) as Gender;
    const fns = FirstNames[gender];
    return `${randomElement(fns)} ${randomElement(Surnames)}`;
}