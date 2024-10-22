import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IngresoCITT from '@/components/IngresoCITT';
import Inventario from '@/components/Inventario'; // Asegúrate de la ruta correcta

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#00796b', // Color para pestañas activas
        tabBarInactiveTintColor: '#777', // Color para pestañas inactivas
        tabBarStyle: {
          backgroundColor: '#fff', // Fondo blanco
          borderTopWidth: 0,
          elevation: 5, // Sombra para Android
          shadowOpacity: 0.3, // Sombra para iOS
          paddingVertical: 10, // Espaciado vertical para una mejor experiencia táctil
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="INGRESO"
        component={IngresoCITT}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="INVENTARIO"
        component={Inventario}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
