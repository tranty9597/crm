/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import SplashScreen from "react-native-splash-screen"

import { Provider } from 'react-redux'

import { pushNotificationConfigue } from './src/pushNotification'
import AppNavigation from './src/navigation';

export default class App extends React.Component {
  componentDidMount() {

    pushNotificationConfigue();
    SplashScreen.hide()

  }
  render() {

    return (
      // <Provider>

      // </Provider>
      <AppNavigation />

    );
  }
}

