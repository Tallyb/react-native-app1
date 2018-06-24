import React, { Component } from 'react';
import styled from '../../theme'

import { Board } from '../Board/Board';
import { Field } from '../Field/Field';
export interface Props {
    name: string,
    side: string
};

const Container = styled.View`
    border-style: solid;
    flex: 1;
    flex-direction: column;
    align-content: flex-start;
`;

const TeamHeader = styled.View`
    height: 30;
`;

const TeamName = styled.Text`
    font-size: 20;
    flex-direction: row;
    color: black;
    background-color: white;
    text-align: center;
    text-align-vertical: center;
`;

export class Team extends Component<Props> {
    render() {

        return (
            <Container  >
                <TeamHeader>
                    <TeamName>{this.props.name}&nbsp; {this.props.side}</TeamName>  
                </TeamHeader>
                <Board ></Board>
                <Field></Field>
            </Container>
        );
    }
}
