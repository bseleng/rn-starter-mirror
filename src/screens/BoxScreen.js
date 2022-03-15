import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native'
import SimpleColorBox from "../components/SimpleColorBox";

const screenWidth = Dimensions.get('screen').width;
const leftToCenter = (elWidth, horizontalMargin) => (screenWidth - elWidth - horizontalMargin) / 2
const BoxScreen = () => {
  const boxSide = 80

  return (
    <View style={styles.wrap}>
      <View style={styles.titleWrap}>
        <Text style={styles.title}> BoxScreen</Text>
      </View>
      <View style={styles.groupOneWrap}>
        <SimpleColorBox color={'rgba(0,22,255,0.78)'} width={boxSide}/>
        <SimpleColorBox color={'rgb(215,97,173)'} width={boxSide} customStyle={{marginTop: 100}}/>
        <SimpleColorBox color={'rgb(34,101,74)'} width={boxSide}/>
      </View>
      <View style={styles.groupTwoWrap}>
        <SimpleColorBox color={'rgba(190,19,99,0.78)'} width={boxSide}/>
        <SimpleColorBox color={'rgb(105,171,24)'} width={boxSide} customStyle={{position: 'absolute', top: 110, left: leftToCenter(boxSide, 32)}}/>
        <SimpleColorBox color={'rgb(11,7,133)'} width={boxSide}/>
      </View>
      <View style={styles.groupThreeWrap}>
        <SimpleColorBox color={'rgba(157,15,166,0.78)'} width={boxSide}/>
        <SimpleColorBox color={'rgb(106,25,25)'} width={boxSide} customStyle={{alignSelf: 'flex-end'}}/>
        <SimpleColorBox color={'rgb(170,255,240)'} width={boxSide}/>
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
  groupOneWrap: {
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(140,139,139,0.58)',
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  groupTwoWrap: {
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(140,139,139,0.58)',
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  groupThreeWrap: {
    marginTop: 110,
    height: 200,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(140,139,139,0.58)',
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
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