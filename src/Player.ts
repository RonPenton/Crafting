import { Experienceable, Named, Dict, Quantity } from './utils';
import { Item } from './Item';
import { Recipe } from './Recipe';

export interface Player extends Named, Experienceable {
    recipes: Dict<Recipe>;
    inventory: Quantity<Item>[];    
}