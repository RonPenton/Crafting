import { Experienceable, Named, Dict, Quantity } from './utils';
import { Item } from './Item';
import { Recipe } from './Recipe';

export type Player = Named & Experienceable & {
    recipes: Dict<Recipe>;
    inventory: Quantity<Item>[];    
}