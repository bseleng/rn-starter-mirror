import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'

const ListsScreen = () => {
  const makeFriends = (structure, number) => {
    let tempFriends = [];
    do {
      tempFriends.push({
        ...structure,
        name: structure.name + (tempFriends.length + 1),
        age: Math.floor(Math.random() * 65)
      })
    } while (tempFriends.length < number)

    return tempFriends
  }

  const friends = makeFriends({name: 'Friend #', newFriend: true,}, 355)
  const cities = makeFriends({name: 'City #'}, 15)
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}> Lists Screen</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(city, i) => i + city.name}
        data={cities}
        renderItem={({item}) => (
          <View style={styles.horizontalWrap}>
            <Text style={styles.horizontalItem}> {item.name} </Text>
            <Text style={styles.horizontalItem}> {item.age + 'K'} </Text>
          </View>
        )}
      />
      <FlatList
        keyExtractor={(friend, i) => i + friend.name}
        data={friends}
        renderItem={({item}) => (
          <Text style={styles.verticalItem}> {item.name + " - Age " + item.age} </Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
  },
  wrap: {
    paddingVertical: 5
  },
  horizontalItem: {
    marginHorizontal: 5,
    paddingHorizontal: 2,
    borderRightWidth: 1,
    borderRightColor: 'grey',
    paddingBottom: 2,
  },
  verticalItem: {
    marginVertical: 5,
    paddingVertical: 2,
  },
  horizontalWrap: {
    flexDirection: 'column',
  }
})

export default ListsScreen