import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Alert, Image,ScrollView } from 'react-native';
import track_request from "../../assets/images/track_request.png";
import add_supplier from "../../assets/images/add_suplier.png";
import add_bankdetails from "../../assets/images/add_bankdetails.png";
import add_member from "../../assets/images/add_member.png";
import add_project from "../../assets/images/add_project.png";
import add_payment_instruction from "../../assets/images/bank_payment_instruction.png";
import console_management from "../../assets/images/console_management.png";
import daily_report from "../../assets/images/daily_report.png";
import live_chat from "../../assets/images/live-chat.png";
import project_report from "../../assets/images/project_report.png";

export default class Home extends Component {
  handleStatusPress = (status) => {
    Alert.alert('Status Clicked', `You clicked on "${status}"`);
  };

  render() {
    return (
      <ScrollView style={styles.container}>

        {/* Chat with Krish */}
        <View style={styles.row}>
          <TouchableOpacity style={[styles.buttonBox, styles.marginRight]}>
            <Text style={styles.mainText}>Chat with Krish</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonBox}>
            <Text style={styles.secondaryTitle}>Try Krish</Text>
            <Text style={styles.subText}>Powered by U Me Solution</Text>
          </TouchableOpacity>
        </View>

        {/* Section Title */}
        <Text style={styles.sectionTitle}>Status Update (Invoice)</Text>

        {/* Status Update Boxes */}
        <View style={styles.statusContainer}>
          <TouchableOpacity style={styles.statusBox} onPress={() => this.handleStatusPress('Pending')}>
            <Text style={styles.statusNumber}>13</Text>
            <Text style={styles.statusLabel}>Pending</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statusBox} onPress={() => this.handleStatusPress('Approved')}>
            <Text style={styles.statusNumber}>40</Text>
            <Text style={styles.statusLabel}>Approved</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statusBox} onPress={() => this.handleStatusPress('Rejected')}>
            <Text style={styles.statusNumber}>120</Text>
            <Text style={styles.statusLabel}>Rejected</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statusBox} onPress={() => this.handleStatusPress('On Hold')}>
            <Text style={styles.statusNumber}>05</Text>
            <Text style={styles.statusLabel}>On Hold</Text>
          </TouchableOpacity>
        </View>
            
        <Text style={styles.sectionTitle}>Quick Access</Text>
        <View style={styles.quickAccessWrapper}>
<View style={styles.quickAccessContainer}>
  {[
    { label: 'Track Request', icon: track_request },
    { label: 'Daily Report', icon: daily_report },
    { label: 'Add Member', icon: add_member },
    { label: 'Add Supplier', icon: add_supplier },
    { label: 'Project Report', icon: project_report },
    { label: 'Add Bank\nDetails', icon: add_bankdetails },
    { label: 'Update Member/\nSupplier Details', icon: add_member },
    { label: 'Console\nManagement', icon: console_management },
    { label: 'Bank Payment\nInstructions', icon: add_payment_instruction },
    { label: 'Add Project', icon: add_project },
    { label: 'Live Chat', icon: live_chat },
    { label: 'Daily Log', icon: daily_report },
  ].map((item, index) => (
    <TouchableOpacity style={styles.quickItem} key={index}>
      <View style={styles.iconWrapper}>
        <Image source={item.icon} style={styles.quickIcon} />
      </View>
      <Text style={styles.quickLabel}>{item.label}</Text>
    </TouchableOpacity>
  ))}
</View>
</View>



      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  buttonBox: {
    flex: 1, 
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'left',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  marginRight: {
    marginRight: 10, 
  },
  mainText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  secondaryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  subText: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
    textAlign: 'left',
    
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


  quickAccessWrapper: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginTop: 10,
    marginBottom: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height:330,
  },
  



  quickAccessContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  
  quickItem: {
    width: '25%',
    height:'25%', 
    backgroundColor: '',
    // borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 8,
    elevation: 2,
  },
  
  
  iconWrapper: {
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    padding: 10,
    marginBottom: 8,
  },
  
  quickIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  
  quickLabel: {
    fontSize: 7,
    textAlign: 'center',
    color: '#333',
  },
  
});




