/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import getRouter from './app/router';
import store from './app/store';

const rootStore = store;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  
  render() {
    return (
      <Provider store={rootStore}>
        {getRouter()}
      </Provider> 
    );
  }

};

