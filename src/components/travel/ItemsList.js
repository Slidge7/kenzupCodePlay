import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {lightMode} from '../../constants/appColors';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const colors = lightMode;

const Item = ({item}) => {
  const image = {uri: item.image};
  const gradientColors = [colors.darkBlue, '#252573', colors.lightBlue];

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      imageStyle={styles.imgBackground}
      style={styles.container}>
      <View style={styles.like}>
        <Icon2 name="heart-o" size={22} color={colors.halfWhiteTxt} />
      </View>
      <LinearGradient
        locations={[0.2, 0.5, 1]}
        start={{x: 0.1, y: 0}}
        end={{x: 0.05, y: 1}}
        colors={gradientColors}
        style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.title}>{item.title}, </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.txt}>
            {item.city}
          </Text>
        </View>
        <View style={{...styles.row, ...{justifyContent: 'space-between'}}}>
          <View style={{...styles.row, ...{width: '75%'}}}>
            <View style={styles.icon}>
              <Icon name="location-dot" size={12} color={colors.halfWhiteTxt} />
            </View>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.txt}>
              {item.city},{' '}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.txt}>
              {item.country}
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
            <Text style={styles.txt}>{item.rate}</Text>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const ItemsList = () => {
  const placesList = useSelector(state => state.places.placesList);
  const filtredPlaces = useSelector(state => state.places.filtredResult);
  const selectedCategory = useSelector(state => state.places.selectedCategory);

  const [placesData, setPlacesData] = useState(placesList);

  useEffect(() => {
    console.log('placesList', placesList);
    console.log('filtredPlaces', filtredPlaces);
    if(filtredPlaces.length > 0){
      setPlacesData(filtredPlaces)
    }
  }, [selectedCategory,filtredPlaces]);

  return (
    <FlatList
      horizontal
      data={placesData}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={item => item.id}
      style={{flex: 1}}
    />
  );
};

export default ItemsList;

const styles = StyleSheet.create({
  container: {
    height: 405,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 30,
    width: 270,
    borderRadius: 30,
    overflow: 'hidden',
    shadowColor: 'black',
    elevation: 8,
  },
  card: {
    backgroundColor: 'gray',
    width: 225,
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
    padding: 10,
    backgroundColor: colors.lightGray,
    borderRadius: 50,
    alignSelf: 'flex-end',
    margin: 20,
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
