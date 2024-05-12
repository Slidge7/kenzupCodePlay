import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SectionHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular places</Text>
      <Text style={styles.action}>View all</Text>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'semibold',
    color:'black'
  },
  action: {
    fontSize: 16,
    color:'gray'
  },
});
