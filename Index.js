import { createDrawerNavigator } from 'react-navigation';
import SideMenu from './SideMenu/SideMenu';
import HomeScreen from './Componentes/HomeScreen';
import VideosScreen from './Componentes/VideosScreen/Videos';
import LiveScreen from './Componentes/LiveScreen/Live';

const drawerNav = createDrawerNavigator(
  {
    Home: HomeScreen,
    Videos: VideosScreen,
    Live: LiveScreen,
  },
  {
    contentComponent: SideMenu,    
  }
);

export default drawerNav;