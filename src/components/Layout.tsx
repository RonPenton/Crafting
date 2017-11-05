import React from 'react';

export class Layout extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className="top-bar">
                        <div className="top-bar-left">
                            <ul className="menu">
                                <li><a href="/">Vendor Trash</a></li>
                            </ul>
                        </div>
                    </div>
                </header>
                {this.props.children}
            </div>
        );
    }
}