import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function Settings() {
  return (
    <View style={styles.container}>
        
      {/* Header */}
      <View style = {styles.headerContainer}>
        <View style={styles.title}>
            <Text style={styles.titleText}>Settings</Text>
        </View>
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

});