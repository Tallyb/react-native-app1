import React, { Component } from 'react';
import {Text} from 'react-native';
import styled from '../../theme'; 

export interface Props {
};

const Container = styled.View`
    background-color: orange;
    height: 70;
    align-items: center;
`;

const Score = styled.View`
    width: 70;
`

export class Board extends Component<Props> {
    render() {
        return (
            <Container>
                <Text>I am Board</Text>
            </Container>
        )
    }
}
