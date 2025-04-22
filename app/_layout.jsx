import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer"
import Addmember from './components/Addmember';
import Addsupplier from './components/Addsupplier';
import Trackrequest from './components/Trackrequest';
import QuickAccessHeader from './components/QuickAccessHeader';



const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="home" 
        component={HomeScreen} 
        options={{ headerShown: false }}  
      />
      <Stack.Screen
          name="Addmember"
          component={Addmember}
          options={{ title: 'Add Member' }}
          
        />
        <Stack.Screen
          name="Addsupplier"
          component={Addsupplier}
          options={{ title: 'Add supplier' }}
          
        />
        <Stack.Screen
          name="Trackrequest"
          component={Trackrequest}
         options={({ navigation }) => ({
           header: () => <QuickAccessHeader navigation={navigation} title="Track Request" />
        })}
/>
    </Stack.Navigator>
  );
}


function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.contentWrapper}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Home navigation={navigation} />
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
    paddingBottom: 100, 
  },
});



