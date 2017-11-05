import { Player, createNewPlayer } from "./Player";
import { Dict } from "./utils";
import { Area } from "./Area";
import { db } from "./Database";

const currentVersion = 1;

export interface World {
    version: number;
    player: Player;
    areas: Dict<Area>;
}

export async function loadWorld(): Promise<World> {
    let world = await db.loadWorld();
    if (world) {
        if (world.version < currentVersion) {
            world = upgradeWorld(world);
        }
        return world;
    }

    return await startOver();
}

export async function startOver() {
    const newWorld = createNewWorld();
    await db.saveWorld(newWorld);
    return newWorld;
}

export function createNewWorld(): World {
    return {
        version: currentVersion,
        player: createNewPlayer(),
        areas: generateAreas()
    }
}

function upgradeWorld(world: World): World {
    if (world.version < 2) {
        // upgrade to v2. 
    }
    if (world.version < 3) {
        // upgrade to v3, etc.
    }

    return world;
}

function generateAreas() {
    //TODO: this.
    return {};
}