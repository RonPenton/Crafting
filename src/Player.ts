import { Experienceable, Named, Dict } from './utls';
import { Recipe } from './Recipe';

export type Player = Named & Experienceable & {
    recipes: Dict<Recipe>;
}