import Dexie from 'dexie';
import { Player } from './Player';

export class Database extends Dexie {
    player: Dexie.Table<Player, number>;

    constructor() {
        super("Database");
        this.version(1).stores({
            player: '&id'
        });
    }

    public async savePlayer(player: Player) {
        (player as any).id = 0; // ensure the ID is 0 so we always store a single object.
        await this.transaction("rw", this.player, async () => {
            await this.player.put(player);
        });
    }

    public async loadPlayer() {
        return await this.player.get(0);
    }
}

export const db = new Database();

