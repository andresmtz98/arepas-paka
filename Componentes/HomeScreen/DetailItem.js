import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Card, CardItem, Text, Left, Body, Right, Icon, Button, Header, Title } from 'native-base';

class DetailItem extends Component {

  render() {
    const { navigation } = this.props;
    const { nombre, precio, descripcion, uri } = navigation.getParam('currentItem', {});
    return (
      <Container style={styles.container}>
        <Header transparent>
          <Left>
            <Button transparent
              onPress={() => navigation.goBack()}>
              <Icon 
                style={{color: "#404040"}}
                name="ios-arrow-back" 
                type="Ionicons"               
              />
            </Button>          
          </Left>
          <Body>
            <Title style={{color: "#404040"}}>Detalle</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card transparent>
            <CardItem bordered>
              <Left>
                <Body>
                  <Text style={{color: "#404040"}}>{nombre}</Text>
                  <Text note>{`$ ${precio}`}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody bordered>
              <Body>
                <Image 
                  source={{ uri: uri}} 
                  style={styles.cardImage}  
                />
                <Text style={{ padding: 10, color: "#404040" }}>{descripcion}</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Left>
                <Button 
                  transparent 
                  iconRight
                  onPress={() => navigation.navigate("Pedido")}>                  
                  <Text style={{color: "#404040",}}>Pedir</Text>
                  <Icon style={{color: "#404040",}} name="add-to-list" type="Entypo" />
                </Button>
              </Left>
              <Body />
              <Right />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFE8A1",    
  },
  cardImage: {
    flex: 0,
    height: 300,
    width: "100%",
    resizeMode: "cover",
  },
});

export default DetailItem;
