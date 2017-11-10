import React from 'react';
import { bind } from 'decko';
import { Button } from './Button';

export interface ConfirmButtonProps {
    label: string;
    confirmLabel: string;
    onConfirmed: () => void;
}

interface ConfirmButtonState {
    buttonActivated?: boolean;
}

export class ConfirmButton extends React.PureComponent<ConfirmButtonProps, ConfirmButtonState> {
    constructor(props: ConfirmButtonProps) {
        super(props);
        this.state = {};
    }

    render() {
        if (this.state.buttonActivated) {
            return [
                <Button status="alert" onClick={this.confirm}>{this.props.confirmLabel}</Button>,
                <Button status="primary" onClick={this.cancel}>Cancel</Button>
            ];
        }

        return <Button status="warning" onClick={this.firstClick}>{this.props.label}</Button>;
    }

    @bind
    firstClick() {
        this.setState({ buttonActivated: true });
    }

    @bind
    confirm() {
        this.props.onConfirmed();
        this.setState({ buttonActivated: false });
    }

    @bind
    cancel() {
        this.setState({ buttonActivated: false });
    }
}

