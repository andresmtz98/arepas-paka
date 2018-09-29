import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { Container, Header, Content, ListItem, Icon, Body } from 'native-base';

const menu = [
  'Home', 'Videos', 'En Vivo'
];

class SideMenu extends Component {

  navigateToScreen = route => () => {
    const navigateToAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateToAction);
  }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#3a455c', height: 150 }}></Header>
        <Content>
          <FlatList 
            style={{ borderTopWidth: 0.4, borderTopColor: '#f0f0f0'}}
            data={menu}
            renderItem={ ({ item }) => (
              <ListItem 
                button 
                key={item} 
                onPress={() => this.props.navigation.navigate(item)}
                noBorder >
                <Text>{item}</Text>
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
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
});

SideMenu.propTypes = {
  navigation: PropTypes.object,
};

export default SideMenu;