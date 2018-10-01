import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Header, Content, Left, Body, Title } from 'native-base';
import IOSIcon from "react-native-vector-icons/Ionicons";

class LiveScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {    
    return (
      <Container>
        <Header>
          <Left>
            <TouchableOpacity
              style={styles.touchableOpacity} 
              onPress={() => this.props.navigation.toggleDrawer()} >
              <IOSIcon name="ios-menu" size={30} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title>En Vivo</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  touchableOpacity: {
    marginLeft: 10,
  }
});

export default LiveScreen;
