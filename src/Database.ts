import Dexie from 'dexie';
import { World } from './World';

export class Database extends Dexie {
    world: Dexie.Table<World, number>;

    constructor() {
        super("Database");
        this.version(2).stores({
            world: '&id'
        });
    }

    public async saveWorld(world: World) {
        (world as any).id = 0; // ensure the ID is 0 so we always store a single object.
        await this.transaction("rw", this.world, async () => {
            await this.world.put(world);
        });
    }

    public async loadWorld() {
        return await this.world.get(0);
    }
}

export const db = new Database();
