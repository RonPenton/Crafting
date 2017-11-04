import { Levelable, Named, Breakable, Valuable } from './utils';

export interface Item extends Named, Levelable, Breakable, Valuable {
    quality: string;
}