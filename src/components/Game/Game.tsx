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

export interface Props { };
export class Game extends Component<Props> {
    render() {
        return (
            <Container >
                <Team name='Team Left' side='left' > </Team>
                <Team name='Team Right' side='right'> </Team>
            </Container>
        );
    }

}



