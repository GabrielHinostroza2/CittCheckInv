import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// Definir un tipo para el estado
type UserData = {
  nombre: string;
  rol: string;
  carrera: string | null; // Aceptar string o null
  horaIngreso: string;
};

const IngresoCITT = () => {
  // Estado para almacenar los datos de la persona
  const [userData, setUserData] = useState<UserData>({
    nombre: 'Juan Pérez',
    rol: 'Estudiante',
    carrera: 'Ingeniería en Informática', // Este puede ser null
    horaIngreso: new Date().toLocaleTimeString(),
  });

  // Función para cambiar los datos (ejemplo de actualizar estado)
  const actualizarDatos = () => {
    setUserData({
      nombre: 'Ana Rodríguez',
      rol: 'Profesor',
      carrera: null, // Aquí está el valor null
      horaIngreso: new Date().toLocaleTimeString(),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ingreso a Sala CITT</Text>
      <Text style={styles.label}>Nombre: {userData.nombre}</Text>
      <Text style={styles.label}>Rol: {userData.rol}</Text>
      {userData.rol === 'Estudiante' && userData.carrera ? (
        <Text style={styles.label}>Carrera: {userData.carrera}</Text>
      ) : null}
      <Text style={styles.label}>Hora de Ingreso: {userData.horaIngreso}</Text>

      <Button title="Cambiar Usuario" onPress={actualizarDatos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default IngresoCITT;
