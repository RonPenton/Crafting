import { generateName } from './Adventurer';
import { Experienceable, Named, Dict, Quantity } from './utils';
import { Item } from './Item';
import { Recipe } from './Recipe';
import { db } from './Database';
import * as moment from 'moment';

export interface Player extends Named, Experienceable {
    recipes: Dict<Recipe>;
    inventory: Quantity<Item>[];
    epoch: number;
}

export async function loadPlayer(): Promise<Player> {
    const player = await db.loadPlayer();
    if (player)
        return player;

    const newPlayer = createNewPlayer();
    await db.savePlayer(newPlayer);
    return newPlayer;
}

export function createNewPlayer(): Player {
    return {
        name: generateName(),
        recipes: {},
        inventory: [],
        experience: 0,
        level: 1,
        epoch: moment().unix()
    }
}