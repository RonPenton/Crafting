import React from 'react';
import * as R from 'ramda';

import { GameIcon, Presets } from '../../components/icons/GameIcon';
import { IconBadge } from '../../components/icons/IconBadge';
import { IconBadgeRun } from '../../components/icons/IconBadgeRun';
import { generateName } from '../../Adventurer';
import { GameStateProps } from '../../utils';
import { Items } from '../../Item';
import { ItemIcon } from '../icons/ItemIcon';

export type DemoCrapProps = GameStateProps<{ id?: number }>;

export class DemoCrap extends React.Component<DemoCrapProps> {
    render() {
        return (
            <div>
                <div>
                    {`Player Name: ${this.props.world.player.name}`}
                </div>
                <div>
                    {`Path Parameter: ${this.props.match.params.id}`}
                </div>
                {this.renderItems()}
                <GameIcon icon="chest-armor" size={80} {...Presets.Crimson} />
                <GameIcon icon="piercing-sword" size={80} {...Presets.Gold} />
                <GameIcon icon="pocket-bow" size={80} {...Presets.Ice} />
                <GameIcon icon="war-axe" size={80} {...Presets.Fire}>
                    <IconBadge badge="arrow-up" />
                </GameIcon>
                <GameIcon icon="flail" size={80} {...Presets.Air}>
                    <IconBadgeRun
                        placement="bottom-right"
                        items={[{ badge: "rank-1", backgroundColor: "red" }, { badge: "rank-2", backgroundColor: "green" }, { badge: "rank-3", backgroundColor: "green" }]} />
                </GameIcon>
                <div>
                    <div>{R.range(1, 50).map(_ => <div>{generateName("male")}</div>)}</div>
                    <div>{R.range(1, 50).map(_ => <div>{generateName("female")}</div>)}</div>
                </div>
            </div>
        );
    }

    renderItems() {
        const items = [
            Items["Oak Log"],
            Items["Maple Log"],
            Items["Birch Log"],
            Items["Beech Log"],
            Items["Mahogany Log"]
        ];

        return items.map(item => <ItemIcon item={item} size={80} />)
    }
}