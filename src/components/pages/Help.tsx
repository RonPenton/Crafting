import React from 'react';
import { GameStateProps } from '../../utils';

export class Help extends React.Component<GameStateProps> {
    render() {
        return (
            <div>
                <h2>Help</h2>
                <a href="https://github.com/RonPenton/Vendor-Trash">Vendor Trash Github (submit issues!)</a>
            </div>
        );
    }
}