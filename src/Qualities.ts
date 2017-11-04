import { Dict, nameify, Named } from "./utils";

export type Quality = Named & {
    color: string;
}

export const Qualities: Dict<Quality> = nameify(require("./data/Qualities.json"));