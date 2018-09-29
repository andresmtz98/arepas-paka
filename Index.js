import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import SideMenu from './SideMenu/SideMenu';
import stackNavigator from './StackNavigator';

const drawerNav = createDrawerNavigator(
  {
    Main: {
      screen: stackNavigator,
    },
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 180,
  }
);

export default drawerNav;