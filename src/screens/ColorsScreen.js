import React, {useReducer} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import ColorBlock from "../components/ColorBlock";
import ColorsActions from "../Actions/ColorsActions";
import {Counter} from "../utils/Counter";

const getRandomColorValue = () => String(Math.floor(Math.random() * 256))
const getColorObj = (
  red = getRandomColorValue(),
  green = getRandomColorValue(),
  blue = getRandomColorValue(),
  isEditable = false,
) => {
  return ({
    red,
    green,
    blue,
    isEditable
  })
}

const reducer = (state, {type, payload}) => {
  let stateDraft
  switch (type) {
    case ColorsActions.addColor:
      return [...state, getColorObj()]
    case ColorsActions.toggleEditable:
      stateDraft = [...state]
      stateDraft[payload.index] = {...stateDraft[payload.index], isEditable: payload.value}
      return stateDraft
    case ColorsActions.changeColor:
      stateDraft = [...state]
      stateDraft[payload.index] = {
        ...stateDraft[payload.index],
        [payload.color]: payload.value
      }
      return stateDraft
    default:
      return state
  }
}

const ColorsScreen = () => {
  const [colors, dispatch] = useReducer(reducer, [])

  return (
    <View style={styles.wrap}>
      <Counter title={'colors screen'}/>
    <Button
      title={'Add color'}
      onPress={() => dispatch({type: ColorsActions.addColor})}
    />
    {colors.length > 0 && (
      <FlatList
        data={colors}
        keyExtractor={(item, i) => i + item}
        renderItem={({item: {red, green, blue, isEditable}, index}) => {
          return (<ColorBlock
            red={red}
            green={green}
            blue={blue}
            isEditable={isEditable}
            index={index}
            dispatch={dispatch}
          />)
        }}
      />)}
  </View>)
}

const styles = StyleSheet.create({
  wrap: {
    padding: 16,
    paddingBottom: 50,
  },
})

export default ColorsScreen