import { generateName } from './Adventurer';
import { Experienceable, Named, Dict, Quantity } from './utils';
import { Item } from './Item';
import { Recipe } from './Recipe';
import * as moment from 'moment';

const startingCash = 100;
const initialRecipes = {
    // TODO: some recipe to turn wood into something
}
const initialInventory: Quantity<Item>[] = [
    // TODO: some sort of axe
];

export interface Player extends Named, Experienceable {
    recipes: Dict<Recipe>;
    inventory: Quantity<Item>[];
    epoch: number;
    cash: number;
}

export function createNewPlayer(): Player {
    return {
        name: generateName(),
        recipes: initialRecipes,
        inventory: initialInventory,
        experience: 0,
        level: 1,
        epoch: moment().unix(),
        cash: startingCash
    }
}