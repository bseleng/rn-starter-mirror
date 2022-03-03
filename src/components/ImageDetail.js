import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native'

const ImageDetail = ({title, img, score}) => (
  <View style={styles.wrap}>
    <View style={styles.container}>
      <View>
        <Image source={img}/>
        <Text> {title}</Text>
      </View>
      <Text style={styles.score}> {score}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  score: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 18,
    backgroundColor: '#494949',
    color: '#fff',
    borderRadius: 70,
    marginLeft: 20,
    textAlign: 'center',
    padding: 20,
  },

})

export default ImageDetail