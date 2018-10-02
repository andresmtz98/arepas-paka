import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Title, Item, Icon, Left, Input, Button, Text, Body, Header, Right } from 'native-base';

class Pedido extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  render() {
    return (
      <Container style={styles.container}>
        <Header transparent> 
          <Left>
            <Button transparent
              onPress={() => this.props.navigation.goBack()}>
              <Icon
                style={{color: "#404040"}} 
                name="ios-arrow-back" 
                type="Ionicons"               
              />
            </Button>          
          </Left>
          <Body>
            <Title style={{color: "#404040"}}>Pedido</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Form>
            <Item style={{borderBottomColor: "#404040"}}>
              <Icon active name="ios-person" type="Ionicons" />
              <Input placeholder="Nombre Completo" textContentType="name" />
            </Item>
            <Item style={{borderBottomColor: "#404040"}}>
              <Icon active name="phone" type="FontAwesome" />
              <Input placeholder="Teléfono" textContentType="telephoneNumber" keyboardType="phone-pad" />
            </Item>
            <Item style={{borderBottomColor: "#404040"}}>
              <Icon active name="address" type="Entypo" />
              <Input placeholder="Dirección" textContentType="fullStreetAddress" />
            </Item>
            <Item style={{borderBottomColor: "#404040"}}>
              <Icon active name="hash" type="Feather" />
              <Input placeholder="Cantidad" keyboardType="numeric" />
            </Item>           
          </Form>
          <Body style={styles.body}>
            <Button success onPress={() => alert("En unos 10 minutos su pedido llegará a su casa.")}>
              <Text style={{color: "#404040"}}>Confirmar</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFE8A1",
  },
  body: {
    marginTop: 20,
  },
});

export default Pedido;
