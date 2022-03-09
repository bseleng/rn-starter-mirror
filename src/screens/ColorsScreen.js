import React, {useCallback, useState} from 'react';
import {Button, FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';

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
  const setSlider = (index, color, value) => {
    const colorsDraft = [...colors]
    colorsDraft[index][color] = value
    colorsDraft[index] = getColorObj(
      colorsDraft[index].red,
      colorsDraft[index].green,
      colorsDraft[index].blue,
      colorsDraft[index].isEditable
    )
    setColors(colorsDraft)
  }

  const toggleEditable = (index) => {
    const colorsDraft = [...colors]
    colorsDraft[index].isEditable = !colorsDraft[index].isEditable
    colorsDraft[index] = getColorObj(
      colorsDraft[index].red,
      colorsDraft[index].green,
      colorsDraft[index].blue,
      colorsDraft[index].isEditable
    )
    setColors(colorsDraft)
  }

  return (<View style={styles.wrap}>
    <Button
      title={'Add color'}
      onPress={addColor}
    />
    {colors.length > 0 && (<FlatList
      data={colors}
      keyExtractor={(item, i) => i + item}
      renderItem={({item, index}) => {
        return (
          <Pressable
            style={styles.colorWrap}
            onPress={() => {
              toggleEditable(index)
            }
            }
          >
            <View
              style={[styles.color, styles.bgColor(item.rgb)]}
            >
            </View>
            {!item.isEditable
              ? (
                <Text>{item.rgb}</Text>
              ) : (
                <View style={styles.slider}>
                  <Slider
                    value={item.red}
                    onValueChange={value => setSlider(index, 'red', value)}
                    minimumValue={0}
                    max maximumValue={255}
                    step={1}
                    thumbTintColor={'red'}
                  />
                  <Slider
                    value={item.green}
                    onValueChange={value => setSlider(index, 'green', value)}
                    minimumValue={0}
                    max maximumValue={255}
                    step={1}
                    thumbTintColor={'green'}
                  />
                  <Slider
                    value={item.blue}
                    onValueChange={value => setSlider(index, 'blue', value)}
                    minimumValue={0}
                    max maximumValue={255}
                    step={1}
                    thumbTintColor={'blue'}
                  />
                </View>
              )}
          </Pressable>)
      }}
    />)}
  </View>)
}

const styles = StyleSheet.create({
  wrap: {
    padding: 16, paddingBottom: 50,
  }, colorWrap: {
    flexDirection: 'row', alignItems: 'center',
  }, color: {
    width: 100, height: 100, margin: 10,
  }, bgColor: rgbLocal => ({
    backgroundColor: rgbLocal
  }),
  slider: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
})

export default ColorsScreen