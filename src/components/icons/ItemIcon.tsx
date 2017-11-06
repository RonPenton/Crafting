import React from 'react';
import { Item } from '../../Item';
import { GameIcon, Presets } from './GameIcon';
import { IconBadge, Badge } from './IconBadge';

export type ItemIconProps = {
    item: Item;
    size: number;
};

export class ItemIcon extends React.Component<ItemIconProps> {
    render() {
        return (
            <GameIcon
                {...this.props}
                {...Presets[this.props.item.preset]}
                icon={this.props.item.icon}
                backgroundStrokeRadius={40}
                backgroundStrokeWidth={24}
                backgroundStroke={this.props.item.quality.color}
            >
                <IconBadge
                    badge={this.props.item.quality.badge as Badge}
                    color={this.props.item.quality.color}
                    borderColor={this.props.item.quality.color}
                    placement="bottom-right"
                    scale={0.666666}
                />
            </GameIcon>
        );
    }
}
