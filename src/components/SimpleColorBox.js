import React from 'react';
import {View, StyleSheet} from 'react-native'

const SimpleColorBox = ({color, width, height, customStyle}) => {
  return(
    <View
      style={[
        styles.color(color),
        styles.width(width),
        styles.height(width, height),
        styles.customStyle(customStyle),
      ]}
    />
  )
}

const styles = StyleSheet.create({
  color: (colorLocal) => ({backgroundColor: colorLocal}),
  width: (widthLocal) => ({width: widthLocal}),
  height: (widthLocal, heightLocal) => ({height: heightLocal || widthLocal}),
  customStyle: (customStyleLocal) => ({
    ...customStyleLocal
  })
})

export default  SimpleColorBox