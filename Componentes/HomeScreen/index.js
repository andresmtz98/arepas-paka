import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from  'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./Home";

const stackNav = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
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
  },
  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  touchableOpacity: {
    marginLeft: 10,
  }
});

export default stackNav;