import { Dict, nameify, Named } from "./utils";

export interface Class extends Named {
    allowedItemTypes: string[];
}

export const Classes: Dict<Class> = nameify(require("./data/Classes.json"));