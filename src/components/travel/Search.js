import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {lightMode} from '../../constants/appColors';
import Icon from 'react-native-vector-icons/FontAwesome6';

const colors = lightMode;


const Search = () => {
  const [searchQuery, setSearchQuery] = useState();
  return (
    <View style={styles.searchBar}>
      <TextInput
        editable
        placeholder="Search Here ..."
        placeholderTextColor={colors.lightGray}
        onChangeText={text => setSearchQuery(text)}
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
  searchBar:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderWidth:1,
    borderColor:colors.lightGray,
    borderRadius:20,
    paddingHorizontal:15,
    marginBottom:20
  },
searchInput:{

},
searchFilter:{
    paddingLeft:20,
    borderLeftWidth:1,
    borderLeftColor:colors.lightGray
},
});
