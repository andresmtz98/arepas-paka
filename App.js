import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Font } from 'expo';
import DrawerNav from './Index';


export default class App extends React.Component {
componentDidMount() {
  Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
}

  render() {
    return (
      <DrawerNav />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
