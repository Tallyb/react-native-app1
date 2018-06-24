import React, { Component } from 'react';
import styled from '../../theme';

import { Team } from '../Team/Team';

const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    background-color: yellow;
`;

const Divider = styled.View`
    background-color: #ffffff;
    width: 5;
`;

export interface Props { };
export class Game extends Component<Props> {
    render() {
        return (
            <Container >
                <Team name='Giraffes' side='left' > </Team>
                <Divider/>
                <Team name='Foxes' side='right'> </Team>
            </Container>
        );
    }

}



