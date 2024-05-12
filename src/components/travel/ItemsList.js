import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React from 'react'

const categorisData = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
  ];

  const Item = ({category}) => {
    return (
        <TouchableOpacity onPress={()=>{setActive(category.id)}} 
        style={[styles.categoryBtn, active==category.id && {backgroundColor:'black'}]}>
            <Text style={[styles.categoryTxt, active==category.id && {color:'white'}]}>{category.title}</Text>
        </TouchableOpacity>
    )
}



const ItemsList = () => {
  return (
    <View>
      <Text>ItemsList</Text>
    </View>
  )
}

export default ItemsList