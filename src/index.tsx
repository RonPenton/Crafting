import { generateName } from './Adventurer';
import React from 'react';
import ReactDOM from 'react-dom';
import * as R from 'ramda';

import { GameIcon, Presets } from './components/icons/GameIcon';
import { IconBadgeRun } from './components/icons/IconBadgeRun';
import { IconBadge } from './components/icons/IconBadge';
import { Layout } from './components/Layout';

import './vendor-trash';

export const VendorTrash: React.SFC = () => {
    return (
        <Layout>
            <GameIcon icon="chest-armor" size={80} {...Presets.Crimson} />
            <GameIcon icon="piercing-sword" size={80} {...Presets.Gold} />
            <GameIcon icon="pocket-bow" size={80} {...Presets.Ice} />
            <GameIcon icon="war-axe" size={80} {...Presets.Fire}>
                <IconBadge badge="arrow-up" />
            </GameIcon>
            <GameIcon icon="flail" size={80} {...Presets.Air}>
                <IconBadgeRun
                    placement="bottom-right"
                    items={[{ badge: "arrow-down", backgroundColor: "red" }, { badge: "arrow-up", backgroundColor: "green" }]} />
            </GameIcon>
            <div>
                <div>{R.range(1, 50).map(_ => <div>{generateName("male")}</div>)}</div>
                <div>{R.range(1, 50).map(_ => <div>{generateName("female")}</div>)}</div>
            </div>
        </Layout>
    );
}

window.onload = _ => ReactDOM.render(
    <VendorTrash />,
    document.getElementById("react"));