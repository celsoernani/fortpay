/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Routes from './routes'
import './config/ReactotronConfig'



const App = () => {
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
