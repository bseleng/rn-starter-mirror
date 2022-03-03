import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native'

const ImageDetail = ({title, img, score}) => (
  <View style={styles.wrap}>
    <Image source={img}/>
    <Text> {title}</Text>
    <Text> {score}</Text>
  </View>
)

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',

  },

})

export  default  ImageDetail