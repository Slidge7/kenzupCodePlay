import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/travel/Header';
import Search from '../../components/travel/Search';
import SectionHeader from '../../components/travel/SectionHeader';
import Categories from '../../components/travel/Categories';
import ItemsList from '../../components/travel/ItemsList';



const userName = 'David';
const userPic = require('../../assets/img/user_pic.png');



const TravelHome = () => {
  return (
    <ScrollView style={styles.container}>
      <Header userName={userName} userPic={userPic} />
      <Search />
      <SectionHeader />
      <Categories />
      <ItemsList />
    </ScrollView>
  );
};

export default TravelHome;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 20,
    paddingVertical:10
  }
});
