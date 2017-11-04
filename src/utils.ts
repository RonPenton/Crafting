import * as moment from 'moment';

export type Dict<T> = { [index: string]: T };

export interface Named { name: string };

export interface Levelable { level: number }

export interface Experienceable extends Levelable { experience: number; };

export interface Breakable { wear?: number };
export const isBroken = (item: Breakable) => item.wear !== undefined && item.wear <= 0;

export interface Valuable { cost: number };

export type Timed = { duration: moment.Duration };

export type Quantity<T> = { item: T, quantity: number };

export function nameify<T extends Named>(dict: Dict<T>) {
    for (var prop in dict) {
        dict[prop].name = prop;
    }
    return dict;
}