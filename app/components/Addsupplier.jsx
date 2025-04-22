import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import QuickAccessHeader from './QuickAccessHeader';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Addsupplier({ route, navigation }) {
  const { title } = route.params;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [viewaddress, setViewaddress] = useState('');
  const [companyname, setCompanyname] = useState('');
  const [address, setAddress] = useState('');
  const [designation, setDesignation] = useState('');
  const [group, setGroup] = useState('');
  const [family, setFamily] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [aadhaarChecked, setAadhaarChecked] = useState(false);
  const [pan, setpan] = useState('');
  const [pancheck, setpanChecked] = useState(false);
  const [gst, setgst] = useState('');
  const [gstcheck, gstpanChecked] = useState(false);
  const [holdername, setholdername] = useState('');
  const [bankname, setbankname] = useState('');
  const [otherbankname, setotherbankname] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [ifscCode, setIfscCode] = useState('');  // IFSC code state
  const [upimobileNumber, setupiMobileNumber] = useState('');

  const toggleCheckbox = (option) => {
    setSelectedOptions(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  useEffect(() => {
    navigation.setOptions({
      header: () => <QuickAccessHeader navigation={navigation} title={title} />,
    });
  }, [navigation, title]);

  const handleImageUpload = () => {
    // Handle image upload logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* First Name and Last Name */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        {/* Profile Upload */}
        <View style={styles.profileRow}>
          <View style={styles.profileIconContainer}>
            <TouchableOpacity style={styles.profileIcon}>
              <Icon name="user" size={24} color="#555" />
            </TouchableOpacity>
          </View>
          <View style={styles.uploadContainer}>
            <TextInput style={styles.uploadInput} placeholder="Upload image" />
            <TouchableOpacity style={styles.uploadIcon} onPress={handleImageUpload}>
              <Icon name="cloud-upload" size={24} color="#555" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Mobile Number */}
        <View style={styles.mobileInputContainer}>
          <TextInput
            style={[styles.input, { width: '100%' }]}
            placeholder="+91- enter Mobile Number"
            keyboardType="phone-pad"
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />
        </View>

        {/* Communication Preferences */}
        <View style={styles.checkboxRow}>
          {['SMS', 'WhatsApp', 'Email', 'UPI'].map((label, index) => (
            <TouchableOpacity
              key={index}
              style={styles.checkboxContainer}
              onPress={() => toggleCheckbox(label)}
            >
              <Icon
                name={selectedOptions.includes(label) ? 'check-square' : 'square-o'}
                size={24}
                color={selectedOptions.includes(label) ? '#009C9B' : '#ccc'}
              />
              <Text style={styles.checkboxLabel}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* View Address and Company Name */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="View Address"
            value={viewaddress}
            onChangeText={setViewaddress}
          />
          <TextInput
            style={styles.input}
            placeholder="Company Name"
            value={companyname}
            onChangeText={setCompanyname}
          />
        </View>

        {/* Register Number Upload */}
        <View style={styles.registerContainer}>
          <TextInput
            style={styles.registerInput}
            placeholder="Company Register Number"
          />
          <TouchableOpacity style={styles.uploadIcon}>
            <Icon name="cloud-upload" size={24} color="#555" />
          </TouchableOpacity>
        </View>

        {/* Address */}
        <View style={styles.mobileInputContainer}>
          <TextInput
            style={[styles.input, { width: '100%' }]}
            placeholder="Enter Address"
            value={address}
            onChangeText={setAddress}
          />
        </View>

        {/* Designation Dropdown */}
        <View style={styles.dropdownContainer}>
          <TouchableOpacity style={styles.dropdownInput}>
            <Text style={designation ? styles.dropdownText : styles.dropdownPlaceholder}>
              {designation || 'Select Designation'}
            </Text>
            <Icon name="angle-down" size={20} color="#555" />
          </TouchableOpacity>
        </View>

        {/* Group & Family Dropdowns */}
        <View style={styles.rowDropdowns}>
          <TouchableOpacity style={styles.dropdownInputSmall}>
            <Text style={group ? styles.dropdownText : styles.dropdownPlaceholder}>
              {group || 'Select Group'}
            </Text>
            <Icon name="angle-down" size={20} color="#555" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.dropdownInputSmall}>
            <Text style={family ? styles.dropdownText : styles.dropdownPlaceholder}>
              {family || 'Select Family'}
            </Text>
            <Icon name="angle-down" size={20} color="#555" />
          </TouchableOpacity>
        </View>

        {/* Aadhaar */}
        <View style={styles.aadhaarRow}>
     <TextInput
    style={styles.aadhaarInput}
    placeholder="Enter Aadhaar Number"
    keyboardType="key-pad"
    maxLength={12}
    value={aadhaar}
    onChangeText={setAadhaar}
  />
  
  <TouchableOpacity style={styles.uploadIconContainer} onPress={() => { /* handle Aadhaar image upload */ }}>
    <Icon name="cloud-upload" size={20} color="#555" />
  </TouchableOpacity>

  <TouchableOpacity style={styles.checkboxIconContainer} onPress={() => setAadhaarChecked(prev => !prev)}>
    <Icon
      name={aadhaarChecked ? 'check-square' : 'square-o'}
      size={20}
      color={aadhaarChecked ? '#009C9B' : '#ccc'}
    />
  </TouchableOpacity>
</View>

<View style={styles.aadhaarRow}>
     <TextInput
    style={styles.aadhaarInput}
    placeholder="Enter Pan Number"
    keyboardType="keypad"
    maxLength={12}
    value={pan}
    onChangeText={setpan}
  />
  
  <TouchableOpacity style={styles.uploadIconContainer} onPress={() => { /* handle Aadhaar image upload */ }}>
    <Icon name="cloud-upload" size={20} color="#555" />
  </TouchableOpacity>

  <TouchableOpacity style={styles.checkboxIconContainer} onPress={() => setpanChecked(prev => !prev)}>
    <Icon
      name={pancheck ? 'check-square' : 'square-o'}
      size={20}
      color={pancheck ? '#009C9B' : '#ccc'}
    />
  </TouchableOpacity>
</View>


<View style={styles.aadhaarRow}>
     <TextInput
    style={styles.aadhaarInput}
    placeholder="Enter gst Number"
    keyboardType="keypad"
    maxLength={12}
    value={gst}
    onChangeText={setgst}
  />
  
  <TouchableOpacity style={styles.uploadIconContainer} onPress={() => { /* handle Aadhaar image upload */ }}>
    <Icon name="cloud-upload" size={20} color="#555" />
  </TouchableOpacity>

  <TouchableOpacity style={styles.checkboxIconContainer} onPress={() => gstpanChecked(prev => !prev)}>
    <Icon
      name={gstcheck ? 'check-square' : 'square-o'}
      size={20}
      color={gstcheck ? '#009C9B' : '#ccc'}
    />
  </TouchableOpacity>
</View>


<View style={styles.rowDropdowns}>
          <TouchableOpacity style={styles.dropdownInputSmall}>
            <Text style={holdername ? styles.dropdownText : styles.dropdownPlaceholder}>
              {holdername || 'holder name'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dropdownInputSmall}>
            <Text style={bankname ? styles.dropdownText : styles.dropdownPlaceholder}>
              {bankname || 'bank name'}
            </Text>
            <Icon name="angle-down" size={20} color="#555" />
          </TouchableOpacity>
        </View>


        {/* New Bank Account Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: '100%' }]}  e
            placeholder="other bank name"
            keyboardType="numeric"
            value={otherbankname}
            onChangeText={setotherbankname}
          />
        </View>


        <View style={styles.rowDropdowns}>
          <TouchableOpacity style={styles.dropdownInputSmall}>
          <TextInput
              style={styles.inputTextSmall}
              onChangeText={setBankAccount} 
              placeholder="account number"
               placeholderTextColor="#ccc"
              />
          </TouchableOpacity>

          <TouchableOpacity style={styles.dropdownInputSmall}>
          <TextInput
              style={styles.inputTextSmall}
              value={family}
              onChangeText={setIfscCode} 
              placeholder="IFSC CODE"
              placeholderTextColor="#ccc"
  />
          </TouchableOpacity>
        </View>



        <View style={styles.rowDropdowns}>
          <TouchableOpacity style={styles.dropdownInputSmall}>
          <TextInput
              style={styles.inputTextSmall}
              onChangeText={setBankAccount} 
              placeholder="swift code"
               placeholderTextColor="#ccc"
              />
          </TouchableOpacity>

          <TouchableOpacity style={styles.dropdownInputSmall}>
          <TextInput
              style={styles.inputTextSmall}
              value={family}
              onChangeText={setIfscCode}  
              placeholder="Iban no"
              placeholderTextColor="#ccc"
  />
          </TouchableOpacity>
        </View>


        <View style={styles.mobileInputContainer}>
          <TextInput
            style={[styles.input, { width: '100%' }]}
            placeholder="Upi payment number"
            keyboardType="phone-pad"
            value={upimobileNumber}
            onChangeText={setupiMobileNumber}
          />
        </View>


        <TouchableOpacity
  style={styles.addButton}
  onPress={() => {
    // Handle member submission here
    console.log("Member added");
  }}
>
  <Text style={styles.addButtonText}>Add supplier</Text>
</TouchableOpacity>



    

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 5,
    backgroundColor:"#fff"
  },
  container: {
    flex: 1,
    padding: 16,
    paddingHorizontal: 20,
    
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '48%',
    borderRadius: 5,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    width: '100%',
  },
  profileIconContainer: {
    marginRight: 16,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  uploadContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  uploadInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
  },
  uploadIcon: {
    padding: 6,
  },
  mobileInputContainer: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  checkboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  checkboxLabel: {
    marginLeft: 5,
    fontSize: 16,
    color: '#333',
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  registerInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
  },
  dropdownContainer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  dropdownInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownPlaceholder: {
    fontSize: 16,
    color: '#aaa',
  },
  rowDropdowns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  dropdownInputSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    width: '49%',
  },
  aadhaarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 10,
    justifyContent: 'space-between', // Ensure space between elements
  },
  
  aadhaarInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 18,  // Increased height for input
    marginRight: 5,      // Increased space between input and upload icon
  },
  
  uploadIcon: {
    padding: 6,
    marginRight: 20,     // Space between the upload icon and checkbox
  },
  
  checkboxIcon: {
    padding: 6,
  },

  uploadIconContainer: {
    width: 40,      
    height: 40,     
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 4, 
    alignItems: 'center',  
    justifyContent: 'center',  
    marginRight: 20,   // Space between the icon and checkbox
  },
  
  checkboxIconContainer: {
    width: 40,     
    height: 40,     
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 4,
    alignItems: 'center',  
    justifyContent: 'center',  
  },

  addButton: {
    backgroundColor: '#009C9B',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 50,
    marginHorizontal: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  
  
  
});
