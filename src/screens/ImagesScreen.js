import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'
import ImageDetail from "../components/ImageDetail";
import images from "../lists/images";

const ImagesScreen = () => {
  const content = [
    {title: 'forest', img: images.Forest, score: 8},
    {title: 'beach', img: images.Beach, score: 2},
    {title: 'mountain', img: images.Mountain, score: 3},
  ]

  return (
    <View>
      <Text style={styles.title}> ImagesScreen</Text>
      <FlatList
        data={content}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({item}) => <ImageDetail title={item.title} img={item.img} score={item.score}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 5,
  },
});

export default ImagesScreen;