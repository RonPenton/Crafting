import { Dict, nameify, Named } from "./utils";

export interface Craft extends Named {
}

export const Crafts: Dict<Craft> = nameify(require("./data/Crafts.json"));