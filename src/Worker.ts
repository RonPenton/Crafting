import { Craft } from './Craft';
import { Experienceable, Named } from './utils';

export interface Worker extends Named, Experienceable {
    craft: Craft;
    happiness: number;
}