import { Levelable, Named, Breakable, Valuable } from './utls';

export type Item = Named & Levelable & Breakable & Valuable & {
    quality: string;
}