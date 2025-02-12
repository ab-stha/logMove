import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import React from 'react';


export default function HomeScreen() {

  const router = useRouter();
  const navigateToNewLogScreen = () => {
    router.push('/(tabs)/new-log');
  };

  const navigateToViewLogsScreen = () => {
    router.push('/(tabs)/view-logs');
  };

  const navigateToSettings = () => {
    router.push('/(tabs)/settings');
  }
  
  return (
    <View style = {styles.container}>

      <View style = {styles.titleContainer}>
        <Text style = {styles.titleText}>Log{'\n' }Move</Text>
        <View style = {styles.logoContainer}>
          <Image>
            {/* image in progress */}
          </Image>
        </View>
      </View>

      <View style = {{flexDirection: 'row', padding: 0, margin: 0}}>
        <View>
          <View style = {styles.dateContainer}>
            <Text style = {{color: 'black', fontSize: 24, fontWeight: 900}}>
              Monday
            </Text>
            <Text style = {{color: 'black', fontSize: 17, fontWeight: 600, marginTop: 9}}>
              10/02/25
            </Text>
          </View>
          <View style = {styles.calendarContainer}>
              {/* calendar in progress */}
          </View>
        </View>

        <TouchableOpacity style = {styles.aiButton}>
          {/* AI button in progress */}
          <Text style = {{fontSize: 22, color: '#f5f5f5', textAlign: 'center'}}>Ask{'\n'}LogMove{'\n'}AI</Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.navButtonsContainer}>
        <TouchableOpacity style = {styles.navButton} onPress = {navigateToNewLogScreen}>
            <Text style = {{color: '#f5f5f5', fontSize: 26}}>
              New log
            </Text>
            <Text style = {{color: '#f8e4cd', fontSize: 17}}>
              Log a new workout
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.navButton} onPress = {navigateToViewLogsScreen}>
            <Text style = {{color: '#f5f5f5', fontSize: 26}}>
              View logs
            </Text>
            <Text style = {{color: '#f8e4cd', fontSize: 17}}>
              View your past workouts
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.navButton} onPress = {navigateToSettings}>
            <Text style = {{color: '#f5f5f5', fontSize: 26}}>
              Settings
            </Text>
            <Text style = {{color: '#f8e4cd', fontSize: 17}}>
              Change your settings
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f1cb8d',
    marginBottom: 40,
    padding: 15,
    borderRadius: 80,
    borderWidth: 7,
    borderColor: 'black',
  },
  titleText: {
    fontSize: 58,
    fontWeight: 500,
    color: '#f5f5f5',
    marginRight: 10,

  },
  logoContainer: {
    height: '60%',
    width: 67,
    backgroundColor: 'red',
  },

  dateContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 10,
    // backgroundColor: 'blue',

  },
  calendarContainer: {
    backgroundColor: '#f5f5f5',
    width: '83%',
    height: 90,
    alignSelf: 'flex-start',
    borderRadius: 40,
    borderWidth: 4,
  },

  aiButton: {
    backgroundColor: 'grey',
    width: '35%',
    height: 'auto',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
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

});
