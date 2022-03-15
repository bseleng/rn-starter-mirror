import React from 'react';
import {StyleSheet, Text, View} from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.wrap}>
      <View style={styles.titleWrap}>
        <Text style={styles.title}> BoxScreen</Text>
      </View>
      <View style={styles.childrenWrap}>
        <Text style={[styles.text, {backgroundColor: 'rgba(31,71,227,0.5)'}]}> Child #1</Text>
        <Text style={[styles.text, {backgroundColor: 'rgba(206,0,0,0.5)'}]}> Child #2</Text>
        <Text style={[styles.text, {backgroundColor: 'rgba(61,131,43,0.5)'}]}> Child #3</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 16,

  },
  titleWrap: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(140,139,139,0.58)'
  },
  childrenWrap: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    borderLeftWidth: 10,
    borderLeftColor: 'rgba(16,157,115,0.76)',
    paddingLeft: 10,
    marginVertical: 5
  },
  text: {
    fontSize: 14,
    paddingLeft: 15,
    marginVertical: 5
  }
})

export default BoxScreen