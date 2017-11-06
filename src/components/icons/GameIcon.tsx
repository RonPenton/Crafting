import React from 'react';

export type GameIconPropsWithSize = {
    size: number;
} & GameIconProps

export type GameIconProps = {
    icon: string;
} & GameIconPresetProps

export type BackgroundIconProps = {
    background?: string;
    backgroundOpacity?: number;
    backgroundStroke?: string;
    backgroundStrokeWidth?: number;
    backgroundStrokeRadius?: number;
}

export type GameIconPresetProps = {
    foreground?: string;
    foregroundOpacity?: number,

    shadow?: Shadow;

    strokeWidth?: number;
    strokeColor?: string;
} & BackgroundIconProps

export interface Shadow {
    blur: number;
    color: string;
    side?: string;
    x?: number;
    y?: number;
}

export const GameIconBackground: React.SFC<BackgroundIconProps> = props => {
    const background = props.background || "black";
    const bopacity = props.backgroundOpacity === undefined ? 1 : props.backgroundOpacity;
    const bstroke = props.backgroundStroke || "black";
    const bstrokew = props.backgroundStrokeWidth || 8;
    const bstroker = props.backgroundStrokeRadius || 20;
    return (
        <rect stroke={bstroke}
            fill={background}
            opacity={bopacity}
            x="0" y="0"
            width="512" height="512"
            stroke-width={bstrokew}
            rx={bstroker} ry={bstroker} />
    );
}

let _iconId = 0;

export interface GameIconState {
    path?: string;
}
export const GameIcon: React.SFC<GameIconPropsWithSize> = props => {
    const style = {
        width: `${props.size}px`,
        height: `${props.size}px`
    }
    return (
        <svg viewBox="0 0 512 512" style={style} className="game-icon">
            <GameIconG {...props} />
        </svg>
    );
}

export class GameIconG extends React.Component<GameIconProps, GameIconState> {
    readonly id: number;
    constructor(props: GameIconProps) {
        super(props);
        this.state = {};
        this.id = _iconId++;
        GameIconG.loadSvg(`/icons/${this.props.icon}.svg`).then(doc => this.load(doc)).catch(e => alert(e));
    }

    public static loadSvg(url: string): Promise<Document> {
        return new Promise<Document>((resolve, reject) => {
            const req = new XMLHttpRequest;
            req.open("GET", url);
            req.onreadystatechange = () => {
                if (req.readyState == XMLHttpRequest.DONE && req.status == 200) {
                    if (!req.responseXML) {
                        reject("error loading SVG: " + url);
                        return;
                    }
                    resolve(req.responseXML);
                }
            }
            req.send();
        });
    }

    private load(doc: Document) {
        const svg = doc.firstChild as SVGElement;
        const g = svg.lastElementChild as SVGPathElement;
        const foreground = g.lastElementChild as SVGPathElement;
        
        this.setState({
            ...this.state,
            path: foreground.attributes.getNamedItem("d").value
        });
    }

    render() {
        if (!this.state.path)
            return null;
        const foreground = this.props.foreground || "white";
        const fopacity = this.props.foregroundOpacity === undefined ? 1 : this.props.foregroundOpacity;
        const filter = this.props.shadow ? `url(#shadow-${this.id})` : undefined;
        return (
            <g>
                {this.renderDefs()}

                <GameIconBackground {...this.props} />
                <path d={this.state.path}
                    fill={foreground}
                    opacity={fopacity}
                    filter={filter}
                    stroke={this.props.strokeColor}
                    strokeWidth={this.props.strokeWidth}
                />
                {this.props.children}
            </g>
        );
    }

    private renderDefs(): JSX.Element | null {
        if (!this.props || !this.props.shadow)
            return null;
        const isin = this.props.shadow.side == "in";
        const compositeOperator = isin ? "out" : "atop";
        const composite2Operator = isin ? "atop" : "over";
        const composite2in = isin ? "offset" : "SourceGraphic";
        const composite2in2 = isin ? "SourceGraphic" : "offset";
        const dx = this.props.shadow.x || 0;
        const dy = this.props.shadow.y || 0;
        const shadowId = `shadow-${this.id}`;
        return (
            <defs>
                <filter id={shadowId} height="300%" width="300%" x="-100%" y="-100%">
                    <feFlood floodColor={this.props.shadow.color} result="flood"></feFlood>
                    <feComposite in="flood" in2="SourceGraphic" operator={compositeOperator} result="composite"></feComposite>
                    <feGaussianBlur in="composite" stdDeviation={this.props.shadow.blur} result="blur"></feGaussianBlur>
                    <feOffset result="offset" dx={dx} dy={dy}></feOffset>
                    <feComposite in={composite2in} in2={composite2in2} operator={composite2Operator}></feComposite>
                </filter>
            </defs>
        );
    }
}

export const Presets: { [key: string]: GameIconPresetProps } = require("../../data/IconPresets.json");