import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Entry } from './pages/Entry';
import { DemoCrap } from './pages/DemoCrap';
import { Help } from './pages/Help';
import { World } from '../World';
import { Debug } from './pages/Debug';

export interface GameProps {
    world: World;
}

export function passState(world: World, element: any) {
    return (props: any) => {
        return React.createElement(element, { ...props, world });
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
                                <li><Link to="/debug">Debug</Link></li>
                                <li><Link to="/help">Help</Link></li>
                            </ul>
                        </div>
                    </div>
                </header>
                <main>
                    <Switch>
                        <Route exact path="/" render={passState(this.props.world, Entry)} />
                        <Route path="/democrap/:id?" render={passState(this.props.world, DemoCrap)} />
                        <Route path="/debug" render={passState(this.props.world, Debug)} />
                        <Route path="/help" render={passState(this.props.world, Help)} />
                    </Switch>
                </main>
            </div>
        );
    }
}