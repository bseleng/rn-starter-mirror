import React, {useCallback, useState} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';


const ColorsScreen = () => {
  const [colors, setColors] = useState([]);
  const randomIntRgb = () => String(Math.floor(Math.random() * 256))
  const addColor = useCallback(() => {
    setColors(colors => [...colors, 'rgb(' + randomIntRgb() + ',' + randomIntRgb() + ',' + randomIntRgb() + ')'])
  }, [colors, setColors])

  return (
    <View style={styles.wrap}>
      <Button
        title={'Add color'}
        onPress={addColor}
      />
      {colors.length > 0 && (
        <FlatList
          data={colors}
          keyExtractor={(item, i) => i + item}
          renderItem={({item}) => {
            return (
              <View style={[styles.color, styles.bgColor(item)]}>
                <Text>{item.join}</Text>
              </View>
            )
          }}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    padding: 16
  },
  colorsWrap: {
    flexDirection: 'row',
  },
  color: {
    width: 100,
    height: 50,
    margin: 10,
  },
  bgColor: rgbLocal => ({
    backgroundColor: rgbLocal
  }),
})

export default ColorsScreen