import { Dict, nameify, Named } from "./utils";

export type Class = Named & {
}

export const Classes: Dict<Class> = nameify(require("./data/Classes.json"));