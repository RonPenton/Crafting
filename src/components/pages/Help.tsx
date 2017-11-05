import React from 'react';
import { RouteComponentProps } from 'react-router';

export class Help extends React.Component<RouteComponentProps<{}>> {
    render() {
        return (
            <div>
                <h2>Help</h2>
                <p>Good luck!</p>
            </div>
        );
    }
}