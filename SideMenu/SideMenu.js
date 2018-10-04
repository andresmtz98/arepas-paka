import React, { Component } from 'react';
import { Text, StyleSheet, FlatList, Image } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { Container, Header, Content, ListItem, Icon, Body } from 'native-base';


const menu = [
  {
    icon: 'home',
    text: 'Home',
    route: 'Home',
  }, 
  {
    icon: 'video-library',
    text: 'Videos',
    route: 'Videos',
  }, 
  {
    icon: 'ondemand-video',
    text: 'En Vivo',
    route: 'Live',
  }
];

class SideMenu extends Component {

  navigateToScreen = route => () => {
    const navigateToAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateToAction);
  }

  makeid = () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Image 
            source={require('./../assets/images/LOGO.png')}
            style={styles.logo}
            resizeMode='stretch'
          />
        </Header>
        <Content>
          <FlatList 
            style={styles.flatList}
            data={menu}
            renderItem={ ({ item }) => (
              <ListItem 
                button 
                key={this.makeid()} 
                onPress={() => this.props.navigation.navigate(item.route)}
                noBorder >
                <Icon 
                  name={item.icon} 
                  type="MaterialIcons" 
                  style={styles.icon}
                />
                <Text style={styles.itemMenu}>{item.text}</Text>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  header: {
    backgroundColor: '#3a455c',
    height: 180,
  },
  flatList: {
    borderTopWidth: 0.4,
    borderTopColor: '#f0f0f0',
  },
  icon: {
    marginRight: 20,
  },
  itemMenu: {
    fontFamily: 'Roboto',
  },
  logo: {
    marginTop: 5,
  },
});

SideMenu.propTypes = {
  navigation: PropTypes.object,
};

export default SideMenu;