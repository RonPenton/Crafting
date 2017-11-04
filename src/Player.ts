import { Experienceable, Named, Dict } from './utils';
import { Recipe } from './Recipe';

export type Player = Named & Experienceable & {
    recipes: Dict<Recipe>;
}