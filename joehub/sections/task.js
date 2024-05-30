import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const TaskSection = () => {
  const tasks = [
    {
      id: 1,
      title: "Grocery Shopping",
      time: "30 min",
      status: "Pending"
    },
    {
      id: 2,
      title: "Laundry",
      time: "1 hour",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Clean the Kitchen",
      time: "45 min",
      status: "Pending"
    },
    {
      id: 4,
      title: "Pay Bills",
      time: "20 min",
      status: "Pending"
    },
    {
      id: 5,
      title: "Walk the Dog",
      time: "1 hour",
      status: "In Progress"
    },
    {
      id: 6,
      title: "Organize Closet",
      time: "2 hours",
      status: "Pending"
    },
    {
      id: 7,
      title: "Prepare Dinner",
      time: "1 hour",
      status: "In Progress"
    },
    {
      id: 8,
      title: "Vacuum the House",
      time: "30 min",
      status: "Pending"
    },
    {
      id: 9,
      title: "Mow the Lawn",
      time: "1 hour",
      status: "In Progress"
    },
    {
      id: 10,
      title: "Clean the Bathroom",
      time: "45 min",
      status: "Pending"
    },
    {
      id: 11,
      title: "Do the Dishes",
      time: "30 min",
      status: "In Progress"
    },
    {
      id: 12,
      title: "Take out the Trash",
      time: "15 min",
      status: "Pending"
    },
    {
      id: 13,
      title: "Wash the Car",
      time: "1 hour",
      status: "In Progress"
    },
    {
      id: 14,
      title: "Organize the Home Office",
      time: "2 hours",
      status: "Pending"
    },
    {
      id: 15,
      title: "Meal Prep for the Week",
      time: "1.5 hours",
      status: "In Progress"
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <ScrollView style={styles.listContainer}>
        {tasks.map((item) => (
          <TouchableOpacity key={item.id} style={styles.taskCard}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text style={styles.taskTime}>{item.time}</Text>
            <Text style={[styles.taskStatus, item.status === "Pending" ? styles.pending : styles.inProgress]}>
              {item.status}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 16,
  },
  listContainer: {
    paddingVertical: 12,
  },
  taskCard: {
    backgroundColor: "#67595E",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 20,
    marginVertical: 8,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  taskTime: {
    fontSize: 14,
    color: "#fefefe",
    marginBottom: 8,
  },
  taskStatus: {
    fontSize: 14,
    fontWeight: "bold",
  },
  pending: {
    color: "#f44336", // Red for "Pending" status
  },
  inProgress: {
    color: "#4caf50", // Green for "In Progress" status
  },
});

export default TaskSection;