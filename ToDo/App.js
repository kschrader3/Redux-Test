/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CounterApp from './js/CounterApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initalState = {
  counter: 0,
};

const reducer = (state = initalState, action) => {
  switch (action.type)
  {
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {counter: state.counter - 1};
  }
  return state;
};
const store = createStore(reducer);


class App extends Component {

render() {
  return (
    <Provider store={store}>
     <CounterApp />
    </Provider>
  );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // eslint-disable-next-line prettier/prettier
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSize: {
    // eslint-disable-next-line prettier/prettier
    fontSize: 20,
  },
});

export default App;
