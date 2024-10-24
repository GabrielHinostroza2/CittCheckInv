import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IngresoCITT from '@/components/IngresoCITT';
import QRScanner from '@/components/QRScanner';  // Asegúrate de tenerlo si lo usas
import Inventario from '@/components/Inventario';  // Asegúrate de importar Inventario

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Escanear QR" 
        component={QRScanner} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Ingreso" 
        component={IngresoCITT} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Inventario"   // Asegúrate de agregar esta pestaña
        component={Inventario} 
        options={{ headerShown: false }} 
      />
    </Tab.Navigator>
  );
}
