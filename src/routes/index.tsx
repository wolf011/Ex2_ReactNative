import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Museu from '../screens/Museu';
import Palacio from '../screens/Palacio';
import Hotel from '../screens/Hotel';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function AppRouter() {

  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#C9D5DF",
          width: 300
        },
        headerTintColor: "white",
        headerTitleStyle: {
          color: "yellow",
        },
        headerStyle: {
          backgroundColor: "#495678",
        },
        drawerActiveBackgroundColor: "#495678",
        drawerInactiveBackgroundColor: "gray",
        drawerInactiveTintColor: "#fff",
        drawerActiveTintColor: "yellow"
      }}
      >
      <Drawer.Screen name="Início" component={Home} />
      <Drawer.Screen name="Museu Imperial" component={Museu} />
      <Drawer.Screen name="Palácio de Cristal" component={Palacio} />
      <Drawer.Screen name="Hotel Quitandinha" component={Hotel} />
    </Drawer.Navigator>
  )
}