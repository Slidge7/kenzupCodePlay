import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {lightMode} from '../constants/appColors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const colors = lightMode;
const gradientColors = [colors.lightBlue, colors.darkBlue];

const ItemDeatils = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timeout = setTimeout(() => navigation.navigate('TravelHome'), 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <LinearGradient colors={gradientColors} style={styles.linearGradient}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Travel</Text>
          <Icon name="globe-africa" size={44} color={colors.whiteTxt} solid />
        </View>
        <Text style={styles.text}>Find Your Dream Destination With Us</Text>
      </View>
    </LinearGradient>
  );
};

export default ItemDeatils;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 15,
    width: '60%',
  },
  logo: {
    color: colors.whiteTxt,
    fontSize: 44,
    fontFamily: 'LobsterRegular',
    marginRight: 10,
  },
  logoContainer: {
    color: colors.whiteTxt,
    fontSize: 44,
    fontFamily: 'LobsterRegular',
    marginBottom: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.halfWhiteTxt,
    fontSize: 20,
    fontFamily: 'RobotoMedium',
    textAlign: 'center',
  },
});
