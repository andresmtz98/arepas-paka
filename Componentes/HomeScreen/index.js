import { createStackNavigator } from  'react-navigation';
import HomeScreen from "./Home";
import DetailItem from './DetailItem';
import Pedido from './Pedido';

const stackNav = createStackNavigator(
  {
    Home: HomeScreen,
    DetailItem: DetailItem,
    Pedido: Pedido,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      header: null,
    }
  }
);

export default stackNav;