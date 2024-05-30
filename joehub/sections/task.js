import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TaskSection = () => {
    return(
        <View>
            <Text style={styles.title}>Task</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        fontWeight: 'bold',
    }
})

export default TaskSection;