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
 * Produces a random real in the range [min,max] or [min,max), depending on "inclusive"
 */
export function randomReal(min: number, max: number, inclusive: boolean = false): number {
    return rand.real(min, max, inclusive)(engine);
}

/**
 * Produces a boolean that has a 50/50 chance of being true, or a 'chanceOfTrue' chance of being 
 * true if parameter is supplied. Valid values are 0-1. 
 * @param chanceOfTrue 
 */
export function randomBool(chanceOfTrue: number = 0.5) {
    return rand.bool(chanceOfTrue)(engine);
}

/**
 * Returns a random element from the array. 
 * @param array the array to pick from.
 */
export function randomElement<T>(array: T[], begin?: number, end?: number): T {
    return rand.pick(engine, array, begin, end);
}

/** Shuffles an array, in place. */
export function shuffleInPlace<T>(array: T[]) {
    rand.shuffle(engine, array);
}

/** Shuffles an array. Leaves original untouched */
export function shuffle<T>(array: T[]): T[] {
    const clone = Array.from(array);
    return rand.shuffle(engine, clone);
}

export function dice(sides: number, dice: number): number[] {
    return rand.dice(sides, dice)(engine);
}

export function die(sides: number): number {
    return rand.die(sides)(engine);
}

export function hex(length: number): string {
    return rand.hex(true)(engine, length);
}