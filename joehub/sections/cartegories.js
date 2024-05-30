import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const CartSection = () => {
  const cartItems = [
    {
      title: "Baking",
      numTasks: 10,
      image: require("../pixelhub/cooking.jpeg"),
    },
    {
      title: "Cleaning",
      numTasks: 8,
      image: require("../pixelhub/cleaning.jpeg"),
    },
    {
      title: "Laundry",
      numTasks: 6,
      image: require("../pixelhub/laundry.jpeg"),
    },
    {
      title: "Grocery Shopping",
      numTasks: 12,
      image: require("../pixelhub/grocery.jpeg"),
    },
    {
      title: "Bill Payments",
      numTasks: 4,
      image: require("../pixelhub/bills.jpeg"),
    },
    {
      title: "Home Maintenance",
      numTasks: 7,
      image: require("../pixelhub/maintenance.jpeg"),
    },
    {
      title: "Pet Care",
      numTasks: 9,
      image: require("../pixelhub/pets.jpeg"),
    },
    {
      title: "Organization",
      numTasks: 11,
      image: require("../pixelhub/organization.jpeg"),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {cartItems.map((item, index) => (
          <View key={index} style={styles.cartCard}>
            <Text style={styles.cartTitle}>{item.title}</Text>
            <Text style={styles.cartTasks}>Tasks: {item.numTasks}</Text>
            <Image source={item.image} style={styles.cartImage} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
  scrollContainer: {
    paddingVertical: 12,
  },
  cartCard: {
    width: 180,
    marginHorizontal: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cartImage: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cartTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
    paddingHorizontal: 12,
  },
  cartTasks: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
    paddingHorizontal: 12,
  },
});

export default CartSection;