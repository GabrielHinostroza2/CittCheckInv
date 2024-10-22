import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

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
      {/* Agregar la imagen con el nuevo nombre */}
      <Image source={require('@/assets/images/logo_citt.png')} style={styles.logo} />

      <Text style={styles.header}>Ingreso a Sala CITT</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nombre: {userData.nombre}</Text>
        <Text style={styles.label}>Rol: {userData.rol}</Text>
        {userData.rol === 'Estudiante' && userData.carrera ? (
          <Text style={styles.label}>Carrera: {userData.carrera}</Text>
        ) : null}
        <Text style={styles.label}>Hora de Ingreso: {userData.horaIngreso}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={actualizarDatos}>
        <Text style={styles.buttonText}>Cambiar Usuario</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    padding: 20,
  },
  logo: {
    width: 290,
    height: 100,
    marginBottom: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 20,
  },
  infoContainer: {
    width: '90%',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#00796b',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IngresoCITT;
