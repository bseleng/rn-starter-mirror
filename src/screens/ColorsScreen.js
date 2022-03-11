import React, {useReducer} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import ColorBlock from "../components/ColorBlock";
import ColorsActions from "../Actions/ColorsActions";

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
    rgb: `rgb(${red}, ${green}, ${blue})`,
    isEditable
  })

}

const reducer = (state, action) => {
  let stateDraft
  switch (action.type) {
    case ColorsActions.addColor :
      return [...state, getColorObj()]
    case ColorsActions.toggleEditable :
      stateDraft = [...state]
      stateDraft[action.payload.index] = {...state[action.payload.index], isEditable: action.payload.value}
      return stateDraft
    case ColorsActions.changeColor:
      stateDraft = [...state]
      stateDraft[action.payload.index] = {...state[action.payload.index], [action.payload.color]: action.payload.value}
      return stateDraft
    default: return state
  }
}

const ColorsScreen = () => {
  const [colors, dispatch] = useReducer(reducer, [])

  return (<View style={styles.wrap}>
    <Button
      title={'Add color'}
      onPress={() => dispatch({type: ColorsActions.addColor})}
    />
    {colors.length > 0 && (
      <FlatList
        data={colors}
        keyExtractor={(item, i) => i + item}
        renderItem={({item: {red, green, blue, rgb, isEditable}, index}) => {
          console.log('TEST renderItem', colors.length)
          return (<ColorBlock
            red={red}
            green={green}
            blue={blue}
            rgb={rgb}
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
    padding: 16, paddingBottom: 50,
  },
})

export default ColorsScreen