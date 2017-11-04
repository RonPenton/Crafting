import { Dict, nameify } from "./utls";

export interface Quality {
    name: string;
    color: string;
}

export const Qualities: Dict<Quality> = nameify(require("./data/Qualities.json"));