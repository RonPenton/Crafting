import { Dict, Named, nameify } from "./utils";

export interface Quality extends Named {
    color: string;
}

export const Qualities: Dict<Quality> = nameify(require("./data/Qualities.json"));