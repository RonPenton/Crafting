import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

import { Layout } from './components/Layout';

import './vendor-trash';

window.onload = _ => ReactDOM.render(
    <HashRouter>
        <Layout />
    </HashRouter>,
    document.getElementById("react"));