import React from 'react';
import { View } from 'react-native';
import { Font, AppLoading } from 'expo';
import DrawerNav from './Index';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    }
  }
  

  componentDidMount() {
    Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
    .then(success => {
      this.setState( { fontsLoaded: true });
    });
  }

  render() {
    return (
      this.state.fontsLoaded ? <DrawerNav /> :
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <AppLoading />
        </View>
    );
  }
}

export default App;