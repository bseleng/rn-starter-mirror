import React, {useCallback, useState} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import ColorBlock from "../components/ColorBlock";

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

const ColorsScreen = () => {
  const [colors, setColors] = useState([]);
  const addColor = useCallback(() => {
    setColors(colors => [...colors, getColorObj()])
  }, [colors, setColors])
  const setSlider = useCallback((index, color, value) => {
    const colorsDraft = [...colors]
    colorsDraft[index][color] = value
    colorsDraft[index] = getColorObj(
      colorsDraft[index].red,
      colorsDraft[index].green,
      colorsDraft[index].blue,
      colorsDraft[index].isEditable
    )
    setColors(colorsDraft)
  }, [colors])

  const toggleEditable = useCallback((index) => {
    const colorsDraft = [...colors]
    colorsDraft[index].isEditable = !colorsDraft[index].isEditable
    colorsDraft[index] = getColorObj(
      colorsDraft[index].red,
      colorsDraft[index].green,
      colorsDraft[index].blue,
      colorsDraft[index].isEditable
    )
    setColors(colorsDraft)
  }, [colors])

  return (<View style={styles.wrap}>
    <Button
      title={'Add color'}
      onPress={addColor}
    />
    {colors.length > 0 && (
      <FlatList
        data={colors}
        keyExtractor={(item, i) => i + item}
        renderItem={({item: {red, green, blue, rgb, isEditable}, index}) => (
          <ColorBlock
            red={red}
            green={green}
            blue={blue}
            rgb={rgb}
            isEditable={isEditable}
            index={index}
            setSlider={setSlider}
            toggleEditable={toggleEditable}
          />
        )}
      />)}
  </View>)
}

const styles = StyleSheet.create({
  wrap: {
    padding: 16, paddingBottom: 50,
  },
})

export default ColorsScreen