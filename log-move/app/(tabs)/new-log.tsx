import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { useState } from 'react';



export default function NewLogScreen() {

  // define the uri of the file stored in the local storage
  const filePath = FileSystem.documentDirectory + 'workouts.json';

  // let testLog = 'test log 3';
  const [inputValue, setInputValue] = useState('');

  const handleNewLog = async function () {
    setInputValue(inputValue);
    const newLog = await FileSystem.writeAsStringAsync(filePath, inputValue);
    const displayLog = await FileSystem.readAsStringAsync(filePath);
    console.log('Your new log is: ', displayLog);
  };

  return (
    <View style={styles.container}>
        
      {/* Header */}
      <View style = {styles.headerContainer}>
        <View style={styles.title}>
            <Text style={styles.titleText}>New log</Text>
        </View>
      </View>

      <View style = {styles.navButtonsContainer}>
        <TouchableOpacity style = {styles.navButton} onPress = {handleNewLog}>
          <TextInput style={styles.input} placeholder='Name your workout' onChangeText={setInputValue} value = {inputValue} />
          <Text style = {{color: '#f5f5f5', fontSize: 26}}>
            New log
          </Text>
          <Text style = {{color: '#f8e4cd', fontSize: 17}}>
            Log a new workout
          </Text>
        </TouchableOpacity>

      </View>
      

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfc6e7',
    alignItems: 'center',
    padding: 12,
    paddingTop: 25,
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: 'black',
    width: '100%',
    padding: 20,
  },
  title: {
    alignItems: 'center', 
    backgroundColor: '#f1cb8d',
    borderRadius: 30,
    width: '50%'
  },
  titleText: {
    fontWeight: 500,
    color: '#f5f5f5',
    fontSize: 30
  },
  navButtonsContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  navButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    borderWidth: 1,
    padding: 8,
    borderRadius: 17,
    width: 200,
    textAlign: 'center',
    marginBottom: 14
  }
});