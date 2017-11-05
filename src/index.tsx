import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

import { Game } from './components/Game';
import { Spinner } from './components/Spinner';

import './vendor-trash';
import { loadWorld, World } from './World';

interface LoaderState {
    world?: World;
}

class Loader extends React.Component<{}, LoaderState> {
    constructor() {
        super();
        this.state = {};
        this.load();
    }

    async load() {
        const world = await loadWorld();
        this.setState({ world });
    }

    render() {
        if (this.state.world) {
            return (
                <HashRouter>
                    <Game world={this.state.world} />
                </HashRouter>
            );
        }

        return <Spinner />
    }
}

window.onload = _ => ReactDOM.render(<Loader />, document.getElementById("react"));