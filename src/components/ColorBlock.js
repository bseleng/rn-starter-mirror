import React, {useMemo} from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import {Slider} from "@miblanchard/react-native-slider";
import ColorsActions from "../Actions/ColorsActions";


const ColorBlock = ({red, green, blue, isEditable, index, dispatch}) => {
  const memoizedRgb = useMemo(() => `rgb(${red}, ${green}, ${blue})`, [red, green, blue]);
  const safeColorChange = (baseColor, value) => {
    switch (true) {
      case baseColor === 'red' && value[0] === red[0]:
        return
      case baseColor === 'green' && value[0] === green[0]:
        return
      case baseColor === 'blue' && value[0] === blue[0]:
        return
      default:
        dispatch({type: ColorsActions.changeColor, payload: {index, value, color: baseColor}})
    }
  }
  return (
    <View
      style={styles.colorWrap}
    >
      <Pressable
        style={[styles.color, {backgroundColor: memoizedRgb}]}
        onPress={() => dispatch({type: ColorsActions.toggleEditable, payload: {index, value: !isEditable}})}
      >
      </Pressable>
      {!isEditable
        ? (
          <Text>{memoizedRgb}</Text>
        ) : (
          <View style={styles.slider}>
            <Slider
              value={red}
              onValueChange={value => safeColorChange('red', value)}
              minimumValue={0}
              max maximumValue={255}
              step={1}
              thumbTintColor={'red'}
            />
            <Slider
              value={green}
              onValueChange={value => safeColorChange('green', value)}
              minimumValue={0}
              max maximumValue={255}
              step={1}
              thumbTintColor={'green'}
            />
            <Slider
              value={blue}
              onValueChange={value => safeColorChange('blue', value)}
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