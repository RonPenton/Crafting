import React from 'react';
import { bind } from 'decko';
import { ConfirmButton } from '../foundation/ConfirmButton';
import { startOver } from '../../World';
import { GameStateProps } from '../../utils';

export interface DebugState {
    preparingToDeleteDatastore?: boolean;
}

export class Debug extends React.Component<GameStateProps, DebugState> {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <h3>Clear Saved Data</h3>
                <ConfirmButton label="Clear" confirmLabel="Are you sure?" onConfirmed={this.clearData} />
            </div>
        );
    }

    @bind
    async clearData() {
        await startOver();
        location.reload(true);
    }
}