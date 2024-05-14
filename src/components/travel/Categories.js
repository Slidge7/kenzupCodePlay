import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import { filterPlacesByCategory } from '../../core/store/reducers/placeReducer';



const Category = ({category, active, setActive}) => {
    
    const dispatch = useDispatch();

    const selectCategory = (categoryId) => {
      dispatch(filterPlacesByCategory(categoryId)); 
      setActive(categoryId)
    };
    


  return (
    <TouchableOpacity
      onPress={() => {
        selectCategory(category.id);
      }}
      style={[
        styles.categoryBtn,
        active == category.id && {backgroundColor: 'black'},
      ]}>
      <Text
        style={[styles.categoryTxt, active == category.id && {color: 'white'}]}>
        {category.title}
      </Text>
    </TouchableOpacity>
  );
};

const Categories = () => {

  const categorisData = useSelector(state => state.places.categorie);
  const [active, setActive] = useState(categorisData[0].id);
  return (
    <FlatList
      horizontal
      data={categorisData}
      renderItem={({item}) => (
        <Category active={active} setActive={setActive} category={item} />
      )}
      keyExtractor={item => item.id}
      style={styles.categorieList}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  categorieList: {
    marginVertical: 20,
  },
  categoryBtn: {
    marginHorizontal: 5,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  categoryTxt: {
    color: 'gray',
  },
});
