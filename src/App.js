import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import DetailsScreen from './screens/ItemDeatils';
import TravelHome from './screens/travel/TravelHome';
import Tests1 from '../dumpfiles/Tests';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { lightMode } from './constants/appColors';

const colors = lightMode;




const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar
      animated={true}
      backgroundColor={colors.lightBlue}
      barStyle='default'
    />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen options={{
          headerShown:false
        }} name="Details" component={DetailsScreen} />
        <Stack.Screen options={{
          headerShown:false
        }} name="TravelHome" component={TravelHome} />
        <Stack.Screen options={{
          headerShown:false
        }} name="Tests1" component={Tests1} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
