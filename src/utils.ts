export type Dict<T> = { [index: string]: T };

export type Named = { name: string };

export type Levelable = { level: number }

export type Experienceable = Levelable & { experience: number; };

export type Breakable = { wear?: number };
export const isBroken = (item: Breakable) => item.wear !== undefined && item.wear <= 0;

export type Valuable = { cost: number };

export type Timed = { duration: number };

export type Quantity<T> = { item: T, quantity: number };

export function nameify<T extends Named>(dict: Dict<T>) {
    for (var prop in dict) {
        dict[prop].name = prop;
    }
    return dict;
}