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
import {connect} from 'react-redux';



function mapStateToProps(state) {
    return {
        counter: state.counter,
    };
}

function mapDispatchToProps(dispatch){
    return {
        increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
        decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
    };
}

class CounterApp extends Component {
render() {
  return (
    <View style={styles.container}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          width: 200,
          justifyContent: 'space-around',
        }}
      >
        <TouchableOpacity onPress={()=>this.props.increaseCounter()}>
          <Text style={styles.textSize}> Increase </Text>
        </TouchableOpacity>
        <Text style={styles.textSize}> {this.props.counter} </Text>
        <TouchableOpacity onPress={()=>this.props.decreaseCounter()}>
          <Text style={styles.textSize}> Decrease </Text>
        </TouchableOpacity>
      </View>
    </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
