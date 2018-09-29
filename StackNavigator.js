import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from  'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
import MainScreen from "./MainScreen";
import DetailScreen from "./DetailScreen";

const stackNav = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Home',
        headerLeft: (
          <TouchableOpacity
            style={styles.touchableOpacity} 
            onPress={() => navigation.toggleDrawer()} >
            <IOSIcon name="ios-menu" size={30} />
          </TouchableOpacity>
        ),
      })
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        title: 'Detail',
      }
    },
  },
  {
    initialRouteName: 'Main',
  }
);

const styles = StyleSheet.create({
  touchableOpacity: {
    marginLeft: 10,
  }
});

export default stackNav;