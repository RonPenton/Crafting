import { Experienceable, Named } from './utils';

export interface Worker extends Named, Experienceable {
    craft: string;
    happiness: number;
}