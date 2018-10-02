import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Left, Body, Button, Icon, Text, Right } from 'native-base';
import Modal from 'react-native-modal';

const ModalItem = params => {
  const { uri, ciudad, precio } = params.currentItem;
  return (
    <Modal 
      isVisible={params.visible}
      onBackdropPress={() => params.hideModal()}
      onSwipe={() => params.hideModal()}
      swipeDirection="left">
      <Card>
        <CardItem cardBody>
          <Image 
            source={{ uri: uri}}
            style={{ width: '100%', height: 300 }} />
        </CardItem>
        <CardItem>
          <Left>
            <Text>{ciudad}</Text>
          </Left>
          <Body>                    
            <Button 
              transparent 
              iconLeft
              onPress={() => {
                params.hideModal();
                params.navigation.navigate("DetailItem", { currentItem: params.currentItem });
              }}>
              <Icon active name="info" type="Foundation" />
              <Text>Ver más</Text>
            </Button>
          </Body>
          <Right>
            <Button 
              transparent 
              icon
              onPress={() => {
                params.hideModal();
                params.navigation.navigate("Pedido");
              }}>
              <Icon active name="dollar" type="Foundation" />
              <Text>{precio}</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>              
    </Modal>
  );
};

export default ModalItem;
