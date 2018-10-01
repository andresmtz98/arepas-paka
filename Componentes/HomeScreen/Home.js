import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Grid, Row, Col, Content, Card, CardItem, Left, Body, Button, Icon, Text, Right } from 'native-base';
import ModalItem from './ModalItem';

const imagesUri = [
  "https://www.abc.es/media/sociedad/2016/08/10/hamburguesa-comida-rapida-k49--620x349@abc.jpg",
  "https://static.iris.net.co/dinero/upload/images/2016/12/15/240182_1.jpg",
];

class HomeScreen extends Component {
  state = {
    isModalVisible: false,
    currentItem: {
      city: 'Barranquilla',
      price: '12000',
      uri: null,
    },
  };
  
  _hideModal = () => {
    this.setState({ isModalVisible: false });
  }

  render () {
    return (
      <Container>
          <Content style={styles.content}>
            <Grid>
              <Row style={styles.row}>
                <Col style={styles.col}>
                  <Content>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate("DetailItem")}
                      onLongPress={() => { 
                        this.setState({ 
                          isModalVisible: true,
                          currentItem: {
                            city: 'Soledad',
                            price: '12000',
                            uri: imagesUri[0]
                          }
                        }) 
                      }}                      
                    >
                      <Image                         
                        source={{ uri: imagesUri[0]}} 
                        style={styles.image} />
                    </TouchableOpacity>
                  </Content>
                </Col>
                <Col style={styles.col}>
                  <Content>
                    <TouchableOpacity
                      onLongPress={() => { 
                        this.setState({ 
                          isModalVisible: true,
                          currentItem: {
                            city: 'Barranquilla',
                            price: '7500',
                            uri: imagesUri[1]
                          }
                        }) 
                      }} 
                    >
                      <Image 
                        source={{ uri: imagesUri[1]}}
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
  },
  image: {
    height: 300, 
    width: null, 
    flex: 1, 
    resizeMode: 'stretch',
  },
  row: {
    height: 300,
  },
  col: {
    backgroundColor: 'transparent',
  },
});

export default HomeScreen;