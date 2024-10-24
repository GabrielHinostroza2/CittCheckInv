import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IngresoCITT from '@/components/IngresoCITT';
import QRScanner from '@/components/QRScanner';  // Asegúrate de tenerlo si lo usas
import Inventario from '@/components/Inventario';  // Asegúrate de importar Inventario

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
        name="Inventario"
        component={Inventario}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
