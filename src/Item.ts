import { Levelable, Named, Breakable, Valuable } from './utils';

export type Item = Named & Levelable & Breakable & Valuable & {
    quality: string;
}