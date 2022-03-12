import React, {useReducer} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native'

const actionTypes = {
  increaseCount: 'increaseCount',
  decreaseCount: 'decreaseCount',
}

const reducer = (state, {type, payload}) => {
  const {count} = state;
  switch (type) {
    case actionTypes.increaseCount:
      return {...state, count: count+payload};
    case actionTypes.decreaseCount:
      return count - payload >= 0 ?  {...state, count: count - payload} : state;
    default:
      return state
  }
}

const CounterScreen = () => {
  const increment = 10;
  const [state, dispatch] = useReducer(reducer, {count: 0})
  const increaseCount = () => dispatch({type:actionTypes.increaseCount, payload:increment})
  const decreaseCount = () =>  dispatch({type:actionTypes.decreaseCount, payload:increment})
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
        {state.count}
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