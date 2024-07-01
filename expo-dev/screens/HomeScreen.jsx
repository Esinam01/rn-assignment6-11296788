
/*
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OpenFashionUI from '../screens/OpenFashionUi';

const products = [
  { id: '1', name: 'Office Wear', description:'Reversible angora cardigan' ,price: 120, image: require('../assets/dress1.png') },
  { id: '2', name: 'Black', description:'Reversible angora cardigan', price: 120, image: require('../assets/dress2.png') },
  { id: '3', name: 'Church Wear', description:'Reversible angora cardigan', price: 120, image: require('../assets/dress3.png') },
  { id: '4', name: 'Lamerei', description:'Reversible angora cardigan', price: 120, image: require('../assets/dress4.png') },
  { id: '5', name: '21VN', description:'Reversible angora cardigan', price: 120, image: require('../assets/dress5.png') },
  { id: '6', name: 'Lopo', description:'Reversible angora cardigan', price: 120, image: require('../assets/dress6.png') },
  { id: '7', name: '21WN', description:'Reversible angora cardigan', price: 120, image: require('../assets/dress7.png') },
  { id: '8', name: 'lame',  description:'Reversible angora cardigan',price: 120, image: require('../assets/dress3.png') },
];


const plusIcon = require('../assets/add_circle.png');

const HomeScreen = () => {
  const [cart, setCart] = useState([]);

  const addToCart = async (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <View style={styles.container}>
      <OpenFashionUI />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.productList}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
              <Image source={plusIcon} style={styles.plusIcon} />
            </TouchableOpacity>
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  productList: { paddingBottom: 16 },
  row: { justifyContent: 'space-between', marginHorizontal: -8, marginBottom: 16 },
  product: {
    flex: 1,
    width: (Dimensions.get('window').width - 48) / 2,
    marginHorizontal: 8,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    position: 'relative', // Ensure the addButton is positioned relative to the product container
  },
  image: { width: '100%', height: 200, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  productDetails: { padding: 12 },
  productName: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  productDescription: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  productPrice: { fontSize: 16, color: 'red', marginBottom: 8 },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Ensure the addButton is transparent to not block the dress image
  },
  plusIcon: { width: 20, height: 20 }, // Size the plusIcon image
});

export default HomeScreen;*/

import React, { useState } from 'react';
import { View, Text, FlatList,  StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OpenFashionUI from '../screens/OpenFashionUi';

const products = [
  { id: '1', name: 'Office Wear', price: 120, description: 'Formal dress for office use', image: require('../assets/dress1.png') },
  { id: '2', name: 'Black', price: 120, description: 'Classic black dress', image: require('../assets/dress2.png') },
  { id: '3', name: 'Church Wear', price: 120, description: 'Elegant dress for church occasions', image: require('../assets/dress3.png') },
  { id: '4', name: 'Lamerei', price: 120, description: 'Stylish dress for special events', image: require('../assets/dress4.png') },
  { id: '5', name: '21VN', price: 120, description: 'Fashionable dress with a modern twist', image: require('../assets/dress5.png') },
  { id: '6', name: 'Lopo', price: 120, description: 'Casual everyday wear', image: require('../assets/dress6.png') },
];

const HomeScreen = () => {
  const [cart, setCart] = useState([]);

  const addToCart = async (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <View style={styles.container}>
      <OpenFashionUI />
      <View style={styles.contentContainer}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.productList}
          renderItem={({ item }) => (
            <View style={styles.product}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productDescription}>{item.description}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                  <Text style={styles.addButtonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  contentContainer: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
  productList: { paddingBottom: 16 },
  row: { justifyContent: 'space-between', marginHorizontal: -8, marginBottom: 16 },
  product: {
    flex: 1,
    width: (Dimensions.get('window').width - 48) / 2,
    marginHorizontal: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: { width: '100%', height: 200, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  productDetails: { padding: 12 },
  productName: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  productDescription: { fontSize: 14, color: '#888', marginBottom: 4 },
  productPrice: { fontSize: 16, color: 'red', marginBottom: 8 },
  addButton: { backgroundColor: '#000', padding: 10, borderRadius: 5 },
  addButtonText: { color: '#fff', fontWeight: 'bold' },
});

export default HomeScreen;