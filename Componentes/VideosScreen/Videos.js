import React, { Component } from 'react';
import { StyleSheet, WebView } from 'react-native';
import { Container, Header, Content, Left, Body, Title, Right, Button, Icon } from 'native-base';

import { CommonStyles, StyleConstants } from '../Styles';

class VideosScreen extends Component {
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
            <Title style={CommonStyles.baseColor_Font}>Videos</Title>
          </Body>
          <Right />
        </Header>
        <Content padder style={styles.content}>
          <Body style={styles.body}>
            <Title style={CommonStyles.baseColor_Font}>Videos de Recetas</Title>
          </Body>
          <WebView 
            source={{ uri: 'https://www.youtube.com/embed/f-e8A2omL9s' }}
            style={styles.videoPlayer}            
          />
          <WebView 
            source={{ uri: 'https://www.youtube.com/embed/oS0eXcU0j54' }}
            style={styles.videoPlayer}
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

export default VideosScreen;
