import React from 'react';
import ReactDOM from 'react-dom';

import './vendor-trash';

export const VendorTrash: React.SFC = () => {
    return <div>Hello!</div>;
}

window.onload = _ => ReactDOM.render(
    <VendorTrash />,
    document.getElementById("react"));