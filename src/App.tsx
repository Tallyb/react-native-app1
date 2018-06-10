/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform, StyleSheet
} from 'react-native';
import { Game } from './components/Game/Game';

export interface Props { };
export default class App extends Component<Props> {
  render() {
    return (
      <Game></Game>
    );
  }
}

