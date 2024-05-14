import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {lightMode} from '../../constants/appColors';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useDispatch} from 'react-redux';
import {searchPlaces} from '../../core/store/reducers/placeReducer';

const colors = lightMode;

const Search = () => {
  const dispatch = useDispatch();

  const search = query => {
    dispatch(searchPlaces(query));
    setSearchQuery(query);
  };
  const [searchQuery, setSearchQuery] = useState();
  return (
    <View style={styles.searchBar}>
      <TextInput
        editable
        placeholder="Search Here ..."
        placeholderTextColor={colors.lightGray}
        onChangeText={text => search(text)}
        value={searchQuery}
        style={styles.searchInput}
      />
      <TouchableOpacity style={styles.searchFilter}>
        <Icon name="sliders" size={24} color={colors.lightGray} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchInput: {},
  searchFilter: {
    paddingLeft: 20,
    borderLeftWidth: 1,
    borderLeftColor: colors.lightGray,
  },
});
