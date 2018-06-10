import React, { Component } from 'react';
import styled from '../../theme'

export interface Props {
    name: string,
    side: string
};

const containerSide = {
    left: `
    border-right-width: 2;
    border-right-color: red;
    `,
    right: `
        border-left-color: red;
        border-left-width: 2;
    `
};

const TeamContainer = styled.View`
    background-color: red;
    border-style: solid;
    flex: 1;
    flex-direction: column;
    ${props => containerSide[props.side]}
`;

const TeamName = styled.Text`
    height: 40;
    flex-direction: row;
    color: red;
`;

const TeamHeader = styled.View`
    align-content: ${(props: Props) => props.side === 'left' ? 'flex-start' : 'flex-end'};
    background-color: green;
    flex: 1;
`;

export class Team extends Component<Props> {
    render() {

        return (
            <TeamContainer  >
                <TeamHeader >
                    <TeamName>{this.props.name}&nbsp; {this.props.side}</TeamName>
                </TeamHeader>
            </TeamContainer>
        );
    }
}
