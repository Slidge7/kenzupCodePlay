import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';



const Home = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Home</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details')}
        style={styles.btn}>
        <Text style={{color: 'white'}}>Go Page 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('TravelHome')}
        style={styles.btn}>
        <Text style={{color: 'white'}}>Go Page 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Tests1')}
        style={styles.btn}>
        <Text style={{color: 'white'}}>Go Test</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('MyTabs')}
        style={styles.btn}>
        <Text style={{color: 'white'}}>Tabs</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  Text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 15,
    fontFamily: 'san-serif',
    backgroundColor: 'green',
    borderRadius: 10,
    margin: 15,
    color: 'white',
  },
});
