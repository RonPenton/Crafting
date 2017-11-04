import { Dict, nameify, Named } from "./utls";

export type Class = Named & {
}

export const Qualities: Dict<Class> = nameify(require("./data/Classes.json"));