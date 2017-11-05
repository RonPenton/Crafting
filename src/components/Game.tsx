import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Entry } from './pages/Entry';
import { DemoCrap } from './pages/DemoCrap';
import { Help } from './pages/Help';
import { Player } from '../Player';

export interface GameProps {
    player: Player;
}

export function passPlayer(player: Player, element: any) {
    return (props: any) => {
        return React.createElement(element, {...props, player});
    }
}

export class Game extends React.Component<GameProps> {
    render() {
        return (
            <div>
                <header>
                    <div className="top-bar">
                        <div className="top-bar-left">
                            <ul className="menu">
                                <li><Link to="/">Vendor Trash</Link></li>
                                <li><Link to="/democrap/200">Demo Crap</Link></li>
                                <li><Link to="/help">Help</Link></li>
                            </ul>
                        </div>
                    </div>
                </header>
                <Switch>
                    <Route exact path="/" component={Entry} />
                    <Route path="/democrap/:id?" render={passPlayer(this.props.player, DemoCrap)} />
                    <Route path="/help" component={Help} />
                </Switch>
            </div>
        );
    }
}