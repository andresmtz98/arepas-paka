import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Grid, Row, Col, Content, Left, Body, Button, Icon, Title, Right } from 'native-base';
import ModalItem from './ModalItem';
import { ITEMS } from './../../Servicios/Datos/Data';

import { CommonStyles, StyleConstants } from './../Styles';


class HomeScreen extends Component {
  state = {
    isModalVisible: false,
    currentItem: {
      nombre: '',
      descripcion: '',
      ciudad: '',
      precio: '',
      uri: null,
    },
  };
  
  _hideModal = () => {
    this.setState({ isModalVisible: false });
  }

  render () {
    return (
      <Container style={CommonStyles.baseColor}>
        <Header transparent>
          <Left>
            <Button transparent
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon 
                style={CommonStyles.baseColor_Font}
                name="ios-menu" 
                type="Ionicons"               
              />
            </Button>          
          </Left>
          <Body>
            <Title style={CommonStyles.baseColor_Font}>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <Grid>
            <Row style={styles.row}>
              <Col style={styles.col}>
                <Content>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({                         
                        currentItem: ITEMS[0]
                      })
                      this.props.navigation.navigate("DetailItem", { currentItem: this.state.currentItem })
                    }}
                    onLongPress={() => { 
                      this.setState({ 
                        isModalVisible: true,
                        currentItem: ITEMS[0]
                      }) 
                    }}                      
                  >
                    <Image                         
                      source={{ uri: ITEMS[0].uri}} 
                      style={styles.image} />
                  </TouchableOpacity>
                </Content>
              </Col>
              <Col style={styles.col}>
                <Content>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ 
                        currentItem: ITEMS[1]
                      })
                      this.props.navigation.navigate("DetailItem", { currentItem: this.state.currentItem })
                    }}
                    onLongPress={() => { 
                      this.setState({ 
                        isModalVisible: true,
                        currentItem: ITEMS[1]
                      }) 
                    }} 
                  >
                    <Image 
                      source={{ uri: ITEMS[1].uri}}
                      style={styles.image} />
                  </TouchableOpacity>
                </Content>
              </Col>
            </Row>             
          </Grid>
          <ModalItem 
            hideModal={this._hideModal} 
            visible={this.state.isModalVisible} 
            currentItem={this.state.currentItem} 
            navigation={this.props.navigation}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
      paddingHorizontal: 4,
      paddingVertical: 3,
      borderTopColor: StyleConstants.BASE_COLOR_FONT_HEX,
      borderTopWidth: 1,
  },
  image: {
    height: 300, 
    width: null, 
    flex: 1, 
  },
  row: {
    height: 300,
  },
  col: {
    backgroundColor: 'transparent',
  },
});

export default HomeScreen;