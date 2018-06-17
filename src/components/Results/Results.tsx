import React, { Component } from 'react';
import styled from '../../theme'

export interface Props {
};

const Board = styled.View`
    background-color: orange;
    height: 70;
    align-items: center;
`;

const Score = styled.View`
    width: 70;
`

export class Results extends Component<Props> {
    render() {
        return (
            <Board></Board>
        )
    }
}
