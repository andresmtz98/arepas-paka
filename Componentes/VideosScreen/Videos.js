import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Content, Left, Body, Title, Right, Button, Icon } from 'native-base';
import Video from 'react-native-video';

import { CommonStyles, StyleConstants } from '../Styles';

class VideosScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPlayer: {
        repeat: false, 
        rate: 1, 
        volume: 1, 
        muted: false, 
        resizeMode: 'contain', // video's mode: none, cover, stretch, contain 
        duration: 0.0, // video's duration set on event onLoad 
        currentTime: 0.0, // set on event onProgress 
        paused: true, // check if video is pausing or not 
        rateText: '1.0', // rate value in component Picker 
        pausedText: 'Play', // view to user: 'Play' - when video is pausing, 'Pause' - when video is playing 
        hideControls: false, // hide control button when video is playing and show it when user clicks on video
      },
    };
  }

  onLoad = data => {
    this.setState({ videoPlayer: { duration: data.duration }});
  }

  onPress = data => {
    this.setState({ videoPlayer: { currentTime: data.currentTime }})
  }

  onEnd = data => {
    this.setState({ videoPlayer: { pausedText: 'Reproducir', paused: true }});
    this.video.seek(0);
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
        <Content style={styles.content}>
          <TouchableWithoutFeedback 
          onPress={() => this.setState({ paused: !this.state.paused })}>
            <Video
              style={styles.videoPlayer} 
              ref={( ref: Video) => { this.video = ref }}
              source={require('./../../Servicios/Videos/video.mp4')}
              repeat={this.state.videoPlayer.repeat}
              rate={this.state.videoPlayer.rate}
              volume={this.state.videoPlayer.volume}
              muted={this.state.videoPlayer.muted}
              resizeMode={this.state.videoPlayer.resizeMode}
              paused={this.state.videoPlayer.paused}
              onLoad={this.onLoad}
              onProgress={this.onProgress}
              onEnd={this.onEnd}
            />
          </TouchableWithoutFeedback>
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
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default VideosScreen;
