import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import {Slider} from "@miblanchard/react-native-slider";


const ColorBlock = ({red, green, blue, rgb, isEditable, index, toggleEditable, setSlider}) => {
  return (
    <View
      style={styles.colorWrap}
    >
      <Pressable
        style={[styles.color, styles.bgColor(rgb)]}
        onPress={() => toggleEditable(index)}

      >
      </Pressable>
      {!isEditable
        ? (
          <Text>{rgb}</Text>
        ) : (
          <View style={styles.slider}>
            <Slider
              value={red}
              onValueChange={value => setSlider(index, 'red', value)}
              minimumValue={0}
              max maximumValue={255}
              step={1}
              thumbTintColor={'red'}
            />
            <Slider
              value={green}
              onValueChange={value => setSlider(index, 'green', value)}
              minimumValue={0}
              max maximumValue={255}
              step={1}
              thumbTintColor={'green'}
            />
            <Slider
              value={blue}
              onValueChange={value => setSlider(index, 'blue', value)}
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