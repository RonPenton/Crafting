import { Qualities, Quality } from './Qualities';
import { Levelable, Named, Breakable, Valuable, Dict, nameify } from './utils';

export interface Item extends Named, Levelable, Breakable, Valuable {
    quality: Quality;
    icon: string;
    preset: string;
}

export const Items: Dict<Item> = load(require("./data/Items.json"));

function load(items: Dict<any>): Dict<Item> {
    for (const item in items) {
        items[item].quality = Qualities[items[item].quality];
    }
    return nameify(items);
}