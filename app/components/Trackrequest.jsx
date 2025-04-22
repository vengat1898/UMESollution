import { Text, StyleSheet, View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import React from 'react';
import Footer from './Footer';

export default function Trackrequest() {

  const handleStatusPress = (status) => {
    Alert.alert('Status Clicked', `You clicked on "${status}"`);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>Status Update (Invoice)</Text>

        <View style={styles.statusContainer}>
          <TouchableOpacity style={styles.statusBox} onPress={() => handleStatusPress('Pending')}>
            <Text style={styles.statusNumber}>13</Text>
            <Text style={styles.statusLabel}>Pending</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statusBox} onPress={() => handleStatusPress('Approved')}>
            <Text style={styles.statusNumber}>40</Text>
            <Text style={styles.statusLabel}>Approved</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statusBox} onPress={() => handleStatusPress('Rejected')}>
            <Text style={styles.statusNumber}>120</Text>
            <Text style={styles.statusLabel}>Rejected</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statusBox} onPress={() => handleStatusPress('On Hold')}>
            <Text style={styles.statusNumber}>05</Text>
            <Text style={styles.statusLabel}>On Hold</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle1}>Status Update ( Member / Supplier ) Request</Text>

        <View style={styles.statusContainer1}>
          <TouchableOpacity style={styles.statusBox1} onPress={() => handleStatusPress('Pending')}>
            <Text style={styles.statusNumber1}>5</Text>
            <Text style={styles.statusLabel1}>Pending</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statusBox1} onPress={() => handleStatusPress('Approved')}>
            <Text style={styles.statusNumber1}>30</Text>
            <Text style={styles.statusLabel1}>Approved</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statusBox1} onPress={() => handleStatusPress('Rejected')}>
            <Text style={styles.statusNumber1}>20</Text>
            <Text style={styles.statusLabel1}>Rejected</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statusBox1} onPress={() => handleStatusPress('On Hold')}>
            <Text style={styles.statusNumber1}>35</Text>
            <Text style={styles.statusLabel1}>On Hold</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 80, // give some space above the footer
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    color: '#333',
  },
  statusContainer: {
    backgroundColor: '#009C9B',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 3,
  },
  statusBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },
  statusNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#009C9B',
  },
  statusLabel: {
    fontSize: 12,
    color: '#009C9B',
    marginTop: 4,
  },
  sectionTitle1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    color: '#333',
  },
  statusContainer1: {
    backgroundColor: '#009C9B',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 3,
  },
  statusBox1: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },
  statusNumber1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#009C9B',
  },
  statusLabel1: {
    fontSize: 12,
    color: '#009C9B',
    marginTop: 4,
  },
});


