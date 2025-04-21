import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer"


const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="home" 
        component={HomeScreen} 
        options={{ headerShown: false }}  
      />
    </Stack.Navigator>
  );
}


function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.contentWrapper}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Home />
        </ScrollView>
       
      </View>
      <Footer />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
    
  },
  content: {
    flex: 1, 
  },
  scrollContent: {
    paddingBottom: 200, 
  },
});



