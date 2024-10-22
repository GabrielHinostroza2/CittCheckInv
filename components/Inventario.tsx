import React, { useState } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native';

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
            <Button title="Ver detalles" onPress={() => handleProductSelect(item)} />
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
          <Button title="Usar producto" onPress={handleUseProduct} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  productItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productName: {
    fontSize: 18,
  },
  details: {
    marginTop: 20,
  },
  productDetailHeader: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
  },
});

export default Inventario;
