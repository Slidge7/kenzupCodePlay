import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';




const Home = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const isDarkMode = useSelector(state => state.uiManager.isDarkMode);
    const toggleDarkMode = () => {
      dispatch({ type: 'TOGGLE_DARK_MODE' }); 
    };
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
      <TouchableOpacity
        onPress={() => navigation.navigate('PlaceDetail')}
        style={styles.btn}>
        <Text style={{color: 'white'}}>Place Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => toggleDarkMode()}
        style={{...styles.btn, ...{backgroundColor:isDarkMode? '#001645' : '#caf0f8'}}}>
        <Text style={{color:isDarkMode ? 'white' : 'black'}}>{isDarkMode ? 'Dark Mode' : 'Light Mode'} On</Text>
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
