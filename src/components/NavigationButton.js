import React, {useCallback} from 'react';
import {Pressable, StyleSheet, Text} from "react-native";


const NavigationButton = ({route, title, color, navigate}) => {
  const navigateOnPress = useCallback(() => navigate(route), [route])
  return (
    <Pressable
      style={[
        styles.customButton,
        color ? styles.customColor(color) : {},
      ]}
      onPress={navigateOnPress}
    >
      <Text
        style={styles.customButtonText}
      >
        {title}
      </Text>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  customButton: {
    padding: 10,
    backgroundColor: '#5a9622',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },

  customColor: colorLocal => ({
    backgroundColor: colorLocal
  }),

  customButtonText: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
  }
});

export default NavigationButton