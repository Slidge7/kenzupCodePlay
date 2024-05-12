import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {lightMode} from '../../constants/appColors';
import Icon from 'react-native-vector-icons/FontAwesome6';

const colors = lightMode;

const userName = 'David';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.userName}>Hi, {props.userName} 👋</Text>
        </View>
        <Text style={styles.slogan}>Explore the world</Text>
      </View>
      <Image
        source={props.userPic}
        style={styles.profilePic}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  userName: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  slogan: {
    fontSize: 20,
    fontWeight: 'medium',
  },
  profilePic: {
    width: 75,
    height: 75,
    borderRadius: 50,
  }
});
