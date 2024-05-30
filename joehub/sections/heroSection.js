import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const HeroSection = () => {
    return(
        <View style={styles.HeroSection}>
            <View>
                <Text style={styles.heroText}>Hello, JOENICK</Text>
                <Text>15 Tasks Today</Text>
            </View>
            <View styles={styles.userIconContainer}>
                <Image
                    style={styles.userIcon}
                    source={require('../pixelhub/userIcon.jpeg')}
                />
            </View>
           
        </View>
    );
};
const styles = StyleSheet.create({
    HeroSection:{
        flex : 0,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    heroText:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    userIconContainer:{
        marginTop: 20,
    },
    userIcon:{
        width:100,
        height: 100,
        borderRadius: 20,
    }
})

export default HeroSection;