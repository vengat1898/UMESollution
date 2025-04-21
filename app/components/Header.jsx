import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import logoimg from "../../assets/images/ume_logo.jpg";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={logoimg} style={styles.logo} resizeMode="contain" />

      <View style={styles.rightIcons}>
      
        <TouchableOpacity style={styles.iconWrapper}>
          <Ionicons name="notifications-outline" size={24} color="#009C9B" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconMargin}>
          <Ionicons name="search" size={24} color="#009C9B" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.avatar}>
          <Ionicons name="person" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    borderBottomLeftRadius: 20,  
    borderBottomRightRadius: 20, 
  },

  logo: {
        width: 100,
        height: 50, 
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    position: "relative",
    padding: 5,
    
  },
  badge: {
    position: "absolute",
    top: 2,
    right: 2,
    backgroundColor: "red",
    minWidth: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 3,
    borderRadius:50
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  iconMargin: {
    marginLeft: 15,
  },
  avatar: {
    marginLeft: 15,
    width: 25,
    height: 25,
    borderRadius:50,
    backgroundColor: "#6200EE",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009C9B",
  },
});




