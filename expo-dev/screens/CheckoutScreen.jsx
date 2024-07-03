

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');
const imageWidth = width / 3; // Adjusting the image width to fit well in the cart view

const CheckOutScreen = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem('cart');
      if (storedCart) {
        const cartItems = JSON.parse(storedCart);
        setCart(cartItems);
        calculateTotal(cartItems);
      }
    };
    loadCart();
  }, []);

  const removeFromCart = async (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const calculateTotal = (cartItems) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  return (
    <View style={styles.container}>
   
      
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              <TouchableOpacity style={styles.removeplusIcon} onPress={() => removeFromCart(item.id)}>
                <Text style={styles.removeplusIconText}>Remove from Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmount}>${totalPrice.toFixed(2)}</Text>
      </View>

      
      <View style={styles.checkoutSection}>
        <Text style={styles.checkoutText}>CHECKOUT</Text>
        <Image source={require('../assets/shoppingBag.png')} style={styles.shoppingBag} />
      </View>
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
  removeplusIcon: { backgroundColor: '#ff0000', padding: 10, borderRadius: 5 },
  removeplusIconText: { color: '#fff', fontWeight: 'bold' },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  totalText: { fontSize: 20, fontWeight: 'bold' },
  totalAmount: { fontSize: 20, color: 'red' },

  // New styles for checkout section
  checkoutSection: {
    backgroundColor: '#000',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 10,
  },
  shoppingBag: { width: 30, height: 30 },
});

export default CheckOutScreen;