import React, { Component } from 'react';
import {Text, View} from 'react-native';
import styled, {StyledFunction} from 'styled-components';


export interface Props {
    ids: Array<number>,
};

const Container = styled.View`
    background-color: yellow;
    flex-direction: row;
    align-content: center;
    align-items: center;
`

const Line = styled.View`
    flex-direction: column;
    align-content: space-between;
`;

const Player = styled.View`
    height: 20;
    width: 20;

`;
console.log('STYLED', styled)

const PlayerText = styled.Text`
    color: green;
    font-weight: bold;
`;

export class Field extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            side: 'left',
            players: [1, 2, 3, 4, 5 , 6]
        }
    }

    getPlayersPositions (players, side): Array<Array<Number>> {
        return [[1, 2, 3],[4, 5, 6]];
    }
    render() {
        return (
            <Container>
                <Line>
                    <Player>
                        <PlayerText>1</PlayerText>
                    </Player>
                    <Player>
                        <PlayerText>2</PlayerText>
                    </Player>
                    <Player>
                        <PlayerText>3</PlayerText>
                    </Player>
                </Line>
                <Line>
                    <Player>
                        <PlayerText>1</PlayerText>
                    </Player>
                    <Player>
                        <PlayerText>2</PlayerText>
                    </Player>
                    <Player>
                        <PlayerText>3</PlayerText>
                    </Player>
                </Line>
            </Container>
        )
    }
}
