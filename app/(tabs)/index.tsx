import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IngresoCITT from '@/components/IngresoCITT';
import Inventario from '@/components/Inventario';  // Asegúrate de la ruta correcta

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Ingreso" component={IngresoCITT} />
      <Tab.Screen name="Inventario" component={Inventario} />
    </Tab.Navigator>
  );
}
