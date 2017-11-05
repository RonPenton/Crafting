import * as rand from 'random-js';
const engine = rand.engines.mt19937().autoSeed();

/**
 * Produces a random integer in the range [min,max]
 * @param min minimum value, inclusive.
 * @param max maximum value, inclusive.
 */
export function randomInteger(min: number, max: number): number {
    const dist = rand.integer(min, max);
    return dist(engine);
}

/**
 * Returns a random element from the array. 
 * @param array the array to pick from.
 */
export function randomElement<T>(array: T[]): T {
    return array[randomInteger(0, array.length - 1)];
}
