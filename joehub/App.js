import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import HeroSection from './sections/heroSection';
import CartSection from './sections/cartegories';
import SearchSection from './sections/serach';
import TaskSection from './sections/task';

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
     <HeroSection/>
     <SearchSection/>
     <CartSection/>
     <TaskSection/>

      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  SafeAreaView:{
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
