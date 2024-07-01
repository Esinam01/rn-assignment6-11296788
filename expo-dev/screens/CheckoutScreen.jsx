import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');
const imageWidth = width / 3; // Adjusting the image width to fit well in the cart view

const CheckoutScreen = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    };
    loadCart();
  }, []);

  const removeFromCart = async (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.id)}>
                <Text style={styles.removeButtonText}>Remove from Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
  product: { flexDirection: 'row', marginBottom: 16, padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8 },
  image: { width: imageWidth, height: imageWidth * 1.5, marginBottom: 8, borderRadius: 8 },
  productDetails: { marginLeft: 16, justifyContent: 'center', flex: 1 },
  productName: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  productPrice: { fontSize: 16, color: 'red', marginBottom: 8 },
  removeButton: { backgroundColor: '#ff0000', padding: 10, borderRadius: 5 },
  removeButtonText: { color: '#fff', fontWeight: 'bold' },
});

export default CheckoutScreen;