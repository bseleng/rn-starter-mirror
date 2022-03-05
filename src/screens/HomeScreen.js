import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import NavigationButton from "../components/NavigationButton";

  const screens = [
    {title: 'Input', route: 'Components', color:''},
    {title: 'List', route: 'Lists', color:''},
    {title: 'Images', route: 'Images', color:'blue'},
    {title: 'Counter', route: 'Counter', color:''},
    {title: 'Colors randomizer', route: 'Colors', color:'orange'},
  ];

const HomeScreen = ({navigation: {navigate}}) => {
  return (
    <View  style={styles.wrap}>
      <Text style={styles.text}>Hi, it's me!</Text>
      <FlatList
      data={screens}
      keyExtractor={(item, index) => index+item}
      renderItem={({item: {title, route, color}}) => (
        <NavigationButton
          navigate={navigate}
          title={title}
          route={route}
          color={color}
        />)}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 16
  },
  text: {
    fontSize: 30,
    marginBottom: 5,
  },
});

export default HomeScreen;
