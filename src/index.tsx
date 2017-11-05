import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

import { Game } from './components/Game';
import { loadPlayer, Player } from './Player';
import { Spinner } from './components/Spinner';

import './vendor-trash';

interface LoaderState {
    player?: Player;
}

class Loader extends React.Component<{}, LoaderState> {
    constructor() {
        super();
        this.state = {};
        this.loadPlayer();
    }

    async loadPlayer() {
        const player = await loadPlayer();
        this.setState({ player });
    }

    render() {
        if (this.state.player) {
            return (
                <HashRouter>
                    <Game player={this.state.player} />
                </HashRouter>
            );
        }

        return <Spinner />
    }
}

window.onload = _ => ReactDOM.render(<Loader />, document.getElementById("react"));