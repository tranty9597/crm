/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StatusBar } from 'react-native'
import SplashScreen from "react-native-splash-screen"

import { Provider } from 'react-redux'
import store from './src/store'

import { pushNotificationConfigue } from './src/configs'
import AppNavigation from './src/navigation';
import { Color } from './src/values';

class App extends React.Component {

  componentDidMount() {
    pushNotificationConfigue();
    SplashScreen.hide()
  }
  render() {
    return (
      <React.Fragment>
        <StatusBar translucent backgroundColor={Color.transparent} />
        <Provider store={store}>
          <AppNavigation />
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;