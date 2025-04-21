import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import footer_home from '../../assets/images/footer_home.png';
import footer_category from '../../assets/images/footer_Category.png';
import footer_support from '../../assets/images/footer_support.png';
import footer_message from '../../assets/images/footer_message.png';
import footer_menu from '../../assets/images/footer_menu.png';

export default class Footer extends Component {
  handlePress = (label) => {
    alert(`You clicked on ${label}`);
  };

  render() {
    const footerItems = [
      { label: 'Home', icon: footer_home },
      { label: 'Category', icon: footer_category },
      { label: 'Support', icon: footer_support },
      { label: 'Message', icon: footer_message },
      { label: 'Menu', icon: footer_menu },
    ];

    return (
      <View style={styles.footerContainer}>
        {footerItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.footerItem}
            onPress={() => this.handlePress(item.label)}
          >
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    height: 60,
    elevation: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 10,
    marginTop: 4,
    color: '#333',
  },
});






