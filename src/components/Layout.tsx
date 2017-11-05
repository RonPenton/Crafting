import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Entry } from './pages/Entry';
import { DemoCrap } from './pages/DemoCrap';
import { Help } from './pages/Help';

export class Layout extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className="top-bar">
                        <div className="top-bar-left">
                            <ul className="menu">
                                <li><Link to="/">Vendor Trash</Link></li>
                                <li><Link to="/democrap">Demo Crap</Link></li>
                                <li><Link to="/help">Help</Link></li>
                            </ul>
                        </div>
                    </div>
                </header>
                <Switch>
                    <Route exact path="/" component={Entry} />
                    <Route path="/democrap" component={DemoCrap} />
                    <Route path="/help" component={Help} />
                </Switch>
            </div>
        );
    }
}