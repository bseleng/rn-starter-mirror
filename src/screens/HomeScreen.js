import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity, Pressable} from 'react-native';

const HomeScreen = ({navigation: {navigate}}) => {
  return (
    <View>
      <Text style={styles.text}>Hi, it's me!</Text>
      <Button
        title={'Components'}
        onPress={() => navigate('Components')}
      />
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => navigate('Lists')}
      >
        <Text
          style={styles.customButtonText}
        >
          Lists
        </Text>
      </TouchableOpacity>

      <Pressable
        style={styles.customButton}
        onPress={() => navigate('Images')}
      >
        <Text
          style={styles.customButtonText}
        >
          Images
        </Text>
      </Pressable>

      <Pressable
        style={styles.customButton}
        onPress={() => navigate('Counter')}
      >
        <Text
          style={styles.customButtonText}
        >
          Counter
        </Text>
      </Pressable>
    </View>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 5,
  },

  customButton: {
    padding: 10,
    backgroundColor: '#3b7707',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,

  },


  customButtonText: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
  }
});

export default HomeScreen;
