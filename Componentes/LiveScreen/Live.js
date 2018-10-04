import React, { Component } from 'react';
import { StyleSheet, WebView } from 'react-native';
import { Container, Header, Content, Left, Body, Title, Right, Button, Icon } from 'native-base';

import { CommonStyles, StyleConstants } from '../Styles';

class LiveScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Container style={CommonStyles.baseColor}>
        <Header transparent noShadow>
          <Left>
            <Button
              transparent 
              onPress={() => this.props.navigation.toggleDrawer()} >
              <Icon 
                name="ios-menu" 
                type="Ionicons"                 
                style={CommonStyles.baseColor_Font}
              />
            </Button>
          </Left>
          <Body>
            <Title style={CommonStyles.baseColor_Font}>En Vivo</Title>
          </Body>
          <Right />
        </Header>
        <Content padder style={styles.content}>          
          <Body style={styles.body}>
            <Title style={CommonStyles.baseColor_Font}>Sesión en vivo</Title>
          </Body>
          <WebView 
            source={{ uri: 'http://www.ustream.tv/embed/23606670?html5ui&autoplay=true' }}
            style={styles.videoPlayer}
            javaScriptEnabled
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    borderTopColor: StyleConstants.BASE_COLOR_FONT_HEX,
    borderTopWidth: 1,
  },
  videoPlayer: {
    marginHorizontal: 5,
    marginTop: 20,
    width: '97%',
    height: 350,
  },
  body: {
    width: '100%',
    alignItems: 'center',
  },
});

export default LiveScreen;
