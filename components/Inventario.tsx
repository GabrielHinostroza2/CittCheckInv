import React, { useState } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

// Definir el tipo Product
type Product = {
  id: string;
  name: string;
  description: string;
  stock: number;
};

// Datos iniciales de productos
const initialProducts: Product[] = [
  { id: '1', name: 'Proyector', description: 'Proyector Epson X200', stock: 10 },
  { id: '2', name: 'Laptop', description: 'HP Pavilion i5 8GB RAM', stock: 5 },
  { id: '3', name: 'Micrófono', description: 'Micrófono USB Samson', stock: 8 },
];

const Inventario = () => {
  // Estado con tipificación de los productos y el producto seleccionado
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState('');

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleUseProduct = () => {
    if (selectedProduct && quantity) {
      const updatedProducts = products.map((product) =>
        product.id === selectedProduct.id && product.stock >= parseInt(quantity)
          ? { ...product, stock: product.stock - parseInt(quantity) }
          : product
      );
      setProducts(updatedProducts);
      setQuantity('');
      setSelectedProduct(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inventario del CITT</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <TouchableOpacity style={styles.detailsButton} onPress={() => handleProductSelect(item)}>
              <Text style={styles.detailsButtonText}>Ver detalles</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      {selectedProduct && (
        <View style={styles.details}>
          <Text style={styles.productDetailHeader}>Detalles del producto:</Text>
          <Text>{selectedProduct.description}</Text>
          <Text>Stock disponible: {selectedProduct.stock}</Text>
          <TextInput
            placeholder="Cantidad a usar"
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
            style={styles.input}
          />
          <TouchableOpacity style={styles.useProductButton} onPress={handleUseProduct}>
            <Text style={styles.useProductButtonText}>Usar producto</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e0f7fa', // Fondo similar al que usaste en IngresoCITT
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#00796b', // Color principal usado para el header
    textAlign: 'center',
  },
  productItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productName: {
    fontSize: 18,
  },
  detailsButton: {
    backgroundColor: '#00796b', // Mismo color para el botón de "Ver detalles"
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  detailsButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  details: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productDetailHeader: {
    fontSize: 20,
    marginBottom: 10,
    color: '#00796b',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  useProductButton: {
    backgroundColor: '#d32f2f', // Color diferente para el botón "Usar producto"
    padding: 12,
    borderRadius: 5,
  },
  useProductButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Inventario;
