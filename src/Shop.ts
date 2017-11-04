import { Craft } from './Craft';
import { Named } from './utils';

export interface Shop extends Named {
    craft: Craft;
    size: number;
}