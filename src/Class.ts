import { Dict, nameify } from "./utls";

export interface Class {
    name: string;
}

export const Qualities: Dict<Class> = nameify(require("./data/Classes.json"));