import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native'

const CounterScreen = () => {
  const [count, setCount] = useState(0)
  const increaseCount = () => setCount(count => ++count)
  const decreaseCount = () => setCount(count => --count)
  return (
    <View style={styles.wrap}>
      <Pressable
        onPress={increaseCount}
      >
        <Text style={styles.button}> Add</Text>
      </Pressable>

      <Pressable
        onPress={decreaseCount}
      >
        <Text style={[styles.button, styles.removeButton]}> Substract</Text>
      </Pressable>
      <Text style={styles.title}>
        current count
      </Text>
      <Text style={styles.count}>
        {count}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 30,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 50,
    maxWidth: 160,
    textAlign: 'center',
  },
  button: {
    color: 'white',
    fontSize: 20,
    backgroundColor: '#1f47e3',
    textAlign: 'center',
    paddingVertical: 10,
    marginVertical: 3,
    marginHorizontal: 20,
  },

  removeButton: {
    backgroundColor: '#e10000',
  },

 count: {
   fontSize: 80,
  alignSelf: 'center',
  marginTop: 20,
 }


})

export default CounterScreen