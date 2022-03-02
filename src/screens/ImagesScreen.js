import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const ImagesScreen = () => {
  const content = []

  return (
    <View>
      <Text style={styles.title}> ImagesScreen</Text>
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