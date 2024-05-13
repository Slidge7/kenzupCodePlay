import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {lightMode} from '../../constants/appColors';
import LinearGradient from 'react-native-linear-gradient';

const colors = lightMode;

const selectedPlace = {
  id: '1',
  title: 'Mount Fuji',
  country: 'Japan',
  city: 'Tokyo',
  rate: '4.8',
  categoryId: 3,
  image:
    'https://i.pinimg.com/564x/01/a5/3f/01a53f19aa4ae86992b131eb5fe4ec8a.jpg',
    details:{
        price:230,
        hours:8,
        temp:16,
        descreption:'Traveling to Morocco is a feast for the senses. Imagine yourself wandering through the labyrinthine alleys of a Marrakech souk, colorful fabrics and handcrafted treasures stacked high around you. The air hums with conversation and the enticing aroma of spices like cumin and saffron. Later, you might find yourself sipping sweet mint tea on a rooftop terrace, gazing out at the snow-capped peaks of the Atlas Mountains in the distance. Morocco offers a captivating blend of vibrant culture, stunning landscapes, and the warmth of Moroccan hospitality, making it a trip you wont soon forget.'

    }
};

const Card = () => {
  const image = {uri: selectedPlace.image};
  const gradientColors = [colors.darkBlue, '#252573', colors.lightBlue];

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      imageStyle={styles.imgBackground}
      style={styles.container}>
      <View style={styles.topIcons}>
        <View style={styles.like}>
          <Icon2 name="chevron-left" size={22} color={colors.halfWhiteTxt} />
        </View>
        <View style={styles.like}>
          <Icon2 name="bookmark-o" size={22} color={colors.halfWhiteTxt} />
        </View>
      </View>
      <LinearGradient
        locations={[0.2, 0.5, 1]}
        start={{x: 0.1, y: 0}}
        end={{x: 0.05, y: 1}}
        colors={gradientColors}
        style={styles.card}>

        <View style={styles.row}>
          <Text style={styles.title}>{selectedPlace.title} </Text>
        </View>

        <View style={{...styles.row, ...{justifyContent: 'space-between'}}}>
            
          <View style={{...styles.row, ...{width: '75%'}}}>
            <View style={styles.icon}>
              <Icon name="location-dot" size={12} color={colors.halfWhiteTxt} />
            </View>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.txt}>
              {selectedPlace.city},{' '}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.txt}>
              {selectedPlace.country}
            </Text>
          </View>

          <View
            style={{
              ...styles.row,
              ...{width: '25%', justifyContent: 'flex-end'},
            }}>
            <View style={styles.icon}>
              <Icon name="star" size={12} color={colors.halfWhiteTxt} />
            </View>
            <Text style={styles.txt}>{selectedPlace.rate}</Text>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const PlaceDeatils = () => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <Card />
      </View>
      <Text>Place Details</Text>
      <Text>Price : {selectedPlace.details.price}</Text>
      <Text>Temp : {selectedPlace.details.temp}</Text>
      <Text>Time : {selectedPlace.details.hours}</Text>
      <Text>Place Descreption</Text>
      <Text>{selectedPlace.details.descreption}</Text>
    </View>
  );
};

export default PlaceDeatils;

const styles = StyleSheet.create({
  cardContainer: {
    width: '85%',
    height: 460,
    alignSelf: 'center',
    marginVertical: 20,
  },
  container: {
    height: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 30,
    overflow: 'hidden',
    shadowColor: 'black',
    elevation: 8,
  },
  card: {
    backgroundColor: 'gray',
    width: '80%',
    height: 75,
    borderRadius: 15,
    margin: 20,
    justifyContent: 'space-between',
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  like: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 50,
    width:45,
    height:45
  },
  topIcons:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    margin:20,
    paddingHorizontal:20
  },
  title: {
    fontSize: 16,
    fontWeight: 'medium',
    color: colors.whiteTxt,
  },
  txt: {
    fontSize: 14,
    color: colors.halfWhiteTxt,
    flexShrink: 1,
  },
  icon: {
    marginRight: 3,
  },
});
