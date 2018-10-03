import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Title, Item, Icon, Left, Input, Button, Text, Body, Header, Right } from 'native-base';

import { CommonStyles } from './../Styles';

class Pedido extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  render() {
    return (
      <Container style={CommonStyles.baseColor}>
        <Header transparent> 
          <Left>
            <Button transparent
              onPress={() => this.props.navigation.goBack()}>
              <Icon
                style={CommonStyles.baseColor_Font} 
                name="ios-arrow-back" 
                type="Ionicons"               
              />
            </Button>          
          </Left>
          <Body>
            <Title style={CommonStyles.baseColor_Font}>Pedido</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Form>
            <Item style={styles.item}>
              <Icon active name="ios-person" type="Ionicons" />
              <Input placeholder="Nombre Completo" textContentType="name" />
            </Item>
            <Item style={styles.item}>
              <Icon active name="phone" type="FontAwesome" />
              <Input placeholder="Teléfono" textContentType="telephoneNumber" keyboardType="phone-pad" />
            </Item>
            <Item style={styles.item}>
              <Icon active name="address" type="Entypo" />
              <Input placeholder="Dirección" textContentType="fullStreetAddress" />
            </Item>
            <Item style={styles.item}>
              <Icon active name="hash" type="Feather" />
              <Input placeholder="Cantidad" keyboardType="numeric" />
            </Item>           
          </Form>
          <Body style={styles.body}>
            <Button success onPress={() => alert("En unos 10 minutos su pedido llegará a su casa.")}>
              <Text style={CommonStyles.baseColor_Font}>Confirmar</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    marginTop: 20,
  },
  item: {
    borderBottomColor: "#404040",
  },
});

export default Pedido;
