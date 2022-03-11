import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import {Slider} from "@miblanchard/react-native-slider";
import ColorsActions from "../Actions/ColorsActions";


const ColorBlock = ({red, green, blue, isEditable, index, dispatch}) => {
  const rgb = `rgb(${red}, ${green}, ${blue})`
  return (
    <View
      style={styles.colorWrap}
    >
      <Pressable
        style={[styles.color, {backgroundColor: rgb}]}
        onPress={() => dispatch({type: ColorsActions.toggleEditable, payload: {index, value: !isEditable}})}
      >
      </Pressable>
      {!isEditable
        ? (
          <Text>{rgb}</Text>
        ) : (
          <View style={styles.slider}>
            <Slider
              value={red}
              onValueChange={value => dispatch({type: ColorsActions.changeColor, payload: {index, value, color: 'red'}})}
              minimumValue={0}
              max maximumValue={255}
              step={1}
              thumbTintColor={'red'}
            />
            <Slider
              value={green}
              onValueChange={value => dispatch({type: ColorsActions.changeColor, payload:{index, value, color: 'green'}})}
              minimumValue={0}
              max maximumValue={255}
              step={1}
              thumbTintColor={'green'}
            />
            <Slider
              value={blue}
              onValueChange={value => dispatch({type: ColorsActions.changeColor, payload:{index, value, color: 'blue'}})}
              minimumValue={0}
              max maximumValue={255}
              step={1}
              thumbTintColor={'blue'}
            />
          </View>
        )}
    </View>)
}


const styles = StyleSheet.create({
  colorWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  color: {
    width: 100,
    height: 100,
    margin: 10,

  },
  bgColor: rgbLocal => ({backgroundColor: rgbLocal}),
  slider: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
})

export default ColorBlock