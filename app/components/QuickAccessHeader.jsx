import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function QuickAccessHeader({ navigation, title }) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backIcon}>←</Text> {/* Back arrow icon */}
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text> {/* Dynamic title */}
    </View>
  );
}

const styles = {
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    borderBottomLeftRadius: 20,  
    borderBottomRightRadius: 20,
  },

  backButton: {
    position: 'absolute', 
    left: 15,
    top: '30%',
    transform: [{ translateY: -12 }], 
  },

  backIcon: {
    fontSize: 40, 
    color: '#009C9B', 
  },  

  headerTitle: {
    color: '#009C9B',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', 
    flex: 1,
  },
};




